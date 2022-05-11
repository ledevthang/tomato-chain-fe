module.exports = class WalletError extends Error {
  constructor (error, message) {
    super(message)
    this.error = error
  }

  static NewUnknowError (message) {
    return new WalletError('unknow_error', message)
  }

  static NewInvalidInputError (message) {
    return new WalletError('invalid_input', message)
  }

  static NewNetworkError (message) {
    return new WalletError('network_error', message)
  }
}
