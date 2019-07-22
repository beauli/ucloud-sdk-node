const signHelper = require('./signHelper')
const fetch = require('node-fetch')

class RpcClient {
  /**
   * 
   * @param {Object} config 
   * @param {String} config.PublicKey
   * @param {String} config.PrivateKey
   * @param {String} config.ProjectId
   * @param {String} config.BaseUrl
   */
  constructor(config) {
    this.config = config
  }

  /**
   * request
   * @param {String} action 
   * @param {Object} data 
   */
  async request (action, data) {
    data.Action = action
    if (!data.ProjectId && this.config.ProjectId) {
      data.ProjectId = this.config.ProjectId
    }
    const signature = signHelper.sign(this.config.PublicKey, this.config.PrivateKey, data)
    const postData = Object.assign({ Signature: signature }, data)
    const resp = await fetch(this.config.BaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    return resp.json()
  }
}

module.exports = { RpcClient }