# ucloud-sdk-node

ucloud nodejs sdk https://docs.ucloud.cn/api/summary/overview

## sample

```javascript
const { RpcClient } = require('./')
const client = new RpcClient({
    PublicKey: 'xxxx',
    PrivateKey: 'xxx',
    BaseUrl:'https://api.ucloud.cn'
  })
const result = await client.request('GetRegion', {})
console.log(result)

```
