import MeterLogo from 'src/config/assets/token-meter.png'
import { EnvironmentSettings, METER_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  txServiceUrl: 'https://meter-multisig.open4g.com/api/v1',
  safeAppsUrl: 'http://localhost:3000',
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: 'https://rpctest.meter.io',
  networkExplorerName: 'Meter Explorer',
  networkExplorerUrl: 'https://scan-warringstakes.meter.io/#',
  networkExplorerApiUrl: 'https://api-rinkeby.etherscan.io/api',
}

const testnet: NetworkConfig = {
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
    id: METER_NETWORK.TESTNET,
    backgroundColor: '#E8673C',
    textColor: '#ffffff',
    label: 'Testnet',
    isTestNet: true,
    nativeCoin: {
      address: '0x000',
      name: 'Meter',
      symbol: 'MTR',
      decimals: 18,
      logoUri: MeterLogo,
    },
  },
}

export default testnet
