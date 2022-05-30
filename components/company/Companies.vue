<template>
  <div class="company py-16 bg-primary">
    <v-container>
      <div class="title-text">Companies</div>
      <div class="title-text-below">There are numerous firms providing the same or similar set of products/services and this has given rise to a need - the need to be different. In our commitment to deliver top notch services to our clients, we measure every delivery step down to the minutest details. We take pride in sharing with you, a few of our differentiators.</div>
      <div v-if="allCompany" class="company-zone card-company">
        <custom-card-avatar
          v-for="(item, index) in allCompany"
          :key="index"
          :item="item"
          :current-address="currentAddress"
          :total-product="totalProduct(item.companyName)"
          class="custom-card"
        />
      </div>
    </v-container>
      </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CustomCardAvatar from '~/components/common/CustomCardAvatar.vue'
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),
  components: {
    CustomCardAvatar
  },
  computed: {
    ...mapGetters('walletStore', [
      'currentAddress'
    ]),
    ...mapGetters('companyStore', [
      'allCompany',
      'companyInfo',
      'allProduct'
    ])
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    totalProduct (companyName) {
      if (this.allProduct) {
        return this.allProduct.filter((item) => item.companyName === companyName).length
      }
    },
    goToLink (companyAddress) {
      const x = this.$getScanLink(companyAddress, 'address')
      window.open(x, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
