export const networkIds = {
  MO: 7924
}

const networks = {
  [networkIds.MO]: {
    chainId: '0x1EF4',
    chainName: 'MO Network',
    nativeCurrency: {
      name: 'MO',
      symbol: 'MO',
      decimals: 18
    },
    rpc: 'https://mainnet-rpc.mochain.app',
    explorer: 'https://mainnet.mochain.app'
  }
}

export const getNetwork = (networkId) => networks[networkId]
