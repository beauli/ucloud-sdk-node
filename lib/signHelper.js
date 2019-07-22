const debug = require('debug')('ucloud-sdk-node:sign');
const crypto = require('crypto');
const util = require('util')


function sign (publicKey, privateKey, params) {
  params.PublicKey = publicKey
  const keys = [];
  for (var key in params) {
    keys.push(key);
  }
  keys.sort();

  let str = ''
  keys.forEach(key => {
    let value = params[key];
    if (Object.prototype.toString.call(value) !== '[object String]') {
      value = JSON.stringify(value);
    }

    str += util.format('%s%s', key, value);
  });
  str += privateKey
  debug('sign str:', str)
  let hashed = hmac(str).toLowerCase();
  debug('sign hash', hashed);

  return hashed
}


function hmac (content) {
  return crypto.createHash('sha1').update(content).digest('hex')
}

module.exports = { sign }