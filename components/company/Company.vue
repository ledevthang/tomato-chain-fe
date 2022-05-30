<template>
  <div class="company">
    <div v-if="companyInfo">
      <v-card color="basil">
        <div class="company-zone mb-5">
          <div class="company-img-zone">
            <img :src="getUrlRandom" alt="">
          </div>
          <div class="company-info-zone">
            <v-card-title class="text-left px-0 py-0 pb-6">
              <h3 class="font-weight-bold text-h4 basil--text">
                {{ companyInfo.companyName }}
              </h3>
            </v-card-title>
            <div class="title-zone">
              <div
                class="mx-0 d-flex align-center"
              >
                <v-rating
                    :value="0"
                    background-color="#d6d6d6"
                    color="yellow"
                    dense
                    half-increments
                    size="20"
                  />

                <div class="ms-4">
                  0 review
                </div>
            </div>
            <div class="description-company">
              <div>ID <span>{{ companyInfo.companyID }}</span> </div>
              <div>
                Address
                <span>
                  <a :href="$getScanLink(companyInfo.companyAddress, 'address')" target="_blank">
                    {{ $shortAddress(companyInfo.companyAddress, 15) }}
                  </a>
                </span>
              </div>
              <div>Type <span>{{ companyInfo.companyType }}</span> </div>
              <div>Email <span>{{ companyInfo.companyEmail }}</span></div>
              <div>Phone number <span>{{ companyInfo.companyPhoneNumber }}</span></div>
              <div>Description <span>{{ companyInfo.companyDescription }}</span></div>
            </div>
            </div>
          </div>
        </div>
        <div class="custom-tab">
          <v-btn v-for="(item, index) in items"
            :key="index"
            rounded
            large
            :text="tab !== index"
            color="#37AB76"
            :style="{color: tab !== index ? '#757575' : '#fff'}"
            @click="tab = index"
          >
            <b>{{ item }}</b>
          </v-btn>
        </div>

        <v-tabs-items v-model="tab">
          <v-tab-item :transition="false">
            <v-card
              style="min-height: 300px"
              color="basil"
              flat
            >
              <div>
                <div v-if="companyProducts && companyProducts.length !== 0" class="company-products">
                  <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;" class="custom-card-product custom-card" @click="$router.push('/create-product')">
                    <div style="display: flex;justify-content: center;">
                        <v-icon style="font-size: 140px;color: #316a05">
                          mdi-plus
                        </v-icon>
                    </div>
                    <div class="info-zone">
                        <div style="color: rgb(40, 167, 69)" class="text-center">
                          <b>Upload Product</b>
                        </div>
                    </div>
                  </div>
                  <custom-card-product
                      v-for="(item, index) in companyProducts"
                      :key="index"
                      :item="item"
                      :type="'about'"
                      :current-address="currentAddress"
                    />
                </div>
                <div v-else>
                  <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;" class="custom-card-product custom-card" @click="$router.push('/create-product')">
                    <div style="display: flex;justify-content: center;">
                        <v-icon style="font-size: 140px;color: #316a05">
                          mdi-plus
                        </v-icon>
                    </div>
                    <div class="info-zone">
                        <div style="color: rgb(40, 167, 69)" class="text-center">
                          <b>Upload Product</b>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
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
import CustomCardProduct from '../common/CustomCardProduct.vue'
import Banner from '../homepage/Banner.vue'
export default {
  components: { CustomCardProduct, Banner },
  data: () => ({
    valid: true,
    companyAddress: '',
    email: '',
    phone: '',
    company: '',
    tab: 0,
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
    ]),
    getUrlRandom () {
      return require(`~/assets/image/product/${this.randomNumber()}.svg`)
    }
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
    randomNumber () {
      const max = 6;
      const min = 1;
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
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
@import '~/assets/scss/components/company.scss';
</style>

