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

          <img height="130" class="mt-3" src="~/assets/image/tomato.png">

          <v-card-title>{{ product.productName }}</v-card-title>

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

            <div class="mt-4 text-left text-subtitle-1">
              $ • Italian, Vegetable
            </div>
          </v-card-text>

          <v-divider class="mx-4"/>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="#DEF9EC accent-4 black--text"
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
              color="rgba(40, 167, 69, 0.8)"
              text
              @click.stop="goToLink(product.Provider)"
            >
              <b>Company: {{ product.companyName }}</b>
            </v-btn>
          </v-card-actions>
        </v-card>
        <div style="width: 30%;background: #FFFCEB;border-radius: 15px;padding: 10px;position: relative">
          <div v-for="(item, index) in dairyArray" :key="index">
            <div>
              <b>{{ $convertTime(item.timestamp, 'DD/MM/YYYY') }}</b>
            </div>
            <div class="px-3">
              <i>{{ item.message }}</i>
            </div>
          </div>
          <v-form
            v-if="product.Provider === currentAddress"
            ref="form"
            v-model="valid"
            style="position: absolute;bottom: 10px;left: 50%;transform: translate(-50%, 0);width: 100%"
            lazy-validation
          >
            <v-text-field
              v-model="text"
              :rules="productRule"
              style="width: 100%"
              label="Diary content"
              required
              outlined
            />
            <div class="btn-zone" style="display: flex;align-items: center;justify-content: center;">
            <v-btn
              :disabled="!valid"
              class="mt-5"
              rounded
              color="#c8e4cc"
              @click="writeProductDairy"
            >
              <b>Write Product's Diary</b>
            </v-btn>
        </div>
          </v-form>
          <div v-if="!currentAddress">
            <center><i>Connect your wallet to see dairy of this product</i></center>
          </div>
        </div>
        <div style="width: 20%">
          <div style="color: red;margin-bottom: 20px;font-weight: bold">Scan QR to get information of this product</div>
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
    <v-dialog
        v-model="showSuccessDialog"
        width="300px"
      >
        <v-card light style="padding: 10px;text-align: center">
          <v-card-actions style="flex-direction: column">
            <div style="width: 100%" class="text-zone">
              <b style="font-size: 20px">{{ msg }}</b>
              <div v-if="hash">
                <a :href="$getScanLink(hash, 'tx')">
                  {{ hash }}
                </a>
              </div>
            </div>
            <v-spacer />
            <div style="margin: 20px 0" class="action-zone">
              <v-btn
                color="#28a745"
                medium
                depressed
                dark
                @click="showSuccessDialog = false"
              >
                Good!
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import * as CompanyContract from '~/blockchain/utils/CompanyContract'
export default {
  async asyncData ({ params, store }) {
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
    url: '',
    showSuccessDialog: false,
    text: '',
    hash: null,
    msg: null,
    valid: true,
    productRule: [
      v => !!v || 'This field cannot be left blank',
      v => (v && v.length <= 42) || 'Too long'
    ],
    dairyArray: []
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
  watch: {
    async currentAddress (newVal) {
      if (newVal) {
        const dairyLength = await CompanyContract.getProductDairyByProductID(this.id)
        this.dairyArray = []
        for (let i = 0; i < dairyLength.tx.data; i++) {
          let data = await CompanyContract.getProductDairy(this.id, i)
          this.dairyArray.push(data.tx.data)
        }
      }
    }
  },
  async created () {
    if (this.currentAddress) {
      const dairyLength = await CompanyContract.getProductDairyByProductID(this.id)
      this.dairyArray = []
      for (let i = 0; i < dairyLength.tx.data; i++) {
        let data = await CompanyContract.getProductDairy(this.id, i)
        this.dairyArray.push(data.tx.data)
      }
    }
  },
  mounted () {
    this.url = window.location.href
  },
  methods: {
    async updateDairy () {
      const dairyLength = await CompanyContract.getProductDairyByProductID(this.id)
      this.dairyArray = []
      for (let i = 0; i < dairyLength.tx.data; i++) {
        let data = await CompanyContract.getProductDairy(this.id, i)
        this.dairyArray.push(data.tx.data)
      }
    },
    async writeProductDairy () {
      if (this.$refs.form.validate()) {
        try {
          const data = await CompanyContract.writeProductDairy(this.id, this.text.toString())
          console.log(data, 'data')
          setTimeout(async () => {
            if (data.tx.txHash) {
              this.msg = data.tx.msg
              this.hash = data.tx.txHash
              this.showSuccessDialog = true
              this.updateDairy()
              this.$refs.form.reset()
            } else {
              this.msg = data.tx.msg
              this.hash = null
              this.showSuccessDialog = true
            }
          }, 2000)
        } catch (e) {
          console.log(e)
          this.msg = 'Something wrong, please try again XD'
          this.hash = null
          this.showSuccessDialog = true
        }
      }
    },
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
