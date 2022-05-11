<template>
  <div class="company">
    <div class="title">Companies</div>
    <div v-if="allCompany" class="d-flex flex-wrap justify-between">
      <!-- <div v-for="(item, index) in allCompany" :key="index">
        {{ item.productName }}
      </div> -->
      <v-card
        v-for="(item, index) in allCompany"
        :key="index"
        :loading="loading"
        class="mr-3 my-12 text-center"
        max-width="374"
        @click="goToLink(item.companyAddress)"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          />
        </template>

        <img height="130" class="mt-3" src="~/assets/image/nodata.png">

        <v-card-title>{{ item.companyName }}</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            />

            <div class="grey--text ms-4">
              4.5 (413)
            </div>
          </v-row>

          <div class="mt-4 text-left text-subtitle-1">
            Food Company
          </div>
        </v-card-text>

        <v-divider class="mx-4"/>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>Total Product: 161</v-chip>
            <v-chip>Company Phone Number: {{ item.companyPhoneNumber }}</v-chip>

            <v-chip>Company Email: {{ item.companyEmail }}</v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="deep-purple lighten-2"
            text
          >
            Contact
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
      'allCompany',
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
