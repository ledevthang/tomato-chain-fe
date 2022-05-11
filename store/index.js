export const state = () => ({
})

export const actions = {
  async nuxtClientInit ({ commit, dispatch, state }) {
    const extensionName = localStorage.getItem('extensionName')
    try {
      await this.$connectWallet(extensionName)
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
}
