const signHelper = require('./../lib/signHelper')

describe('sign helper test', () => {
  it('# sign', () => {
    const data = {
      "Action": "CreateUHostInstance",
      "Region": "cn-bj2",
      "Zone": "cn-bj2-04",
      "ImageId": "f43736e1-65a5-4bea-ad2e-8a46e18883c2",
      "CPU": 2,
      "Memory": 2048,
      "DiskSpace": 10,
      "LoginMode": "Password",
      "Password": "VUNsb3VkLmNu",
      "Name": "Host01",
      "ChargeType": "Month",
      "Quantity": 1,
      "PublicKey": "ucloudsomeone@example.com1296235120854146120"
    }
    const publicKey = 'ucloudsomeone@example.com1296235120854146120'
    const privateKey = '46f09bb9fab4f12dfc160dae12273d5332b5debe'
    const signature = signHelper.sign(publicKey, privateKey, data)
    expect(signature).toBe('4f9ef5df2abab2c6fccd1e9515cb7e2df8c6bb65')
  })
})