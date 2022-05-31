export { default as CommonChooseWallet } from '../../components/common/ChooseWallet.vue'
export { default as CommonCustomCardAvatar } from '../../components/common/CustomCardAvatar.vue'
export { default as CommonCustomCardProduct } from '../../components/common/CustomCardProduct.vue'
export { default as RegisterForm } from '../../components/register/RegisterForm.vue'
export { default as HomepageAbout } from '../../components/homepage/About.vue'
export { default as HomepageBanner } from '../../components/homepage/Banner.vue'
export { default as HomepageHowItWork } from '../../components/homepage/HowItWork.vue'
export { default as HomepageMatches } from '../../components/homepage/Matches.vue'
export { default as CompanyCompanies } from '../../components/company/Companies.vue'
export { default as Company } from '../../components/company/Company.vue'
export { default as ProductsCreateProduct } from '../../components/products/CreateProduct.vue'
export { default as Products } from '../../components/products/Products.vue'

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
