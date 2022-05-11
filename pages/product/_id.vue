<template>
  <v-container>
    <div>
      <h2 style="background: #c8e4cc;border-radius: 6px" class="text-center py-6 mb-5">
        <b style="font-family: 'Montserrat-Bold';font-size: 30px;color: #4f5f6e;">
          PRODUCT DETAILS
        </b>
      </h2>
    </div>
    <div>
      <div v-if="product && product.productID !== '0'" class="product-detail d-flex flex-wrap justify-space-between page my-12">
        <v-card
          :loading="loading"
          style="width: 50%"
          class="text-center"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            />
          </template>

          <img height="130" class="mt-3" src="~/assets/image/not-found-image.svg">

          <v-card-title>{{ product.productName }}</v-card-title>

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
              $ • Italian, Vegetable
            </div>
          </v-card-text>

          <v-divider class="mx-4"/>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>ID: TMT{{ product.productID }}</v-chip>
              <v-chip>Product Price: ${{ product.productPrice }}</v-chip>
              <v-chip>Description: {{ product.productDescription }}</v-chip>
              <v-chip>Date Of Manufacture: {{ product.dateOfManufacture }}</v-chip>

              <v-chip>Expiration Date: {{ product.expirationDate }}</v-chip>

              <v-chip>Quantity: {{ product.quantity }}</v-chip>
              <v-chip @click.stop="goToLink(product.Provider)">
                TxHash: {{ $shortAddress(product.txHash, 15) }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click.stop="goToLink(product.Provider)"
            >
              Provider: {{ $shortAddress(product.Provider, 10) }}
            </v-btn>
          </v-card-actions>
        </v-card>
        <div style="width: 50%">
          <div style="color: red;margin-bottom: 20px;font-weight: bold">Go to Product Retrieval to scan product</div>
          <qr-code id='qrid' :text="url" />
          <v-btn
            class="mt-5"
            rounded
            color="#c8e4cc"
            @click="download"
          >
            <b>Download QRcode</b>
          </v-btn>
          <a id="download" href="" download />
        </div>
      </div>
      <div v-else>
        Not found product
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
// import * as CompanyContract from '~/blockchain/utils/CompanyContract'
export default {
  async asyncData ({ params }) {
    const id = +params.id
    const data = await axios.get('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/product.json')
    const dataConverted = []
    for (const key in data.data) {
      dataConverted.push({ ...data.data[key] })
    }
    const product = dataConverted.filter(product => product.productID === id)[0]
    return { product, id }
  },
  data: () => ({
    loading: false,
    selection: 1,
    url: ''
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
  mounted () {
    this.url = window.location.href
  },
  methods: {
    goToLink (companyAddress) {
      const x = this.$getScanLink(companyAddress, 'address')
      window.open(x, '_blank')
    },
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    download () {
      const x = document.getElementById('qrid').getElementsByTagName('img')[0].src
      const aTag = document.getElementById('download')
      aTag.href = x
      aTag.click()
    }
  }
}
</script>
<style lang="sass">
@media screen and (max-width: 960px)
  .product-detail
    flex-direction: column
    & > *
      width: 100%!important
      text-align: center
  #qrid > img
    margin: auto
</style>
