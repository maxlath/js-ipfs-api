'use strict'

const httpRequest = require('follow-redirects').http.request
const httpsRequest = require('follow-redirects').https.request

module.exports = (protocol) => {
  if (protocol.indexOf('https') === 0) {
    return httpsRequest
  }

  return httpRequest
}
