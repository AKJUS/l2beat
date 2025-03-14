import type { Project, ProjectTvlEscrow } from '@l2beat/config'
import {
  assert,
  type AmountConfigEntry,
  AssetId,
  type Token,
} from '@l2beat/shared-pure'
import { getAggLayerL2TokenEntry } from '../aggLayerL2Tokens'
import { getAggLayerNativeEtherPremintedEntry } from '../aggLayerNativeEtherPreminted'
import { getAggLayerNativeEtherWrappedEntry } from '../aggLayerNativeEtherWrapped'

export function aggLayerEscrowToEntries(
  escrow: ProjectTvlEscrow,
  project: Project<'tvlConfig', 'chainConfig'>,
  aggLayerIncludedL1Tokens: string[],
  tokenList: Token[],
) {
  assert(escrow.sharedEscrow?.type === 'AggLayer', 'AggLayer escrow expected')
  const entries: AmountConfigEntry[] = []

  for (const token of escrow.tokens) {
    if (
      token.address === undefined ||
      aggLayerIncludedL1Tokens?.includes(token.symbol)
    ) {
      continue
    }
    const chain = project.chainConfig
    assert(chain, `Missing chain for: ${project.id}`)
    const configEntry = getAggLayerL2TokenEntry(chain, token, escrow, project)

    entries.push(configEntry)
  }
  if (escrow.sharedEscrow.nativeAsset === 'etherPreminted') {
    const chain = project.chainConfig
    assert(chain, `Missing chain for: ${project.id}`)
    assert(chain.sinceTimestamp, 'Chain should have sinceTimestamp')

    const configEntry = getAggLayerNativeEtherPremintedEntry(
      chain,
      escrow,
      project,
    )

    entries.push(configEntry)
  }
  if (escrow.sharedEscrow.nativeAsset === 'etherWrapped') {
    const chain = project.chainConfig
    assert(chain, `Missing chain for: ${project.id}`)
    assert(chain.sinceTimestamp, 'Chain should have sinceTimestamp')
    const l1Weth = tokenList.find(
      (t) => AssetId.create('ethereum', t.address) === AssetId.WETH,
    )
    assert(l1Weth, 'Ethereum WETH token not found')

    const configEntry = getAggLayerNativeEtherWrappedEntry(
      chain,
      l1Weth,
      escrow,
      project,
    )

    entries.push(configEntry)
  }

  return entries
}
