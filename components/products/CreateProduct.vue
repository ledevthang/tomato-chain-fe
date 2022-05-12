<template>
  <div>
    <div v-if="currentCompany">
      <div>
        <h2 style="background: #c8e4cc;border-radius: 6px" class="text-center py-6 mb-5">
          <b style="font-family: 'Montserrat-Bold';font-size: 30px;color: #4f5f6e;">Create Your Product</b>
        </h2>
      </div>
      <v-form
        ref="form"
        v-model="valid"
        style="padding: 0 30px;"
        lazy-validation
      >
        <v-text-field
          v-model="productName"
          :rules="productRule"
          label="Name"
          required
          outlined
        />

        <v-text-field
          v-model="productPrice"
          label="Price"
          type="number"
          required
          outlined
        />

        <v-text-field
          v-model="productDescription"
          :rules="productRule"
          label="Description"
          required
          outlined
        />
        <v-text-field
          v-model="retailer"
          :rules="productRule"
          label="Retailer"
          required
          outlined
        />
        <v-text-field
          v-model="dateOfManufacture"
          :rules="productRule"
          label="Date of Manufacture"
          required
          outlined
        />
        <v-text-field
          v-model="expirationDate"
          :rules="productRule"
          label="Expiration Date"
          required
          outlined
        />
        <v-text-field
          v-model="quantity"
          type="number"
          label="Quantity"
          required
          outlined
        />
        <div class="btn-zone">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="checkValid"
          >
            <b>Upload Your Product</b>
          </v-btn>
          <v-btn
            color="warning"
            class="mr-4"
            @click="reset"
          >
            <b>Reset Form</b>
          </v-btn>
        </div>
      </v-form>
      <v-dialog
        v-model="showPriceDialog"
        width="300px"
      >
        <v-card light style="padding: 10px;text-align: center">
          <div style="text-align: center;font-size: 15px;padding: 10px 0">
            <span><b>Your product upload fee</b></span>
          </div>
          <v-card-actions style="flex-direction: column">
            <div style="width: 100%" class="text-zone d-flex align-center justify-center">
              <b>0.0001</b> <img style="width: 25px;height: 25px" class="ml-3" src="~/assets/image/coin/ETH.png" alt="">
            </div>
            <v-spacer />
            <div style="margin: 20px 0;width: 100%;display: flex;justify-content: space-between;" class="action-zone">
              <v-btn
                color="#28a745"
                medium
                depressed
                dark
                :loading="loading"
                @click="createProduct()"
              >
                Upload
              </v-btn>
              <v-btn
                color="red"
                medium
                depressed
                dark
                @click="showPriceDialog = false"
              >
                Cancel
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    </div>
    <div v-else>
      Please register your company
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
// import walletManager from '~/blockchain/utils/walletManager'
import * as CompanyContract from '~/blockchain/utils/CompanyContract'
// import * as Support from '~/blockchain/utils/support/signAndSendTx'
export default {
  data: () => ({
    valid: true,
    productRule: [
      v => !!v || 'This field cannot be left blank',
      v => (v && v.length <= 42) || 'Too long'
    ],
    productName: 'Tomato',
    productPrice: 99,
    productDescription: 'Tomato from Viet Nam',
    retailer: 'Vinmart',
    expirationDate: null,
    quantity: 1000,
    dateOfManufacture: null,
    showPriceDialog: false,
    showSuccessDialog: false,
    hash: null,
    msg: null,
    loading: false
  }),
  computed: {
    ...mapGetters('walletStore', [
      'currentAddress'
    ]),
    ...mapGetters('companyStore', [
      'currentCompany',
      'allProduct',
      'companyInfo'
    ])
  },
  created () {
    this.dateOfManufacture = this.getDate()
    this.expirationDate = this.getDate()
    // const data2 = await axios.get('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/product.json')
  },
  methods: {
    ...mapActions('companyStore', [
      'changeTriggerUpdate'
    ]),
    checkValid () {
      if (this.$refs.form.validate()) {
        this.showPriceDialog = true
      }
    },
    getDate () {
      const dateObj = new Date()
      const month = dateObj.getUTCMonth() + 1
      const day = dateObj.getUTCDate()
      const year = dateObj.getUTCFullYear()

      return year + '/' + month + '/' + day
    },
    // async getProviderLength () {
    //   try {
    //     const data = await CompanyContract.numberOfProduct()
    //     return data.tx.data
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },
    async createProduct () {
      this.loading = true
      try {
        console.log(this.allProduct.length, 'this.allProduct.length')
        const productLength = this.allProduct.length
        const id = productLength + 1
        const params = {
          productID: id,
          productName: this.productName,
          productPrice: +this.productPrice,
          productDescription: this.productDescription,
          Provider: this.currentAddress,
          companyName: this.companyInfo.companyName,
          retailer: this.retailer,
          isConfirmByRetailer: false,
          dateOfManufacture: this.dateOfManufacture,
          expirationDate: this.expirationDate,
          quantity: this.quantity,
          currentAddress: this.currentAddress,
          amount: 0.0001
        }
        const data = await CompanyContract.createProduct(params)
        setTimeout(async () => {
          if (data.tx.txHash) {
            this.msg = data.tx.msg
            this.hash = data.tx.txHash
            this.showSuccessDialog = true
            params.txHash = data.tx.txHash
            await axios.post('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/product.json', params)
            this.loading = false
            this.showPriceDialog = false
            this.reset()
          } else {
            this.msg = data.tx.msg
            this.hash = null
            this.loading = false
            this.showPriceDialog = false
            this.showSuccessDialog = true
          }
          this.changeTriggerUpdate()
        }, 2000)
      } catch (e) {
        console.log(e)
        this.msg = 'Something wrong, please try again XD'
        this.hash = null
        this.loading = false
        this.showPriceDialog = false
        this.showSuccessDialog = true
      }
    },
    async update () {
      const data2 = await CompanyContract.updateProductHash(1, 'data.tx.txHash')
      console.log(data2, '22222')
    },
    reset () {
      this.$refs.form.reset()
      this.dateOfManufacture = this.getDate()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
<style lang="sass" scoped>
.btn-zone
  color: yellow
  font-weight: bold
  display: flex
  align-items: center
  justify-content: space-between
  @media screen and (max-width: 960px)
    flex-direction: column
    & > *
      margin-bottom: 15px
</style>
