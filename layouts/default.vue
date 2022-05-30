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
            TomatoCheck
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
            @click="$router.push('/')"
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
            @click="$router.push('/about-us')"
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
            </b>
          </v-btn>
          <v-btn
          v-if="currentCompany"
              rounded
              medium
              color="#37AB76"
              @click="$router.push('/company')"
            >
              <b style="color: #fff">
                My company
              </b>
            </v-btn>
          <div v-else @click="$router.push('/register')">
            <v-btn
              rounded
              medium
              color="#37AB76"
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
            <span class="title-tomato" style="color: #71ab71;font-weight: bold;margin-left: 5px">TomatoCheck</span>
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
            @click="$router.push('/')"
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
            @click="$router.push('/about-us')"
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
            </v-btn>
          </div>
          <div v-if="currentCompany" @click="$router.push('/company')">
            <v-btn
          v-if="currentCompany"
              rounded
              medium
              color="#37AB76"
            >
              <b style="color: #fff">
                My company
              </b>
            </v-btn>
          </div>
          <div v-else @click="$router.push('/register')">
            <v-btn
              rounded
              medium
              color="#37AB76"
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
            <v-btn v-if="!currentAddress" outlined color="rgb(55, 171, 118)" rounded @click="goToWallet">
              Connect Wallet
            </v-btn>
            <div v-else>
              <v-btn style="color: #fff;margin-right: 10px" rounded color="rgb(55, 171, 118)" @click="showDetailsAddressDialog = true">
                {{ $shortAddress(currentAddress, 5) }}
              </v-btn>
            </div>
          </v-badge>
          <div v-else>
            <v-btn v-if="!currentAddress" outlined color="rgb(55, 171, 118)" rounded @click="goToWallet">
              Connect Wallet
            </v-btn>
            <div v-else>
              <v-btn rounded style="color: #fff;margin-right: 10px" color="rgb(55, 171, 118)" @click="showDetailsAddressDialog = true">
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
      <banner v-if="$nuxt.$route.path !== '/'" />
      <nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      dark
      color="#111827"
      text-color="#fff"
      app
    >
      <v-container>
        <div class="footer-custom">
          <div style="cursor: pointer">
            <span>Terms of ServicePrivacy</span>
            <span class="mx-7">Privacy</span>
            <span>Policy</span>
          </div>
          <div class="d-flex align-center" style="cursor: pointer">
            <span class="mr-7">Join our community</span>
            <svg width="168" height="24" viewBox="0 0 168 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9078 7.18115C20.9169 7.39235 20.9169 7.59395 20.9169 7.80515C20.926 14.2084 16.2987 21.6004 7.83647 21.6004C5.34062 21.6004 2.8903 20.842 0.786133 19.4212C1.15049 19.4692 1.51485 19.4884 1.87921 19.4884C3.94693 19.4884 5.96002 18.7588 7.59053 17.4052C5.623 17.3668 3.89228 16.0132 3.2911 14.0356C3.98337 14.1796 4.69388 14.1508 5.36793 13.9492C3.22733 13.5076 1.68792 11.5204 1.67881 9.20675C1.67881 9.18755 1.67881 9.16835 1.67881 9.14915C2.31644 9.52355 3.03604 9.73475 3.76476 9.75395C1.75168 8.33315 1.12316 5.50115 2.34376 3.28353C4.68476 6.31715 8.12793 8.15075 11.8262 8.35235C11.4527 6.67235 11.9628 4.90595 13.1561 3.71554C15.0052 1.88193 17.92 1.97793 19.669 3.92674C20.6983 3.71554 21.6912 3.31233 22.593 2.74593C22.2468 3.86914 21.5272 4.81955 20.5708 5.42435C21.4816 5.30915 22.3743 5.04995 23.2124 4.66595C22.593 5.64515 21.8096 6.48995 20.9078 7.18115Z" fill="white"/>
              <path d="M57.3408 1.5H38.6592C38.3518 1.50012 38.057 1.6223 37.8397 1.83966C37.6223 2.05703 37.5001 2.35181 37.5 2.65922V21.3408C37.5001 21.6482 37.6223 21.943 37.8397 22.1603C38.057 22.3777 38.3518 22.4999 38.6592 22.5H48V14.25H45.4898V11.25H48V8.85938C48 6.14719 49.8811 4.67062 52.3041 4.67062C53.4633 4.67062 54.7102 4.75781 54.9998 4.79625V7.62891H53.0695C51.7514 7.62891 51.5002 8.25234 51.5002 9.17109V11.25H54.6408L54.2306 14.25H51.5002V22.5H57.3408C57.6482 22.4999 57.943 22.3777 58.1603 22.1603C58.3777 21.943 58.4999 21.6482 58.5 21.3408V2.65922C58.4999 2.35181 58.3777 2.05703 58.1603 1.83966C57.943 1.6223 57.6482 1.50012 57.3408 1.5Z" fill="white"/>
              <path d="M88.9695 8.79771C90.4511 9.8606 92.2661 10.486 94.2265 10.486V6.70025C93.8555 6.70033 93.4854 6.6615 93.1225 6.58433V9.56424C91.1623 9.56424 89.3475 8.93886 87.8655 7.87605V15.6016C87.8655 19.4663 84.7436 22.5991 80.8929 22.5991C79.456 22.5991 78.1206 22.1632 77.0112 21.4155C78.2774 22.7148 80.0431 23.5208 81.9966 23.5208C85.8476 23.5208 88.9696 20.388 88.9696 16.5231V8.79771H88.9695ZM90.3314 4.97838C89.5742 4.1482 89.077 3.07535 88.9695 1.88927V1.40234H87.9233C88.1866 2.90985 89.0848 4.19778 90.3314 4.97838ZM79.4468 18.4499C79.0238 17.8932 78.7952 17.2122 78.7962 16.5121C78.7962 14.7445 80.2241 13.3113 81.9858 13.3113C82.3141 13.3112 82.6404 13.3617 82.9533 13.4613V9.59096C82.5877 9.54067 82.2186 9.51932 81.8498 9.52715V12.5396C81.5366 12.44 81.2101 12.3894 80.8818 12.3897C79.1201 12.3897 77.6923 13.8227 77.6923 15.5906C77.6923 16.8405 78.406 17.9227 79.4468 18.4499Z" fill="white"/>
              <path d="M87.8654 7.87597C89.3474 8.93878 91.1622 9.56416 93.1224 9.56416V6.58425C92.0283 6.35035 91.0596 5.77653 90.3313 4.97838C89.0847 4.1977 88.1866 2.90977 87.9232 1.40234H85.1751V16.523C85.1689 18.2857 83.7434 19.713 81.9856 19.713C80.9497 19.713 80.0294 19.2175 79.4466 18.4499C78.4058 17.9227 77.6921 16.8404 77.6921 15.5906C77.6921 13.823 79.1199 12.3898 80.8816 12.3898C81.2191 12.3898 81.5444 12.4425 81.8496 12.5397V9.52723C78.0665 9.60567 75.0239 12.7078 75.0239 16.523C75.0239 18.4276 75.7816 20.1541 77.0113 21.4156C78.1206 22.1632 79.4561 22.5992 80.8929 22.5992C84.7437 22.5992 87.8655 19.4663 87.8655 15.6016V7.87597H87.8654Z" fill="white"/>
              <path d="M93.1224 6.58396V5.77821C92.1357 5.77972 91.1684 5.50241 90.3313 4.978C91.0723 5.79221 92.0481 6.35362 93.1224 6.58396ZM87.9232 1.40205C87.898 1.25798 87.8787 1.11297 87.8653 0.967394V0.480469H84.071V15.6012C84.0649 17.3638 82.6395 18.7911 80.8815 18.7911C80.3654 18.7911 79.878 18.6681 79.4465 18.4497C80.0293 19.2172 80.9496 19.7127 81.9855 19.7127C83.7432 19.7127 85.1689 18.2855 85.1751 16.5228V1.40205H87.9232ZM81.8497 9.52694V8.66916C81.5326 8.62568 81.213 8.60385 80.8929 8.60401C77.0418 8.60393 73.9199 11.7368 73.9199 15.6012C73.9199 18.024 75.1469 20.1592 77.0113 21.4152C75.7816 20.1537 75.0239 18.4271 75.0239 16.5227C75.0239 12.7075 78.0664 9.60538 81.8497 9.52694Z" fill="white"/>
              <path d="M128.146 1.99288C126.587 1.05338 124.964 0.370107 123.278 0C123.064 0.512456 122.829 1.16726 122.658 1.70818C120.865 1.33808 119.05 1.33808 117.256 1.70818C117.064 1.11032 116.851 0.540924 116.616 0C114.929 0.370107 113.285 1.05338 111.747 2.02135C108.673 8.14236 107.84 14.0925 108.246 19.9858C110.061 21.7794 112.068 23.1459 114.224 24C114.715 23.1174 115.142 22.2064 115.505 21.2384C114.801 20.8968 114.139 20.4698 113.498 19.9573C113.669 19.7865 113.819 19.6156 113.989 19.4448C117.769 21.8363 122.167 21.8363 125.947 19.4448C126.117 19.6156 126.267 19.7865 126.438 19.9573C125.797 20.4698 125.114 20.8968 124.409 21.2384C124.772 22.2064 125.199 23.1174 125.69 24C127.847 23.1174 129.875 21.7794 131.669 19.9858C132.139 13.153 130.815 7.23132 128.146 1.99288ZM116.018 16.3416C114.843 16.3416 113.904 14.9182 113.904 13.1815C113.904 11.4448 114.843 9.99288 116.018 9.99288C117.214 9.99288 118.153 11.4164 118.153 13.1815C118.132 14.9182 117.214 16.3416 116.018 16.3416ZM123.875 16.3416C122.701 16.3416 121.762 14.9182 121.762 13.1815C121.762 11.4448 122.701 9.99288 123.875 9.99288C125.071 9.99288 126.011 11.4164 125.989 13.1815C125.968 14.9466 125.05 16.3416 123.875 16.3416Z" fill="white"/>
              <path d="M156 2.12731C159.154 2.12731 159.524 2.14137 160.77 2.19759C161.923 2.24913 162.546 2.44125 162.963 2.60525C163.516 2.82079 163.91 3.07382 164.322 3.48616C164.734 3.8985 164.992 4.29211 165.203 4.84501C165.362 5.26206 165.559 5.88523 165.61 7.03794C165.667 8.28433 165.681 8.65448 165.681 11.808C165.681 14.9614 165.667 15.3316 165.61 16.578C165.559 17.7307 165.367 18.3539 165.203 18.7709C164.987 19.3238 164.734 19.7174 164.322 20.1298C163.91 20.5421 163.516 20.7998 162.963 21.0107C162.546 21.17 161.923 21.3668 160.77 21.4184C159.524 21.4746 159.154 21.4886 156 21.4886C152.847 21.4886 152.476 21.4746 151.23 21.4184C150.077 21.3668 149.454 21.1747 149.037 21.0107C148.484 20.7951 148.091 20.5421 147.678 20.1298C147.266 19.7174 147.008 19.3238 146.797 18.7709C146.638 18.3539 146.441 17.7307 146.39 16.578C146.333 15.3316 146.319 14.9614 146.319 11.808C146.319 8.65448 146.333 8.28433 146.39 7.03794C146.441 5.88523 146.633 5.26206 146.797 4.84501C147.013 4.29211 147.266 3.8985 147.678 3.48616C148.091 3.07382 148.484 2.81611 149.037 2.60525C149.454 2.44593 150.077 2.24913 151.23 2.19759C152.476 2.13668 152.851 2.12731 156 2.12731ZM156 0C152.795 0 152.392 0.0140571 151.132 0.0702854C149.876 0.126514 149.018 0.327999 148.269 0.618511C147.491 0.918397 146.835 1.32605 146.179 1.98205C145.523 2.63805 145.12 3.29873 144.815 4.07186C144.525 4.8216 144.323 5.67907 144.267 6.93954C144.211 8.19529 144.197 8.59826 144.197 11.8033C144.197 15.0083 144.211 15.4113 144.267 16.6717C144.323 17.9275 144.525 18.785 144.815 19.5394C145.115 20.3172 145.523 20.9732 146.179 21.6292C146.835 22.2852 147.496 22.6881 148.269 22.9928C149.018 23.2832 149.876 23.4848 151.136 23.541C152.397 23.5972 152.795 23.6112 156.005 23.6112C159.214 23.6112 159.613 23.5972 160.873 23.541C162.129 23.4848 162.986 23.2832 163.741 22.9928C164.519 22.6929 165.175 22.2852 165.831 21.6292C166.487 20.9732 166.89 20.3125 167.194 19.5394C167.485 18.7896 167.686 17.9322 167.742 16.6717C167.799 15.4113 167.813 15.013 167.813 11.8033C167.813 8.59357 167.799 8.19529 167.742 6.93482C167.686 5.67907 167.485 4.8216 167.194 4.06717C166.894 3.28936 166.487 2.63336 165.831 1.97736C165.175 1.32137 164.514 0.918397 163.741 0.613826C162.991 0.323313 162.134 0.121828 160.873 0.0655999C159.608 0.0140571 159.205 0 156 0Z" fill="white"/>
              <path d="M156 5.74414C152.654 5.74414 149.937 8.45716 149.937 11.8074C149.937 15.1577 152.65 17.8708 156 17.8708C159.35 17.8708 162.063 15.1577 162.063 11.8074C162.063 8.45716 159.35 5.74414 156 5.74414ZM156 15.7388C153.826 15.7388 152.064 13.9769 152.064 11.8028C152.064 9.6286 153.826 7.86676 156 7.86676C158.174 7.86676 159.936 9.6286 159.936 11.8028C159.936 13.9769 158.174 15.7388 156 15.7388Z" fill="white"/>
              <path d="M162.302 6.91609C163.083 6.91609 163.717 6.28253 163.717 5.50099C163.717 4.7195 163.083 4.08594 162.302 4.08594C161.52 4.08594 160.887 4.7195 160.887 5.50099C160.887 6.28253 161.52 6.91609 162.302 6.91609Z" fill="white"/>
            </svg>
          </div>
        </div>
      </v-container>
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
import Banner from '~/components/homepage/Banner.vue'
import * as CompanyContract from '~/blockchain/utils/CompanyContract'

export default {
  components: {
    ChooseWallet,
    Banner
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
      title: 'TomatoCheck',
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
