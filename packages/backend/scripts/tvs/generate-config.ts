import * as fs from 'fs'
import {
  type Env,
  LogFormatterPretty,
  type LogLevel,
  Logger,
  getEnv,
} from '@l2beat/backend-tools'
import {
  type ChainConfig,
  type Project,
  ProjectService,
  type TvsToken,
} from '@l2beat/config'
import { HttpClient, RpcClient } from '@l2beat/shared'
import { assert, ProjectId, type TokenId, UnixTime } from '@l2beat/shared-pure'
import {
  boolean,
  command,
  flag,
  optional,
  positional,
  run,
  string,
} from 'cmd-ts'
import { LocalExecutor } from '../../src/modules/tvs/tools/LocalExecutor'
import { mapConfig } from '../../src/modules/tvs/tools/mapConfig'

const args = {
  project: positional({
    type: optional(string),
    displayName: 'projectId',
    description: 'Project for which tvs config will be generated',
  }),
  includeZeroAmounts: flag({
    type: boolean,
    long: 'include-zero-amounts',
    short: 'iza',
    description: 'Include zero amounts in the config',
  }),
}

const cmd = command({
  name: 'generate-tvs-config',
  args,
  handler: async (args) => {
    const env = getEnv()
    const logger = initLogger(env)
    const ps = new ProjectService()
    const localExecutor = new LocalExecutor(ps, env, logger)

    let projects: Project<'tvlConfig', 'chainConfig'>[] | undefined

    if (!args.project) {
      projects = await ps.getProjects({
        select: ['tvlConfig'],
        optional: ['chainConfig'],
      })

      if (!projects) {
        logger.error('No TVS projects found')
        process.exit(1)
      }
    } else {
      const project = await ps.getProject({
        id: ProjectId(args.project),
        select: ['tvlConfig'],
        optional: ['chainConfig'],
      })

      if (!project) {
        logger.error(`Project '${args.project}' not found`)
        process.exit(1)
      }

      projects = [project]
    }

    const projectsWithChain = (
      await ps.getProjects({ select: ['chainConfig'] })
    ).map((p) => p.chainConfig)

    const chains = new Map(projectsWithChain.map((p) => [p.name, p]))

    let totalTvs = 0
    const timestamp =
      UnixTime.toStartOf(UnixTime.now(), 'hour') - 3 * UnixTime.HOUR

    for (const project of projects) {
      logger.info(`Generating TVS config for project ${project.id}`)
      const tvsConfig = await generateConfigForProject(project, chains, logger)

      let newConfig: TvsToken[] = []
      const filePath = `./../config/src/tvs/json/${project.id.replace('=', '').replace(';', '')}.json`

      if (tvsConfig.tokens.length > 0) {
        logger.info('Executing TVS to exclude zero-valued tokens')
        const tvs = await localExecutor.run(tvsConfig, timestamp, false)

        const valueForProject = tvs.reduce((acc, token) => {
          return acc + token.valueForProject
        }, 0)

        const valueForSummary = tvs.reduce((acc, token) => {
          return acc + token.valueForSummary
        }, 0)

        totalTvs += valueForSummary

        logger.info(`TVS for project ${toDollarString(valueForProject)}`)
        logger.info(`Total TVS ${toDollarString(totalTvs)}`)

        newConfig = tvs
          .filter((token) => token.value !== 0 || args.includeZeroAmounts)
          .map((token) => token.tokenId)
          .sort((a, b) => a.localeCompare(b))
          .map((tokenId) => {
            const tokenConfig = tvsConfig.tokens.find((t) => t.id === tokenId)
            assert(tokenConfig, `${tokenId} config not found`)
            return tokenConfig
          })
      } else {
        logger.info('No tokens found')
        if (fs.existsSync(filePath)) {
          logger.info(`Deleting file: ${filePath}`)
          fs.unlinkSync(filePath)
        }
      }

      const currentConfig = readFromFile(filePath)
      const mergedTokens = mergeWithExistingConfig(
        newConfig,
        currentConfig,
        logger,
      )

      if (mergedTokens.length > 0) {
        logger.info(`Writing results to file: ${filePath}`)
        writeToFile(filePath, project.id, mergedTokens)
      }
    }

    process.exit(0)
  },
})

run(cmd, process.argv.slice(2))

async function generateConfigForProject(
  project: Project<'tvlConfig', 'chainConfig'>,
  chains: Map<string, ChainConfig>,
  logger: Logger,
) {
  const env = getEnv()

  const rpcApi = project.chainConfig?.apis.find((a) => a.type === 'rpc')
  const rpc = rpcApi
    ? new RpcClient({
        http: new HttpClient(),
        callsPerMinute: env.integer(
          `${project.id.toUpperCase()}_RPC_CALLS_PER_MINUTE`,
          rpcApi.callsPerMinute ?? 120,
        ),
        retryStrategy: 'RELIABLE',
        logger,
        url: env.string(`${project.id.toUpperCase()}_RPC_URL`, rpcApi.url),
        sourceName: project.id,
      })
    : undefined

  return mapConfig(project, chains, logger, rpc)
}

function initLogger(env: Env) {
  const logLevel = env.string('LOG_LEVEL', 'INFO') as LogLevel
  const logger = new Logger({
    logLevel: logLevel,
    transports: [
      {
        transport: console,
        formatter: new LogFormatterPretty(),
      },
    ],
  })
  return logger
}

function writeToFile(
  filePath: string,
  project: string,
  nonZeroTokens: TvsToken[],
) {
  const wrapper = {
    $schema: 'schema/tvs-config-schema.json',
    projectId: ProjectId(project),
    tokens: nonZeroTokens,
  }

  fs.writeFileSync(
    filePath,
    JSON.stringify(
      wrapper,
      (_, v) => (typeof v === 'bigint' ? v.toString() : v),
      2,
    ) + '\n',
  )
}

function readFromFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return []
  }

  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  return json.tokens as TvsToken[]
}

function mergeWithExistingConfig(
  nonZeroTokens: TvsToken[],
  currentConfig: TvsToken[],
  logger: Logger,
) {
  const resultMap = new Map<string, TvsToken>()
  nonZeroTokens.forEach((token) => {
    if (resultMap.has(token.id)) {
      logger.warn(`Duplicate detected: ${token.id}`)
      token.id = (token.id + '-duplicate') as TokenId
    }

    resultMap.set(token.id, token)
  })

  const customTokens = currentConfig.filter((t) => t.mode === 'custom')
  customTokens.forEach((token) => {
    resultMap.set(token.id, token)
  })

  return Array.from(resultMap.values()).sort((a, b) => a.id.localeCompare(b.id))
}

function toDollarString(value: number) {
  if (value > 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`
  } else if (value > 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`
  } else {
    return `$${value.toFixed(2)}`
  }
}
