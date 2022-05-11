export const state = () => ({
  currentCompany: null,
  companyInfo: null,
  companyProducts: null,
  triggerUpdate: 0,
  allCompany: null,
  allProduct: null
})
export const getters = {
  currentCompany (state) {
    return state.currentCompany
  },
  companyInfo (state) {
    return state.companyInfo
  },
  companyProducts (state) {
    return state.companyProducts
  },
  triggerUpdate (state) {
    return state.triggerUpdate
  },
  allCompany (state) {
    return state.allCompany
  },
  allProduct (state) {
    return state.allProduct
  }
}
export const actions = {
  changeCurrentCompany ({ commit }, payload) {
    if (payload && payload.isCompany) {
      commit('CHANGE_CURRENT_COMPANY', payload.address)
    } else {
      commit('CHANGE_CURRENT_COMPANY', null)
    }
  },
  changeCompanyInfo ({ commit }, payload) {
    if (payload) {
      const { companyAddress, companyEmail, companyName, companyPhoneNumber } = payload
      commit('CHANGE_COMPANY_INFO', { companyAddress, companyEmail, companyName, companyPhoneNumber })
    }
  },
  changeCompanyProduct ({ commit }, payload) {
    commit('CHANGE_COMPANY_PRODUCT', payload)
  },
  changeTriggerUpdate ({ commit }) {
    commit('CHANGE_TRIGGER_UPDATE')
  },
  changeAllCompany ({ commit }, payload) {
    commit('CHANGE_ALL_COMPANY', payload)
  },
  changeAllProduct ({ commit }, payload) {
    commit('CHANGE_ALL_PRODUCT', payload)
  }
}
export const mutations = {
  CHANGE_CURRENT_COMPANY (state, company) {
    state.currentCompany = company
  },
  CHANGE_COMPANY_INFO (state, company) {
    state.companyInfo = company
  },
  CHANGE_COMPANY_PRODUCT (state, product) {
    state.companyProducts = product
  },
  CHANGE_TRIGGER_UPDATE (state) {
    state.triggerUpdate++
  },
  CHANGE_ALL_COMPANY (state, company) {
    state.allCompany = company
  },
  CHANGE_ALL_PRODUCT (state, product) {
    state.allProduct = product
  }
}
