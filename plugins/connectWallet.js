/* eslint-disable space-before-blocks */

import walletManager from '~/blockchain/utils/walletManager'
import * as CompanyContract from '~/blockchain/utils/CompanyContract'
import TransactionServices from '~/blockchain/utils/TransactionServices'
import { initWeb3 } from '~/blockchain/utils/support/initWeb3'

const supportUpdateStore = async (context, transactions) => {
  const isCompany = await CompanyContract.isCompany(walletManager.currentAddress())
  const address = walletManager.currentAddress()
  const balances = await walletManager.getBalances()
  console.log(balances, 'balancesbalances')
  const params = {
    isCompany: isCompany.tx.data,
    address
  }
  context.store.dispatch('walletStore/changeCurrentAddress', walletManager.currentAddress())
  context.store.dispatch('companyStore/changeCurrentCompany', params)
  context.store.dispatch('walletStore/changeSupportTokenAndBalance', balances)
}
const checkNetWork = async () => {
  // const network = await walletManager.getCurrentNetwork()
  // if (network !== 'ropsten') {
  //   alert('Please change to ropsten network')
  // }
}

export default (context, inject) => {
  const connectWallet = async (walletName, connectExist = true) => {
    try {
    // connextExist before run code below, if no connectExist run connectWallet first time
      if (connectExist) {
        if (walletName !== 'walletConnect') {
          try {
            await context.store.dispatch('walletStore/changeLoadingWallet', true)
            setTimeout(async () => {
              await context.store.dispatch('walletStore/changeLoadingWallet', false)
            }, 5000)
            const web3 = await initWeb3()
            const checked = await web3.eth.getAccounts()
            // checkNetWork();
            window.ethereum.on('accountsChanged', async function (accounts) {
              await walletManager.connectWallet(walletName, 0)
              const transactions = await TransactionServices.getTransactions(walletManager.currentAddress())

              supportUpdateStore(context, transactions)
            })
            window.ethereum.on('networkChanged', function (){
              checkNetWork()
            })

            if (!checked.length) {
              throw new Error(`no connect ${walletName}`)
            }
            await walletManager.connectWallet(walletName, 0)
            const transactions = await TransactionServices.getTransactions(walletManager.currentAddress())
            checkNetWork()
            supportUpdateStore(context, transactions)
          } catch (error) {
            console.log(error)
          } finally {
            await context.store.dispatch('walletStore/changeLoadingWallet', false)
          }
        }
      } else {
        try {
          await context.store.dispatch('walletStore/changeLoadingWallet', true)
          setTimeout(async () => {
            await context.store.dispatch('walletStore/changeLoadingWallet', false)
          }, 5000)
          await walletManager.connectWallet(walletName, 0)
          const transactions = await TransactionServices.getTransactions(walletManager.currentAddress())
          checkNetWork()
          supportUpdateStore(context, transactions)
        } catch (error) {
          console.log(error)
        } finally {
          await context.store.dispatch('walletStore/changeLoadingWallet', false)
        }
      }
    } catch (error) {
    }
  }

  // Inject $connectWallet(item) in Vue, context, and store
  inject('connectWallet', connectWallet)
  context.$connectWallet = connectWallet
}
