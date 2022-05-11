import Web3 from 'web3'
import _get from 'lodash/get'
// import waitingPropertyExtension from './waitingPropertyExtension'
// const { getWeb3walletConnect } = require('../walletconnect')

export const initWeb3 = async () => {
  let web3 = null
  if (_get(window, 'ethereum._metamask')) {
    const isConnected = await window.ethereum._metamask.isUnlocked()
    // console.log(isConnected)
    if (isConnected) {
      await window.ethereum.enable()
    }
  }
  web3 = new Web3(_get(window, 'web3.currentProvider'))
  // }
  return web3
}
