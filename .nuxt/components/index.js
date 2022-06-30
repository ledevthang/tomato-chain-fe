export const CommonChooseWallet = () => import('../../components/common/ChooseWallet.vue' /* webpackChunkName: "components/common-choose-wallet" */).then(c => wrapFunctional(c.default || c))
export const CommonCustomCardAvatar = () => import('../../components/common/CustomCardAvatar.vue' /* webpackChunkName: "components/common-custom-card-avatar" */).then(c => wrapFunctional(c.default || c))
export const CommonCustomCardProduct = () => import('../../components/common/CustomCardProduct.vue' /* webpackChunkName: "components/common-custom-card-product" */).then(c => wrapFunctional(c.default || c))
export const RegisterForm = () => import('../../components/register/RegisterForm.vue' /* webpackChunkName: "components/register-form" */).then(c => wrapFunctional(c.default || c))
export const CompanyCompanies = () => import('../../components/company/Companies.vue' /* webpackChunkName: "components/company-companies" */).then(c => wrapFunctional(c.default || c))
export const Company = () => import('../../components/company/Company.vue' /* webpackChunkName: "components/company" */).then(c => wrapFunctional(c.default || c))
export const HomepageAbout = () => import('../../components/homepage/About.vue' /* webpackChunkName: "components/homepage-about" */).then(c => wrapFunctional(c.default || c))
export const HomepageBanner = () => import('../../components/homepage/Banner.vue' /* webpackChunkName: "components/homepage-banner" */).then(c => wrapFunctional(c.default || c))
export const HomepageHowItWork = () => import('../../components/homepage/HowItWork.vue' /* webpackChunkName: "components/homepage-how-it-work" */).then(c => wrapFunctional(c.default || c))
export const HomepageMatches = () => import('../../components/homepage/Matches.vue' /* webpackChunkName: "components/homepage-matches" */).then(c => wrapFunctional(c.default || c))
export const ProductsCreateProduct = () => import('../../components/products/CreateProduct.vue' /* webpackChunkName: "components/products-create-product" */).then(c => wrapFunctional(c.default || c))
export const Products = () => import('../../components/products/Products.vue' /* webpackChunkName: "components/products" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
