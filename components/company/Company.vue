<template>
  <div class="company">
    <div v-if="companyInfo">
      <div>
        <h2 style="background: #c8e4cc;border-radius: 6px" class="text-center py-6 mb-5">
          <b style="font-family: 'Montserrat-Bold';font-size: 30px;color: #4f5f6e;">
            MY COMPANY
          </b>
        </h2>
      </div>
      <v-card color="basil">
        <div class="company-zone mb-5">
          <div class="company-image">
            <img src="~/assets/image/not-found-image.svg" alt="">
          </div>
          <div class="text-left">
            <v-card-title class="text-left px-0 py-6">
              <h3 class="font-weight-bold text-h4 basil--text">
                {{ companyInfo.companyName }}
              </h3>
            </v-card-title>
            <div class="title-zone">
              <div>Company name: <span>{{ companyInfo.companyName }}</span></div>
              <div>
                Company address:
                <span>
                  <a :href="$getScanLink(companyInfo.companyAddress, 'address')" target="_blank">
                    {{ $shortAddress(companyInfo.companyAddress, 15) }}
                  </a>
                </span>
              </div>
              <div>Company email: <span>{{ companyInfo.companyEmail }}</span></div>
              <div>Company phone number: <span>{{ companyInfo.companyPhoneNumber }}</span></div>
            </div>
          </div>
        </div>

        <v-tabs
          v-model="tab"
          background-color="#28a745"
          center-active
          color="#fff"
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            <b>{{ item }}</b>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :transition="false">
            <v-card
              style="min-height: 300px"
              color="basil"
              flat
            >
              <v-card-text>
                <div v-if="companyProducts && companyProducts.length !== 0" class="product-items">
                  <div class="product-item" @click="$router.push('/create-product')">
                    <div class="product-item-image" style="background: rgba(40, 167, 69, 0.5)">
                      <v-icon style="font-size: 80px;color: #316a05">
                        mdi-plus
                      </v-icon>
                    </div>
                    <div style="color: rgb(40, 167, 69)" class="text-center">
                      <b>Upload Product</b>
                    </div>
                  </div>
                  <div v-for="(item, index) in companyProducts" :key="index" class="product-item" @click="$router.push('/product/' + item.productID)">
                    <div class="product-item-image">
                      <img src="~/assets/image/not-found-image.svg" alt="">
                    </div>
                    <b>{{ item.productName }}</b>
                  </div>
                </div>
                <div v-else class="d-flex flex-column align-center justify-center">
                  <div class="product-item" @click="$router.push('/create-product')">
                    <div class="product-item-image" style="background: rgba(40, 167, 69, 0.5)">
                      <v-icon style="font-size: 80px;color: #316a05">
                        mdi-plus
                      </v-icon>
                    </div>
                    <div style="color: rgb(40, 167, 69)" class="text-center">
                      <b>Upload Product</b>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :transition="false">
            <v-card
              style="min-height: 300px"
              color="basil"
              flat
            >
              <v-card-text>
                <div class="d-flex flex-column align-center justify-center">
                  <img src="~/assets/image/nodata.png" alt="">
                  <div style="font-weight: bold; font-size: 16px;margin-top: 20px">
                    No data for this item yet, please come back later or create a new one if you are the admin!
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :transition="false">
            <v-card
              style="min-height: 300px"
              color="basil"
              flat
            >
              <v-card-text>
                <div class="d-flex flex-column align-center justify-center">
                  <img src="~/assets/image/nodata.png" alt="">
                  <div style="font-weight: bold; font-size: 16px;margin-top: 20px">
                    No data for this item yet, please come back later or create a new one if you are the admin!
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :transition="false">
            <v-card
              style="min-height: 300px"
              color="basil"
              flat
            >
              <v-card-text>
                <div class="d-flex flex-column align-center justify-center">
                  <img src="~/assets/image/nodata.png" alt="">
                  <div style="font-weight: bold; font-size: 16px;margin-top: 20px">
                    No data for this item yet, please come back later or create a new one if you are the admin!
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import * as CompanyContract from '~/blockchain/utils/CompanyContract'
export default {
  data: () => ({
    valid: true,
    companyAddress: '',
    email: '',
    phone: '',
    company: '',
    tab: null,
    items: [
      'Products', 'License', 'Affiliated Factory', 'Member'
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  computed: {
    ...mapGetters('walletStore', [
      'currentAddress'
    ]),
    ...mapGetters('companyStore', [
      'currentCompany',
      'companyInfo',
      'companyProducts'
    ])
  },
  mounted () {
    if (this.currentAddress) {
      this.getCompanyDetail()
    }
  },
  methods: {
    ...mapActions('companyStore', [
      'changeCurrentCompany',
      'changeCompanyInfo',
      'changeCompanyProduct'
    ]),
    convertData (data) {
      const dataX = []
      for (const key in data) {
        dataX.push({ ...data[key] })
      }
      return dataX
    },
    async getCompanyDetail () {
      try {
        const data = await axios.get('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/company.json')
        const dataConverted = this.convertData(data.data)
        const companyInfo = dataConverted.filter(company => company.currentAddress === this.currentAddress)
        const isCompany = await CompanyContract.isCompany(this.currentAddress)
        console.log(isCompany, 'isCompany')
        const params = {
          isCompany: isCompany.tx.data,
          address: this.currentAddress
        }
        this.getProduct()
        this.changeCompanyInfo(companyInfo[0])
        this.changeCurrentCompany(params)
      } catch (e) {
        console.log(e)
      }
    },
    async getProduct () {
      const data = await axios.get('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/product.json')
      const dataConverted = await this.convertData(data.data)
      const companyProduct = dataConverted.filter(product => product.Provider === this.currentAddress)
      this.changeCompanyProduct(companyProduct)
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
<style lang="scss" scoped>
.basil {
  background-color: transparent !important;
  box-shadow: unset !important;
  // text-align: center;
}
.basil--text {
  color: #356859 !important;
}
.title-zone > div {
  margin-bottom: 5px;
  font-weight: bold;
}
.title-zone span {
  color: #2289e3;
  font-weight: bold;
}
.product-items {
  display: flex;
  flex-wrap: wrap;
}
.product-item {
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.product-item-image {
  width: 150px;
  height: 150px;
  border-radius: 6px;
  background: rgb(53 104 89 / 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.company-zone {
  display: flex;
}
.company-image {
  display: inline-block;
  padding: 80px;
  background: rgb(242, 242, 242);
  margin-right: 50px;
}
@media screen and (max-width: 960px) {
  .company-zone {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .company-image {
    margin-right: 0;
  }
}
</style>
