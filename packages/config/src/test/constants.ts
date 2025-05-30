// NOTE(radomski): We want to push towards new projects being discovery driven.
// This is why we created a test that checks if new projects are using
// discovery driven data. Say you're adding a new OP Stack project we assume
// that it's going to be discovery driven. In cases where the project deviates
// from the template too hard or uses a new codebase that we don't discovery
// drive yet you can add this project to this list in order to skip it during
// the test. It's just a manual override saying "I acknowledge that this
// project is not being discovery driven".

export const NON_DISCOVERY_DRIVEN_PROJECTS: string[] = [
  // L2s
  'ancient',
  'apex',
  'arbitrum',
  'astarzkevm',
  'alienx',
  'aztec',
  'base',
  'cronoszkevm',
  'honeypot',
  'degate3',
  'dydx',
  'eclipse',
  'fuel',
  'fuelv1',
  'gpt',
  'grvt',
  'hychain',
  'hyperliquid',
  'immutablex',
  'immutablezkevm',
  'ink',
  'kroma',
  'lightlink',
  'linea',
  'loopring',
  'lumia',
  'metis',
  'morph',
  'myria',
  'nova',
  'optimism',
  'paradex',
  'polygon-pos',
  'polygonzkevm',
  'reya',
  'deversifi',
  'scroll',
  'silicon',
  'sophon',
  'sorare',
  'starknet',
  'swell',
  'taiko',
  'ternoa',
  'treasure',
  'brine',
  'termstructure',
  'wirex',
  'witness',
  'xchain',
  'xlayer',
  'zeronetwork',
  'zircuit',
  'zkfair',
  'zkspace',
  'zksync2',
  'zksync',

  // L3s
  'apechain',
  'bugbuster',
  'degen',
  'rari',
  'zklinknova',
  'xai',
  'popapex',
  'popboss',
  'sanko',
  'l3x',
  'playblock',
  'winr',
]
