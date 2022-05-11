export const signAndSendTx = async (data) => {
  const tx = data.tx
  console.log(tx, 'txxxx')
  tx.gasLimit = data.gasLimit
  tx.gasPrice = data.gasPrice
  const receipt = await window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [tx]
  })
  console.log(receipt, 'receipt')
  return receipt
}
