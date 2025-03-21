import { EthereumAddress, UnixTime } from '@l2beat/shared-pure'
import type { ScalingProject } from '../../internalTypes'
import { upcomingL2 } from '../../templates/upcoming'

export const celo: ScalingProject = upcomingL2({
  id: 'celo',
  capability: 'universal',
  addedAt: UnixTime(1718876598), // '2024-06-20T09:43:18Z'
  display: {
    name: 'Celo',
    slug: 'celo',
    description:
      'Celo announced a strategic move to integrate with the Ethereum ecosystem as an OP Stack L2.',
    purposes: ['Universal'],
    category: 'Optimium',
    stack: 'OP Stack',
    links: {
      websites: ['https://celo.org/'],
      documentation: ['https://docs.celo.org/'],
      explorers: ['https://explorer.celo.org/mainnet/'],
      repositories: ['https://github.com/celo-org'],
      socialMedia: ['https://x.com/Celo', 'https://discord.com/invite/celo'],
    },
  },
  chainConfig: {
    name: 'celo',
    chainId: 42220,
    explorerUrl: 'https://celoscan.io',
    multicallContracts: [
      {
        address: EthereumAddress('0xcA11bde05977b3631167028862bE2a173976CA11'),
        batchSize: 150,
        sinceBlock: 13112599,
        version: '3',
      },
    ],
    apis: [
      {
        type: 'etherscan',
        url: 'https://api.celoscan.io/api',
        contractCreationUnsupported: true,
      },
    ],
  },
})
