import React from 'react'

import WalletInfo from './index'

export default {
  title: 'Layout/WalletInfo',
  component: WalletInfo,
}

export const SimpleLayout = (): React.ReactElement => (
  <WalletInfo
    address="0x79ea8C72AC64779d5583D426aA6C29a650F6F06E"
    granted={true}
    safeName="My Wallet"
    balance="$111,111"
    onToggleSafeList={() => ({})}
    onReceiveClick={console.log}
    onNewTransactionClick={console.log}
  />
)
