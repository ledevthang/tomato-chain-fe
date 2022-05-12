<template>
  <v-app light>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="true"
      width="400px"
      style="background: #171a23"
      app
    >
      <div style="padding: 15px">
        <div style="display: flex; justify-content: space-between;align-items: center;margin-bottom: 30px">
          <div class="v-toolbar__title" style="font-family: Montserrat-Bold; font-weight: 600; font-size: 25px;color: #fff">
            Tomato Chain
          </div>
          <v-btn v-if="isMobile" class="open-button" icon>
            <v-icon color="#000" @click="drawer = false">
              mdi-close
            </v-icon>
          </v-btn>
        </div>
        <div class="link-wrap-mobile">
          <v-btn
            color="rgb(40 167 69 / 80%)"
            dense
            depressed
            rounded
            class="mr-3"
            @click="$router.push('/home')"
          >
            <b style="color: #fff">
              Home
            </b>
          </v-btn>
          <v-btn
            color="rgb(40 167 69 / 80%)"
            dense
            depressed
            rounded
            class="mr-3"
            @click="$router.push('/')"
          >
            <b style="color: #fff">
              About us
            </b>
          </v-btn>
          <v-btn
            color="rgb(40 167 69 / 80%)"
            dense
            depressed
            rounded
            class="mr-3"
            @click="$router.push('/product-retrieval')"
          >
            <b style="color: #fff">
              Scan QR
              <v-icon dark>
                mdi-barcode-scan
              </v-icon>
            </b>
          </v-btn>
          <v-btn
            v-if="currentCompany"
            class="green-gradient-btn"
            dense
            depressed
            rounded
            @click="$router.push('/company')"
          >
            <b style="color: #fff">
              My company
            </b>
          </v-btn>
          <div v-else @click="$router.push('/register')">
            <v-btn
              class="green-gradient-btn"
              dense
              depressed
              rounded
            >
              <b style="color: #fff">
                Register Now
              </b>
            </v-btn>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      :class="{'header-scrolling': scrolled}"
    >
      <nuxt-link to="/" style="color: #000;text-decoration: none">
        <v-toolbar-title style="font-family: 'Montserrat-Bold';font-weight: 600;;font-size: 25px;color: #fff">
          <div style="display: flex;align-items: center">
            <img width="35px" src="~/assets/image/tomato.png" alt="">
            <span style="color: #71ab71;font-weight: bold;margin-left: 5px">TomatoCheck</span>
          </div>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <div class="menu-zone">
        <div class="link-wrap">
          <v-btn
            color="rgb(40 167 69 / 80%)"
            dense
            depressed
            rounded
            text
            class="mr-3 btn-menu"
            @click="$router.push('/home')"
          >
            <b style="color: #253D4E;">
              Home
            </b>
          </v-btn>
          <v-btn
            color="rgb(40 167 69 / 80%)"
            dense
            depressed
            rounded
            text
            class="mr-3 btn-menu"
            @click="$router.push('/')"
          >
            <b style="color: #253D4E;">
              About us
            </b>
          </v-btn>
          <div @click="$router.push('/product-retrieval')">
            <v-btn
              class="btn-menu"
              text
              color="rgb(40 167 69 / 80%)"
              dense
              depressed
              rounded
            >
              <b style="color: #253D4E;">
                Scan QR
              </b>
              <v-icon class="ml-2" dark>
                mdi-barcode-scan
              </v-icon>
            </v-btn>
          </div>
          <div v-if="currentCompany" @click="$router.push('/company')">
            <v-btn
              class="green-gradient-btn"
              dense
              depressed
              rounded
            >
              <b style="color: #fff">
                My company
              </b>
            </v-btn>
          </div>
          <div v-else @click="$router.push('/register')">
            <v-btn
              class="green-gradient-btn"
              dense
              depressed
              rounded
            >
              <b style="color: #fff">
                Register Now
              </b>
            </v-btn>
          </div>
        </div>
        <div>
          <v-badge
            v-if="isTestnet"
            color="#F8B017"
            content="Ropsten"
          >
            <v-btn v-if="!currentAddress" outlined rounded @click="goToWallet">
              Connect Wallet
            </v-btn>
            <div v-else>
              <v-btn style="color: #fff;margin-right: 10px" rounded color="rgb(40 167 69 / 80%)" @click="showDetailsAddressDialog = true">
                {{ $shortAddress(currentAddress, 5) }}
              </v-btn>
            </div>
          </v-badge>
          <div v-else>
            <v-btn v-if="!currentAddress" outlined rounded @click="goToWallet">
              Connect Wallet
            </v-btn>
            <div v-else>
              <v-btn rounded style="color: #fff;margin-right: 10px" color="rgb(40 167 69 / 80%)" @click="showDetailsAddressDialog = true">
                {{ $shortAddress(currentAddress, 5) }}
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" />
    </v-app-bar>
    <!-- <v-main style="background: #BCE3C9;"> -->
      <v-main>
      <nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <div style="display: flex;justify-content: space-between;width: 100%">
        <span>&copy; {{ new Date().getFullYear() }} Tomato Chain. All rights reserved.</span>
        <div>
          <span class="mr-5">Terms of ServicePrivacy</span>
          <span>Policy</span>
        </div>
      </div>
    </v-footer>
    <choose-wallet
      :show="addWalletDialog"
      @close="addWalletDialog = false"
    />
    <v-dialog
      v-model="showDetailsAddressDialog"
      width="500px"
    >
      <v-card light style="padding: 10px;text-align: center">
        <v-card-title>
          <span><b>Your wallet</b></span>
          <v-btn
            class="ml-auto"
            small
            color="#E0E0E0"
            fab
            @click="showDetailsAddressDialog = false"
          >
            <v-icon color="#828282">
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-actions style="flex-direction: column">
          <div style="width: 100%" class="text-zone">
            <a
              style="margin: 20px 0;display: block;text-decoration: underline;"
              :href="$getScanLink(currentAddress, 'address')"
              target="_blank"
            >{{ currentAddress }}</a>
          </div>
          <v-spacer />
          <div style="margin: 20px 0" class="action-zone">
            <v-btn
              color="#28a745"
              medium
              rounded
              depressed
              outlined
              @click="logoutWallet()"
            >
              Logout
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import ChooseWallet from '~/components/common/ChooseWallet.vue'
import * as CompanyContract from '~/blockchain/utils/CompanyContract'

export default {
  components: {
    ChooseWallet
  },
  name: 'DefaultComponents',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isTestnet: true,
      showDetailsAddressDialog: false,
      addWalletDialog: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tomato Chain',
      isMobile: false,
      scrolled: false
    }
  },
  computed: {
    ...mapGetters('walletStore', [
      'currentAddress'
    ]),
    ...mapGetters('companyStore', [
      'currentCompany',
      'companyInfo',
      'triggerUpdate'
    ])
  },
  watch: {
    currentCompany (newVal) {
      if (newVal) {
        this.getCompanyDetail()
      }
    },
    triggerUpdate () {
      this.getCompanyDetail()
      this.getNonForAddressCompany()
    }
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('scroll', this.handleScroll)
    this.getNonForAddressCompany()
  },
  beforeMount () {
    this.isMobile = window.innerWidth < 701
    this.detectOrientaion()
    this.detectResize()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions('walletStore', [
      'changeCurrentAddress'
    ]),
    ...mapActions('companyStore', [
      'changeCurrentCompany',
      'changeCompanyInfo',
      'changeCompanyProduct',
      'changeAllProduct',
      'changeAllCompany'
    ]),
    getNonForAddressCompany () {
      // const lengthAllProduct = await CompanyContract.numberOfProduct()
      // const lengthAllCompany = await CompanyContract.numberOfCompany()
      this.getAllProduct()
      this.getAllCompany()
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
        const companyInfo = dataConverted.filter(company => company.companyAddress === this.currentAddress)
        console.log(companyInfo, 'companyInfo')
        const isCompany = await CompanyContract.isCompany(this.currentAddress)
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
    async getAllProduct () {
      const data = await axios.get('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/product.json')
      this.convertData(data.data)
      this.changeAllProduct(this.convertData(data.data))
    },
    async getAllCompany () {
      const data = await axios.get('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/company.json')
      this.convertData(data.data)
      this.changeAllCompany(this.convertData(data.data))
    },
    detectOrientaion () {
      window.addEventListener('orientationchange', () => {
        setTimeout(() => {
          this.isMobile = window.innerWidth < 701
        }, 100)
      })
    },

    detectResize () {
      window.addEventListener('resize', () => {
        setTimeout(() => {
          this.isMobile = window.innerWidth < 701
        }, 100)
      })
    },
    goToWallet () {
      this.addWalletDialog = true
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    scrollTo (route) {
      if (route.includes('/') > -1) {
        this.$router.push(route)
      } else {
        this.$vuetify.goTo(route)
      }
    },
    logoutWallet () {
      this.changeCurrentAddress(null)
      this.changeCurrentCompany(null)
      this.changeCompanyInfo(null)
      localStorage.removeItem('extensionName')
      this.showDetailsAddressDialog = false
    }
  }
}
</script>
