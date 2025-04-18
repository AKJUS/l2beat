import { randomUUID } from 'crypto'
import { EthereumAddress } from '@l2beat/shared-pure'
import { expect } from 'earl'
import type { Analysis, AnalyzedContract } from '../analysis/AddressAnalyzer'
import { buildGraph, resolveAnalysis } from './resolveAnalysis'
import type { PathElement } from './resolvePermissions'

const BASE_CONTRACT: AnalyzedContract = {
  type: 'Contract',
  address: EthereumAddress.random(),
  name: randomUUID(),
  derivedName: undefined,
  isVerified: false,
  implementations: [],
  values: {},
  errors: {},
  abis: {},
  sourceBundles: [],
  relatives: {},
}

describe(resolveAnalysis.name, () => {
  it('vault controlled by 2/7 multisig', () => {
    const vaultAddress = EthereumAddress.random()
    const msigAddress = EthereumAddress.random()
    const members = Array.from({ length: 7 }, () => EthereumAddress.random())

    const input: Analysis[] = [
      {
        ...BASE_CONTRACT,
        address: vaultAddress,
      },
      {
        ...BASE_CONTRACT,
        address: msigAddress,
        values: {
          $threshold: 2,
          $members: members,
        },
        combinedMeta: {
          permissions: [
            {
              type: 'interact',
              delay: 0,
              target: vaultAddress,
            },
          ],
        },
      },
      ...members.map(
        (m) =>
          ({
            type: 'EOA',
            address: m,
          }) as Analysis,
      ),
    ]

    expect(resolveAnalysis(input)).toEqual([
      {
        path: [
          pathElem({ address: vaultAddress, gives: 'interact' }),
          pathElem({ address: msigAddress }),
        ],
      },
    ])
  })

  it('vault controlled by 2/2 multisig', () => {
    const vaultAddress = EthereumAddress.random()
    const msigAddress = EthereumAddress.random()
    const members = Array.from({ length: 2 }, () => EthereumAddress.random())

    const input: Analysis[] = [
      {
        ...BASE_CONTRACT,
        address: vaultAddress,
      },
      {
        ...BASE_CONTRACT,
        address: msigAddress,
        values: {
          $threshold: 2,
          $members: members,
        },
        combinedMeta: {
          permissions: [
            {
              type: 'interact',
              delay: 0,
              target: vaultAddress,
            },
          ],
        },
      },
      ...members.map(
        (m) =>
          ({
            type: 'EOA',
            address: m,
          }) as Analysis,
      ),
    ]

    expect(resolveAnalysis(input)).toEqual([
      {
        path: [
          pathElem({ address: vaultAddress, gives: 'interact' }),
          pathElem({ address: msigAddress }),
        ],
      },
    ])
  })

  it('vault controlled by 1/7 multisig', () => {
    const vaultAddress = EthereumAddress.random()
    const msigAddress = EthereumAddress.random()
    const members = Array.from({ length: 7 }, () => EthereumAddress.random())

    const input: Analysis[] = [
      {
        ...BASE_CONTRACT,
        address: vaultAddress,
      },
      {
        ...BASE_CONTRACT,
        address: msigAddress,
        values: {
          $threshold: 1,
          $members: members,
        },
        combinedMeta: {
          permissions: [
            {
              type: 'interact',
              delay: 0,
              target: vaultAddress,
            },
          ],
        },
      },
      ...members.map(
        (m) =>
          ({
            type: 'EOA',
            address: m,
          }) as Analysis,
      ),
    ]

    expect(resolveAnalysis(input)).toEqual(
      members.map((m) => ({
        path: [
          pathElem({ address: vaultAddress, gives: 'interact' }),
          pathElem({ address: msigAddress, gives: 'member' }),
          pathElem({ address: m }),
        ],
      })),
    )
  })

  it('vault controlled by 1/2 multisig', () => {
    const vaultAddress = EthereumAddress.random()
    const msigAddress = EthereumAddress.random()
    const members = Array.from({ length: 2 }, () => EthereumAddress.random())

    const input: Analysis[] = [
      {
        ...BASE_CONTRACT,
        address: vaultAddress,
      },
      {
        ...BASE_CONTRACT,
        address: msigAddress,
        values: {
          $threshold: 1,
          $members: members,
        },
        combinedMeta: {
          permissions: [
            {
              type: 'interact',
              delay: 0,
              target: vaultAddress,
            },
          ],
        },
      },
      ...members.map(
        (m) =>
          ({
            type: 'EOA',
            address: m,
          }) as Analysis,
      ),
    ]

    expect(resolveAnalysis(input)).toEqual(
      members.map((m) => ({
        path: [
          pathElem({ address: vaultAddress, gives: 'interact' }),
          pathElem({ address: msigAddress, gives: 'member' }),
          pathElem({ address: m }),
        ],
      })),
    )
  })

  it('vault controlled by 1/1 multisig', () => {
    const vaultAddress = EthereumAddress.random()
    const msigAddress = EthereumAddress.random()
    const members = Array.from({ length: 1 }, () => EthereumAddress.random())

    const input: Analysis[] = [
      {
        ...BASE_CONTRACT,
        address: vaultAddress,
      },
      {
        ...BASE_CONTRACT,
        address: msigAddress,
        values: {
          $threshold: 1,
          $members: members,
        },
        combinedMeta: {
          permissions: [
            {
              type: 'interact',
              delay: 0,
              target: vaultAddress,
            },
          ],
        },
      },
      ...members.map(
        (m) =>
          ({
            type: 'EOA',
            address: m,
          }) as Analysis,
      ),
    ]

    expect(resolveAnalysis(input)).toEqual(
      members.map((m) => ({
        path: [
          pathElem({ address: vaultAddress, gives: 'interact' }),
          pathElem({ address: msigAddress, gives: 'member' }),
          pathElem({ address: m }),
        ],
      })),
    )
  })

  it('single analyzed contract with meta', () => {
    const contractAddress = EthereumAddress.random()
    const targetAddress = EthereumAddress.random()
    const input: Analysis[] = [
      {
        ...BASE_CONTRACT,
        address: contractAddress,
        combinedMeta: {
          permissions: [
            {
              type: 'interact',
              delay: 10,
              target: targetAddress,
            },
          ],
        },
      },
    ]

    expect(resolveAnalysis(input)).toEqual([
      {
        path: [
          pathElem({ address: targetAddress, delay: 10, gives: 'interact' }),
          pathElem({ address: contractAddress }),
        ],
      },
    ])
  })

  it('single analyzed contract without meta', () => {
    const input: Analysis[] = [
      {
        ...BASE_CONTRACT,
        address: EthereumAddress.random(),
      },
    ]

    expect(resolveAnalysis(input)).toBeEmpty()
  })

  it('single analyzed EOA with meta', () => {
    const eoaAddress = EthereumAddress.random()
    const targetAddress = EthereumAddress.random()
    const input: Analysis[] = [
      {
        type: 'EOA',
        name: undefined,
        address: eoaAddress,
        derivedName: undefined,
        isVerified: false,
        implementations: [],
        values: {},
        errors: {},
        abis: {},
        sourceBundles: [],
        relatives: {},
        combinedMeta: {
          permissions: [
            {
              type: 'interact',
              delay: 10,
              description: 'description',
              condition: 'condition',
              target: targetAddress,
            },
          ],
        },
      },
    ]

    expect(resolveAnalysis(input)).toEqual([
      {
        path: [
          pathElem({
            address: targetAddress,
            delay: 10,
            gives: 'interact',
            description: 'description',
            condition: 'condition',
          }),
          pathElem({ address: eoaAddress }),
        ],
      },
    ])
  })

  it('single analyzed EOA without meta', () => {
    const input: Analysis[] = [
      {
        type: 'EOA',
        name: undefined,
        derivedName: undefined,
        isVerified: false,
        implementations: [],
        values: {},
        errors: {},
        abis: {},
        sourceBundles: [],
        relatives: {},
        address: EthereumAddress.random(),
      },
    ]

    expect(resolveAnalysis(input)).toBeEmpty()
  })

  it('empty returns empty', () => {
    const input: Analysis[] = []
    expect(resolveAnalysis(input)).toBeEmpty()
  })

  it("doesn't miss contract data when permission appears earlier", () => {
    const contractAddress = EthereumAddress.random()
    const contractAddress2 = EthereumAddress.random()
    const input: Analysis[] = [
      {
        ...BASE_CONTRACT,
        address: contractAddress,
        combinedMeta: {
          permissions: [
            {
              type: 'interact',
              delay: 10,
              target: contractAddress2,
            },
          ],
        },
      },
      {
        ...BASE_CONTRACT,
        address: contractAddress2,
        values: {
          ...BASE_CONTRACT.values,
          $threshold: 3,
        },
        combinedMeta: {
          canActIndependently: false,
        },
      },
    ]

    expect(buildGraph(input)).toEqual({
      [contractAddress.toString()]: {
        address: contractAddress,
        delay: 0,
        threshold: 1,
        edges: [],
        canActIndependently: undefined,
      },
      [contractAddress2.toString()]: {
        address: contractAddress2,
        delay: 0,
        threshold: 3,
        edges: [
          {
            toNode: contractAddress,
            delay: 10,
            permission: 'interact',
            description: undefined,
            condition: undefined,
          },
        ],
        canActIndependently: false,
      },
    })
  })
})

function pathElem<T>(elem: Partial<PathElement<T>>): PathElement<T> {
  if (elem.address === undefined) {
    throw new Error('Address is required')
  }
  return {
    address: elem.address,
    delay: elem.delay ?? 0,
    description: elem.description,
    condition: elem.condition,
    gives: elem.gives,
  }
}
