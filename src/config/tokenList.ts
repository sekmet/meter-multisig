import {BalanceEndpoint} from '../logic/currencyValues/api/fetchTokenCurrenciesBalances'

const host = window.location.origin
const tokensDefaultList = [
    {
        address: '0xb158870beB809Ad955Bf56065C5C10D7Fd957cC0',
        uri: host + '/resources/movr.png',
    },
    {
        address: '0x8A419EF4941355476CF04933E90BF3BBF2F73814',
        uri: host + '/resources/mtrg.png',
    },
    {
        address: '0xe7536A823165D83E43EA95079cc1bb70E6a874b5',
        uri: host + '/resources/eth.png',
    },
    {
        address: '0x55E22D0dDD17FDd3F5bB2A87E8bea1f81FAcBe63',
        uri: host + '/resources/usdc.png',
    },
    {
        address: '0x3e5a2A4812D319Ded22479A88ed708c6B55ca0b1',
        uri: host + '/resources/usdt.png',
    },
    {
        address: '0xF8BBb44E6fD13632D36fe09eB61820f9A44f5D74',
        uri: host + '/resources/bnb.png',
    },
    {
        address: '0x24aA189DfAa76c671c279262F94434770F557c35',
        uri: host + '/resources/busd.png',
    },
]


export const getDefaultTokenUri = (address: string) => {
    const t = tokensDefaultList.find(t => t.address === address)

    if (t) {
        return t.uri
    }

    return null
}