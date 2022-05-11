export default (context, inject) => {
  const getScanLink = (link, type) => {
    const network = process.env.NETWORK
    if (type === 'address') {
      return network === 'TESTNET'
        ? `https://ropsten.etherscan.io/address/${link}`
        : `https://ropsten.etherscan.io/tx/${link}`
    }
    // else {
    //   return network === 'TESTNET'
    //     ? `https://testnet.bscscan.com/tx/${link}`
    //     : `https://bscscan.com/tx/${link}`
    // }
  }

  // Inject $convertTime(item) in Vue, context, and store
  inject('getScanLink', getScanLink)
  context.$getScanLink = getScanLink
}
