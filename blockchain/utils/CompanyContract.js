// import * as gasInfo from './support/getGasInformation'
// import stakeAbi from './contracts/stake.abi.json'
// import erc20Abi from './contracts/erc20.abi.json'
import { initWeb3 } from './support/initWeb3'
// const gasInfo = null

const BigNumber = require('bignumber.js')
// #need_config

const network = process.env.NETWORK
// const network = 'MAINNET'
// const supportSymbol = JSON.parse(localStorage.getItem('supportSymbol'))

const contractABI = network === 'TESTNET' ? require('./contracts/tomatoChain.abi.json') : require('./contracts/tomatoChain.abi.json')
// const contractABI = require('./contracts/tomatoChain.abi.json')

// hard_code
const contractAddress = network === 'TESTNET' ? process.env.TOMATO_CONTRACT_TEST : process.env.TOMATO_CONTRACT
// const contractAddress = "0x931Fa75c4FB9993cE7ac09A5d395dcE8Df533F61"

export const registerCompany = async (
  params
) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const calculateBalanceSend = (balance) => {
    return BigNumber(balance)
      .multipliedBy(10 ** 18)
      .integerValue()
  }
  const _amount = calculateBalanceSend(params.amount)
  let msg = null
  let txHash = null
  // console.log(web3.eth.abi.encodeParameter('bytes32', params.companyName), '122121')
  console.log(web3.utils.asciiToHex(params.companyName), '122121')
  const txData = await contract.methods.setCompany(
    params.companyAddress,
    web3.utils.asciiToHex(params.companyName)
  ).send({ from: params.currentAddress, value: _amount })
    .then((receipt) => {
      console.log(receipt, 'receipt');
      msg = 'Success!'
      txHash = receipt.transactionHash
    })
    .catch((err) => {
      msg = err.message
    })
  const tx = {
    from: params.currentAddress,
    to: contractAddress,
    value: _amount,
    data: txData,
    txHash,
    msg
  }

  return {
    tx
  }
}

export const createProduct = async (
  params
) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const calculateBalanceSend = (balance) => {
    return BigNumber(balance)
      .multipliedBy(10 ** 18)
      .integerValue()
  }
  const _amount = calculateBalanceSend(params.amount)
  let msg = null
  let txHash = null
  console.log(web3.utils.asciiToHex(params.productName), '1')
  console.log(web3.utils.asciiToHex(params.retailer), '2')
  const txData = await contract.methods.createProduct(
    params.productID,
    web3.utils.asciiToHex(params.productName),
    params.Provider,
    params.isConfirmByRetailer,
    web3.utils.asciiToHex(params.retailer),
    // params.retailer
    // params.dateOfManufacture,
    // params.expirationDate,
    // params.quantity
  ).send({ from: params.currentAddress, value: _amount })
    .then((receipt) => {
      msg = 'Success!'
      txHash = receipt.transactionHash
    })
    .catch((err) => {
      msg = err.message
    })

  const tx = {
    from: params.currentAddress,
    to: contractAddress,
    value: _amount,
    data: txData,
    txHash,
    msg
  }

  return {
    tx
  }
}

export const isCompany = async (address) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const accounts = await web3.eth.getAccounts()
  const txData = await contract.methods.isCompany(address).call()

  const tx = {
    from: accounts[0],
    data: txData
  }

  return {
    tx
  }
}

export const getCompanyInfo = async (address) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const accounts = await web3.eth.getAccounts()
  const txData = await contract.methods.getCompanyInfo(address).call()

  const tx = {
    from: accounts[0],
    data: txData
  }

  return {
    tx
  }
}

export const getAdminRole = async () => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const accounts = await web3.eth.getAccounts()
  const txData = await contract.methods.DEFAULT_ADMIN_ROLE().call()

  const tx = {
    from: accounts[0],
    data: txData
  }

  return {
    tx
  }
}

export const totalProvider = async (
  Provider
) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  console.log(Provider, 'contractAddress')
  // contract.options.address = '0x195E34106DA1FCd4c900047B71b9812c7F027D04'
  const accounts = await web3.eth.getAccounts()
  const txData = await contract.methods.getTotalProvider(
    Provider
  ).call()

  // contract.methods.getTotalProvider('1212').send({from: accounts[0]})
  // .on('receipt', function(){
  //   console.log('heyyy')
  // })

  const tx = {
    from: accounts[0],
    data: txData
  }

  return {
    tx
  }
}

export const totalProductProvider = async (
  Provider, index
) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  // contract.options.address = '0x195E34106DA1FCd4c900047B71b9812c7F027D04'
  // const accounts = await web3.eth.getAccounts()
  const txData = await contract.methods.totalProductProvider(
    Provider, index
  ).call()

  const tx = {
    // from: accounts[0],
    data: txData
  }

  return {
    tx
  }
}

export const totalCompany = async (
  index
) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const txData = await contract.methods.totalCompany(
    index
  ).call()

  const tx = {
    // from: accounts[0],
    data: txData
  }

  return {
    tx
  }
}

export const totalProduct = async (
  index
) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const txData = await contract.methods.totalProduct(
    index
  ).call()

  const tx = {
    // from: accounts[0],
    data: txData
  }

  return {
    tx
  }
}

export const numberOfCompany = async () => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const txData = await contract.methods.numberOfCompany().call()

  const tx = {
    // from: accounts[0],
    data: txData
  }

  return {
    tx
  }
}
export const numberOfProduct = async () => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const txData = await contract.methods.numberOfProduct().call()

  const tx = {
    data: txData
  }

  return {
    tx
  }
}

export const productByProductId = async (productID) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const txData = await contract.methods.productByProductId(productID).call()

  const tx = {
    data: txData
  }

  return {
    tx
  }
}

export const updateProductHash = async (productID, hash) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  console.log(productID, hash, 'productID, hashproductID, hash')
  const txData = await contract.methods.updateProductHash(productID, hash).call()

  const tx = {
    data: txData
  }

  return {
    tx
  }
}

export const writeProductDairy = async (productID, text) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  let msg = null
  let txHash = null
  console.log(productID, text, 'productID, textproductID, text')
  const accounts = await web3.eth.getAccounts()
  const txData = await contract.methods.writeProductDairy(productID, web3.utils.asciiToHex(text))
  .send({ from: accounts[0] })
  .then((receipt) => {
    msg = 'Success!'
    txHash = receipt.transactionHash
  })
  .catch((err) => {
    msg = err.message
  })

  const tx = {
    to: contractAddress,
    data: txData,
    txHash,
    msg
  }

  return {
    tx
  }
}
export const getProductDairy = async (productID, index) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const txData = await contract.methods.productDairy(productID, index).call()

  const tx = {
    data: txData
  }

  return {
    tx
  }
}

export const getProductDairyByProductID = async (productID) => {
  const web3 = await initWeb3()
  const contract = await new web3.eth.Contract(
    contractABI,
    contractAddress
  )
  const txData = await contract.methods.getProductDairyByProductID(productID).call()

  const tx = {
    data: txData
  }

  return {
    tx
  }
}