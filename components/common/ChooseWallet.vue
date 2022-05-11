<template>
  <v-dialog
    v-if="show"
    v-model="showDialog"
    :persistent="isSigning != ''"
    width="500px"
    light
    @click:outside="$emit('close')"
  >
    <v-card class="choose-wallet-connet">
      <v-card-title>
        <h3>Wallet integration</h3>
        <v-btn
          class="ml-auto"
          small
          color="#E0E0E0"
          fab
          @click="$emit('close')"
        >
          <v-icon color="#828282">
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions style="flex-direction: column">
        <p class="mt-5">
          Please connect account to your wallet
        </p>
        <v-spacer />
        <v-chip
          class="ma-2 metamask-chip"
          label
          :loading="true"
          large
          @click="connectWallet('Metamask')"
        >
          <div v-if="isSigning !== 'Metamask'">
            <img src="~/assets/image/meta-mask.png" alt>
            Metamask wallet
          </div>
          <div v-else class="loading">
            <v-progress-circular indeterminate color="amber" />
          </div>
        </v-chip>
        <v-chip
          v-show="$vuetify.breakpoint.smAndDown"
          class="ma-2 trust-chip"
          large
          label
          @click="connectWallet('TrustWallet')"
        >
          <div v-if="isSigning !== 'TrustWallet'">
            <img src="~/assets/image/trust.png" alt>
            Trust wallet
          </div>
          <div v-else class="loading">
            <v-progress-circular indeterminate color="amber" />
          </div>
        </v-chip>
        <div class="note-dashboard-zone">
          <div class="note-dashboard">
            <div>Extensions and Mobile Apps allowed to connect to <b>Tomato Chain</b> account:</div>
            <div><b>On Desktop</b>: MetaMask extensions</div>
            <div><b>On Mobile</b>: Trust support</div>
            <div>Please access our website through browser of the wallet app to connect your wallet to <b>Tomato Chain</b> account.</div>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import walletManager from '~/blockchain/utils/walletManager'

export default {

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showDialog: this.show,
      availableWallet: null,
      isSigning: '',
      hasMetamask: true,
      hasBinance: true,
      hasTrust: true
    }
  },

  watch: {
    show (newVal) {
      this.showDialog = newVal
    }
  },

  mounted () {
    this.availableWallet = walletManager.checkSupportedWalletsType();
  },

  methods: {
    async connectWallet (walletName) {
      if (this.availableWallet && this.availableWallet.includes(walletName)) {
        try {
          this.isSigning = walletName
          await this.$connectWallet(walletName, false)
          this.isSigning = false
          this.$emit('close')
          localStorage.setItem('extensionName', walletName)
        } catch (e) {
          this.$showErrorDialog({ text: e })
        }
      } else {
        this.$showErrorDialog({ text: `You need to have the ${walletName} extension first. Please set up or login to your ${walletName} account and connect it to continue.` })
      }
    },

    async getWalletConnect (walletName) {
      try {
        // required set
        localStorage.setItem('extensionName', walletName)

        this.isSigning = walletName
        await this.$connectWallet(walletName, false)
        this.isSigning = false
        this.$emit('close')
      } catch (e) {
        localStorage.removeItem('extensionName')
      }
    }

  }
}
</script>

<style lang="sass" scoped>
.choose-wallet-connet
  padding: 20px 30px
  @media screen and (max-width: 959px)
    padding: 0
</style>
