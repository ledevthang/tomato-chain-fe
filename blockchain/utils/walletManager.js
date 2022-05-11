/* eslint-disable no-useless-catch */
const Web3 = require('web3')
const BigNumber = require('bignumber.js')
const WalletError = require('./error')
const { supportWallet } = require('./contants')
const erc20Abi = require('./contracts/erc20.abi.json')

// #need_config
const network = process.env.NETWORK
// const network = 'MAINNET'

const supportedWalletsType = Object.values(supportWallet)

let web3 = null
let currentAddress = ''
let keystore = null
let isConnected = false
let currentWalletType = null
let tokens = []

function checkSupportedWalletsType () {
  const result = [supportWallet.walletConnect]
  if (window.ethereum && window.ethereum.isMetaMask) { result.push(supportWallet.metamask) }
  if (window.BinanceChain) { result.push(supportWallet.binanceChain) }
  if (window.ethereum && window.ethereum.isTrust) { result.push(supportWallet.trustWallet) }
  if (window.ethereum && window.ethereum.isSafePal) { result.push(supportWallet.safePal) }
  return result
}
function getCurrentNetwork () {
  return web3.eth.net.getNetworkType()
}

async function connectWallet (walletType, timeout) {
  try {
    if (walletType === supportWallet.metamask || walletType === supportWallet.trustWallet || walletType === supportWallet.safePal) {
      await window.ethereum.enable()
      web3 = new Web3(window.ethereum)
      // currentWalletType = walletType
    } else if (walletType === supportWallet.binanceChain) {
      await window.BinanceChain.enable()
      web3 = new Web3(window.BinanceChain)
      // currentWalletType = supportWallet.binanceChain
    }
    currentWalletType = walletType
    const accounts = await web3.eth.getAccounts()
    currentAddress = accounts[0]
    isConnected = true
  } catch (error) {
    throw new WalletError.NewUnknowError("User rejected permission or don't install wallet extension")
  }

  try {
    await getBalances()
  } catch (error) {
    throw error
  }
}

function isAddress (address) {
  console.log(Web3.utils.isAddress(address))
  return Web3.utils.isAddress(address)
}

async function send (password, to, amount, tokenSymbol, gasPrice, gasLimit, callback) {
  let receipt = null
  try {
    const tokenContract = new web3.eth.Contract(
      erc20Abi,
      tokenSymbol
    )
    const txData = tokenContract.methods.transfer(
      to,
      '0x' + new BigNumber(
        amount
      ).multipliedBy(10 ** 18).toString(16)
    )
    // data đầy đủ
    const tx = {
      from: currentAddress,
      to: tokenSymbol,
      value: 0,
      gas: gasLimit,
      gasPrice: new BigNumber(
        gasPrice
      ).multipliedBy(10 ** 9).toString(),
      data: txData.encodeABI()
    }
    // Check ví hiện tại là ví DFY thì sẽ giải mã keystore và ký giao dịch + gửi
    // Còn nếu là các ví ngoài thì sẽ gửi luôn
    if (currentWalletType === supportWallet.dfyWallet) {
      const account = web3.eth.accounts.decrypt(keystore, password)
      const signed = await account.signTransaction(tx)
      receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction)
    } else {
      receipt = await web3.eth.sendTransaction(tx)
    }
  } catch (error) {
    throw new WalletError.NewUnknowError('can not send transaction now')
  }

  try {
    // sync balance
    getBalances()
  } catch (error) {
    throw error
  } finally {
    // trả về hóa đơn
    // eslint-disable-next-line no-unsafe-finally
    return receipt
  }
}

function logout () {
  keystore = null
  isConnected = false
  currentWalletType = null
  tokens = []
}

async function getBalances () {
  try {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-ropsten.alchemyapi.io/v2/YIm2xGP2lu-Y5BgBp3YSOuTknQQHPD-_'))
    const userBalance = await web3.eth.getBalance(currentAddress)
    console.log(currentAddress, userBalance / 10 ** 18, 'userBalanceuserBalance')
    return userBalance
  } catch (error) {
    throw new WalletError.NewUnknowError('can not get balances now')
  }
}

module.exports = {
  getBalances,
  currentAddress () {
    return currentAddress
  },
  currentWalletType () {
    return currentWalletType
  },
  supportedWalletsType () {
    return supportedWalletsType
  },
  tokens () {
    return tokens
  },
  isConnected () {
    return isConnected
  },
  web3 () {
    return web3
  },
  getCurrentNetwork,
  checkSupportedWalletsType,
  connectWallet,
  send,
  isAddress,
  logout

}
