import MeterLogo from 'src/config/assets/token-meter.png'
import { EnvironmentSettings, METER_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  txServiceUrl: 'https://meter-multisig.open4g.com/api/v1',
  safeAppsUrl: 'http://localhost:3000',
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: 'https://rpc.meter.io',
  networkExplorerName: 'Meter Explorer',
  networkExplorerUrl: 'https://scan.meter.io/#',
  networkExplorerApiUrl: 'https://api.etherscan.io/api',
}

const mainnet: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: 'http://localhost:3000',
    },
    production: {
      ...baseConfig,
      txServiceUrl: 'https://meter-multisig.open4g.com/api/v1',
      safeAppsUrl: 'http://localhost:3000',
    },
  },
  network: {
    id: METER_NETWORK.MAINNET,
    backgroundColor: '#E8E7E6',
    textColor: '#001428',
    label: 'Mainnet',
    isTestNet: false,
    nativeCoin: {
      address: '0x000',
      name: 'Meter',
      symbol: 'MTR',
      decimals: 18,
      logoUri: MeterLogo,
    },
  },
}

export default mainnet
