const { RpcClient } = require('./../lib/rpcClient')

describe('rpc client test', () => {
  const client = new RpcClient({
    PublicKey: process.env.UCLOUD_PUBLICKEY,
    PrivateKey: process.eng.UCLOUD_PRIVATEKEY,
    BaseUrl:'https://api.ucloud.cn'
  })
  it('# get region', async () => {
    const result = await client.request('GetRegion', {})
    console.log(result)
  })
})