import React from 'react'

import Sidebar from './index'
import { ListItemType } from 'src/components/List'
import { Icon } from '@gnosis.pm/safe-react-components'

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
}

const items: ListItemType[] = [
  {
    label: 'Assets',
    icon: <Icon size="md" type="assets" />,
    href: '#',
  },
  {
    label: 'Settings',
    icon: <Icon size="md" type="settings" />,
    href: '#',
    subItems: [
      {
        label: 'Safe Details',
        href: '#',
      },
      {
        label: 'Owners',
        href: '#',
      },
      {
        label: 'Policies',
        href: '#',
      },
      {
        label: 'Advanced',
        href: '#',
      },
    ],
  },
]

export const Base = (): React.ReactElement => (
  <Sidebar
    items={items}
    balance="111"
    safeAddress="0x79ea8C72AC64779d5583D426aA6C29a650F6F06E"
    safeName="someName"
    granted={true}
    onReceiveClick={console.log}
    onNewTransactionClick={console.log}
    onToggleSafeList={() => console.log}
  />
)
