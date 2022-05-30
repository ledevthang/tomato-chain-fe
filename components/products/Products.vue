<template>
  <div class="company py-16">
    <v-container>
      <div class="title-text">Products</div>
      <div class="title-text-below">
        There are numerous firms providing the same or similar set of products/services and this has given rise to a need - the need to be different. In our commitment to deliver top notch services to our clients.
      </div>
    <div v-if="allProduct" class="card-company">
      <v-card
        v-for="(item, index) in allProduct"
        :key="index"
        :loading="loading"
        class="text-center custom-card"
      >
        <div v-if="item.Provider === currentAddress" class="custom-badges">
          <span class="custom-badges__content">
            My product
          </span>
        </div>

        <img height="110" class="mt-10" src="~/assets/image/tomato.png">

        <v-card-title class="card-title">{{ item.productName }}</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="rate-zone"
          >
            <v-rating
                :value="0"
                background-color="#d6d6d6"
                color="yellow"
                dense
                half-increments
                size="20"
              />

            <div class="grey--text ms-4">
              0 (0)
            </div>
          </v-row>
        </v-card-text>
        <v-card-text class="card-text-content">
          <div class="des-row">
              <span>Provider</span>
              <div>{{ item.companyName }}</div>
            </div>
            <div class="des-row">
              <span>ID</span>
              <div>TMT{{ item.productID }}</div>
            </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            class="custom-btn-green"
            rounded
            dense
            @click="$router.push('/product/' + item.productID)"
          >
            <b>
              See details
            </b>
            <v-icon class="ml-1">
              mdi-arrow-right-bold-circle
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),
  computed: {
    ...mapGetters('walletStore', [
      'currentAddress'
    ]),
    ...mapGetters('companyStore', [
      'allProduct',
      'companyInfo'
    ])
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
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
