export default (context, inject) => {
  const getScanLink = (link, type) => {
    console.log(link, type)
    if (type === 'address') {
      return `https://ropsten.etherscan.io/address/${link}`
    } else {
      return `https://ropsten.etherscan.io/tx/${link}`
    }
  }

  // Inject $convertTime(item) in Vue, context, and store
  inject('getScanLink', getScanLink)
  context.$getScanLink = getScanLink
}
