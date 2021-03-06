import { getDataFromNodeErrorMessage } from 'src/logic/safe/transactions/gas'

describe('getOpenEthereumErrorDataResult', () => {
  it(`should return data hash from given OpenEthereum response`, () => {
    // given
    const resultExpected =
      '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457'
    const openEthResponse =
      'Internal JSON-RPC error.\n' +
      '{\n' +
      '  "code": -32015,\n' +
      '  "message": "VM execution error.",\n' +
      '  "data": "Reverted 0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457"\n' +
      '}'

    // when
    const result = getDataFromNodeErrorMessage(openEthResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return undefined from empty OpenEthereum/Trezor response`, () => {
    // given
    const resultExpected = undefined
    const openEthResponse = ''

    // when
    const result = getDataFromNodeErrorMessage(openEthResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return undefined from wrong OpenEthereum response`, () => {
    // given
    const resultExpected = undefined
    const openEthResponse =
      'Internal JSON-RPC error.\n' +
      '{\n' +
      '  "code": -32015,\n' +
      '  "message": "VM execution error.",\n' +
      '  "data": "Reverted-test0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457"\n' +
      '}'

    // when
    const result = getDataFromNodeErrorMessage(openEthResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return data hash from given Nethermind response`, () => {
    // given
    const resultExpected =
      '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457'
    const openEthResponse =
      'Internal JSON-RPC error.\n' +
      '{\n' +
      '  "code": -32015,\n' +
      '  "message": "VM execution error.",\n' +
      '  "data": "revert 0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457"\n' +
      '}'

    // when
    const result = getDataFromNodeErrorMessage(openEthResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return data hash from given OpenEthereum response`, () => {
    // given
    const resultExpected =
      '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457'
    const openEthResponse =
      'Internal JSON-RPC error.\n' +
      '{\n' +
      '  "code": -32015,\n' +
      '  "message": "VM execution error.",\n' +
      '  "data": "Reverted 0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457"\n' +
      '}'

    // when
    const result = getDataFromNodeErrorMessage(openEthResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return undefined from empty OpenEthereum response`, () => {
    // given
    const resultExpected = undefined
    const openEthResponse = ''

    // when
    const result = getDataFromNodeErrorMessage(openEthResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return undefined from wrong OpenEthereum response`, () => {
    // given
    const resultExpected = undefined
    const openEthResponse =
      'Internal JSON-RPC error.\n' +
      '{\n' +
      '  "code": -32015,\n' +
      '  "message": "VM execution error.",\n' +
      '  "data": "Reverted-test0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457"\n' +
      '}'

    // when
    const result = getDataFromNodeErrorMessage(openEthResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return data hash from given Nethermind response`, () => {
    // given
    const resultExpected =
      '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457'
    const openEthResponse =
      'Internal JSON-RPC error.\n' +
      '{\n' +
      '  "code": -32015,\n' +
      '  "message": "VM execution error.",\n' +
      '  "data": "revert 0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457"\n' +
      '}'

    // when
    const result = getDataFromNodeErrorMessage(openEthResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return data hash from given GETH response`, () => {
    // given
    const resultExpected =
      '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457'

    const gethResponse =
      'execution reverted:                               f???\n' +
      '{\n' +
      '  "originalError": {\n' +
      '  "code": 3,\n' +
      '  "message": "execution reverted:",\n' +
      '  "data": "0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457"\n' +
      '  }\n' +
      '}'

    // when
    const result = getDataFromNodeErrorMessage(gethResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return data hash from given GETH response even if the response contains invalid characters`, () => {
    // given
    const resultExpected =
      '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457'

    const gethResponse =
      'execution reverted:                               f???\n' +
      '???' +
      '{\n' +
      '  "originalError": {\n' +
      '  "code": 3,\n' +
      '  "message": "execution reverted:",\n' +
      '  "data": "0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000006457"\n' +
      '  }\n' +
      '}'

    // when
    const result = getDataFromNodeErrorMessage(gethResponse)

    // then
    expect(result).toBe(resultExpected)
  })
  it(`should return data hash from given response from trezor wallet`, () => {
    // given
    const resultExpected =
      '0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000040d8'

    const trezorResponse =
      'Error: execution reverted: \n' +
      '0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000040d8'

    // when
    const result = getDataFromNodeErrorMessage(trezorResponse)

    // then
    expect(result).toBe(resultExpected)
  })
})
