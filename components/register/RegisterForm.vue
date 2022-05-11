<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      :value="companyAddress"
      disabled
      :rules="companyAddressRules"
      label="Company address"
      required
      outlined
    />

    <v-text-field
      v-model="company"
      :rules="companyRules"
      label="Company name"
      required
      solo
      outlined
    />

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
      solo
      outlined
    />

    <v-text-field
      v-model="phone"
      :rules="phoneRules"
      label="Phone number"
      required
      solo
      outlined
    />
    <div style="color: black;font-weight: bold;display: flex;align-items: center;justify-content: space-between">
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="register"
      >
        Register
      </v-btn>
      <div>
        <b>
          Register now for only 0.01 ETH
        </b>
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
              @click="hash ? redirectToMyCompany() : showSuccessDialog = false"
            >
              Good!
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import walletManager from '~/blockchain/utils/walletManager'
import * as CompanyContract from '~/blockchain/utils/CompanyContract'
export default {
  data: () => ({
    valid: true,
    companyAddress: '',
    companyAddressRules: [
      v => !!v || 'Company name is required',
      v => (v && walletManager.isAddress(v)) || 'Company name not valid'
    ],
    email: 'your@gmail.com',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email not valid'
    ],
    phone: '0999999999',
    phoneRules: [
      v => !!v || 'Phone number is required',
      v => /((09|03|07|08|05)+([0-9]{8})\b)/.test(v) || 'Phone number not valid'
    ],
    company: 'Your company',
    companyRules: [
      v => !!v || 'Company name is required'
    ],
    checkbox: false,
    count: 0,
    showSuccessDialog: false,
    hash: null,
    msg: null
  }),
  computed: {
    ...mapGetters('walletStore', [
      'currentAddress'
    ])
  },
  watch: {
    currentAddress (newVal) {
      if (newVal) {
        this.companyAddress = this.currentAddress
      }
    }
  },
  created () {
    this.companyAddress = this.currentAddress
  },

  methods: {
    ...mapActions('companyStore', [
      'changeTriggerUpdate'
    ]),
    redirectToMyCompany () {
      this.$router.push('/company')
    },
    async register () {
      if (this.$refs.form.validate()) {
        const params = {
          companyAddress: this.companyAddress,
          companyName: this.company,
          companyPhoneNumber: this.phone,
          companyEmail: this.email,
          amount: 0.01,
          currentAddress: this.currentAddress
        }
        try {
          const data = await CompanyContract.registerCompany(
            params
          )
          setTimeout(async () => {
            if (data.tx.txHash) {
              this.msg = data.tx.msg
              this.hash = data.tx.txHash
              this.showSuccessDialog = true
              params.txHash = data.tx.txHash
              await axios.post('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/company.json', params)
            } else {
              this.msg = data.tx.msg
              this.hash = null
              this.showSuccessDialog = true
            }
            this.changeTriggerUpdate()
          }, 2000)
        } catch (e) {
          console.log(e)
          this.msg = 'Something wrong, please try again XD'
          this.hash = null
          this.showSuccessDialog = true
        }
      }
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
