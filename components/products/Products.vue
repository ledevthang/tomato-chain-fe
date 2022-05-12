<template>
  <div class="company">
    <div class="title">Products</div>
    <div v-if="allProduct" class="card-company">
      <!-- <div v-for="(item, index) in allProduct" :key="index">
        {{ item.productName }}
      </div> -->
      <v-card
        v-for="(item, index) in allProduct"
        :key="index"
        :loading="loading"
        class="mr-3 my-12 text-center custom-card"
        max-width="274"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          />
        </template>

        <img height="130" class="mt-3" src="~/assets/image/tomato.png">

        <v-card-title>{{ item.productName }}</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value="0"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            />

            <div class="grey--text ms-4">
              0 (0)
            </div>
          </v-row>

          <!-- <div class="mt-4 text-left text-subtitle-1">
            $ • Italian, Vegetable
          </div> -->
        </v-card-text>

        <v-divider class="mx-4"/>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="#DEF9EC accent-4 black--text"
            column
          >
            <!-- <v-chip>Product Price: ${{ item.productPrice }}</v-chip>

            <v-chip>Date Of Manufacture: {{ item.dateOfManufacture }}</v-chip>

            <v-chip>Expiration Date: {{ item.expirationDate }}</v-chip>-->

            <v-chip>Provider: {{ item.companyName }}</v-chip>
            <v-chip>ID: TMT{{ item.productID }}</v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-actions>
          <!-- @click.stop="goToLink(item.Provider)" -->
          <v-spacer />
          <v-btn
            class="custom-btn-green"
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
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
// import * as CompanyContract from '~/blockchain/utils/CompanyContract'
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
