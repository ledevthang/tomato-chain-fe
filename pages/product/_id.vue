<template>
  <v-container>
    <div>
      <div v-if="product && product.productID !== '0'">
        <v-card color="basil">
          <div class="company-zone mb-5">
          <div class="company-img-zone">
            <img :src="getUrlRandom" alt="">
          </div>
          <div class="company-info-zone">
            <v-card-title class="text-left px-0 py-0 pb-6">
              <h3 class="font-weight-bold text-h4 basil--text">
                {{ product.productName }}
              </h3>
            </v-card-title>
            <div class="mb-3">
                <span style="color: #757575">$ • Italian, Vegetable</span>

                <span class="mx-3">/</span>
                <b style="color: #37AB76" @click.stop="goToLink(findCompanyId(product.Provider), 'address')">
                  {{ product.companyName }}
                </b>
              </div>
            <div class="title-zone">
              <div
              style="border-bottom: 1px solid #E5E7EB;padding-bottom: 30px"
                class="mx-0 mb-8 d-flex align-center"
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
              <div>ID <span>TMT{{ product.productID }}</span> </div>
              <div>Product Price <span>${{ product.productPrice }}</span></div>
              <div>Description <span>{{ product.productDescription }}</span></div>
              <div>Date of Manufacture <span>{{ product.dateOfManufacture }}</span></div>
              <div>Expiration Date <span>{{ product.expirationDate }}</span></div>
              <div>Quantity <span>{{ product.quantity }}</span></div>
              <div>TxHash 
                <span>
                  <a :href="$getScanLink(product.txHash, 'tx')" target="_blank">
                    {{ $shortAddress(product.txHash, 12) }}
                  </a>
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
        </v-card>
        <div class="diary-qr-zone">
          <div style="width: 30%;display: flex;flex-direction: column;">
            <div style="color: #111827;text-align: center;margin-bottom: 20px;font-size: 18px;font-weight: bold">Scan QR to get information of this product</div>
            <qr-code id='qrid' :text="url" />
            <v-btn
              class="mt-5"
              rounded
              dark
              color="#37ab76"
              @click="download"
            >
              <b>Download QRcode</b>
            </v-btn>
            <a id="download" href="" download />
          </div>
          <div class="diary-zone">
            <div class="write-btn">
              <v-btn
                rounded
                dark
                color="#37ab76"
                @click="diaryDialog = true"
              >
                <b>Write diary</b>
              </v-btn>
            </div>
            <v-card
              class="mx-auto basil"
              :align-top="true"
            >
          <v-card-text class="py-0">
            <v-timeline
              v-if="dairyArray.length !== 0"
            >
              <v-timeline-item
                v-for="(item, index) in dairyArray" :key="index"
                color="#37ab76"
                :right="true"
                small
              >
              <div class="d-flex justify-end align-center" slot="opposite">
                <div>
                    <v-avatar v-if="item.role === 'Admin'">
                      <v-img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                      ></v-img>
                    </v-avatar>
                    <v-avatar v-else>
                      <v-img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                      ></v-img>
                    </v-avatar>
                  </div>
                <div class="text-left ml-3">
                    <strong style="color: #3BB77E">
                      {{ item.role }}
                    </strong>
                    <div><b>{{ item.timestamp }}</b></div>
                  </div>
              </div>
                <v-row class="pt-1">
                  <v-col>
                    <div class="text-caption">
                      <div><b>{{ item.timestamp }}</b></div>
                      <i>{{ item.message }}</i><br>
                      <b style="color: #00bcff;cursor: pointer" @click="goToLink(item.txHash, 'tx')">see txHash</b>
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
      <div v-else>
        Not found product
      </div>
    </div>
          <v-dialog
        v-model="diaryDialog"
        width="500px"
      >
        <v-card light style="padding: 10px;text-align: center">
          <div>
            <div class="mb-4"><b style="color: #37ab76;font-size: 18px">Add your product's diary</b></div>
            <v-form
                ref="form"
                v-model="valid"
                style="width: 100%"
                lazy-validation
          >
          <v-text-field
              v-model="role"
              :rules="productRule"
              style="width: 100%"
              label="Your Role"
              required
              outlined
            />
            <v-text-field
              v-model="text"
              :rules="productRule"
              style="width: 100%"
              label="Diary content"
              required
              outlined
            />
          </v-form>
          <div class="text-left">
            <i>EG: 13/5: sow seeds,...</i>
          </div>
          </div>
          <v-card-actions style="flex-direction: column">
            <v-spacer />
            <div style="margin-bottom: 20px" class="action-zone">
              <v-btn
                :disabled="!valid"
                :loading="loadingDiary"
                class="mt-2"
                rounded
                dark
                color="#37ab76"
                @click="writeProductDairy"
              >
                <b>Write Product's Diary</b>
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
    const diary = await axios.get('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/diary.json')
    const dataConverted = []
    const dataDairy = []
    for (const key in data.data) {
      dataConverted.push({ ...data.data[key] })
    }
    for (const key in diary.data) {
      dataDairy.push({ ...diary.data[key] })
    }
    const product = dataConverted.filter(product => product.productID === id)[0]
    const dairyArray = dataDairy.filter(diary => diary.id === id)
    console.log(dairyArray, 'dairyArray')
    return { product, dairyArray, id }
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
    role: 'Admin',
    productRule: [
      v => !!v || 'This field cannot be left blank',
      v => (v && v.length <= 36) || 'Too long'
    ],
    diaryDialog: false,
    loadingDiary: false
  }),
  computed: {
    ...mapGetters('walletStore', [
      'currentAddress'
    ]),
    ...mapGetters('companyStore', [
      'allProduct',
      'companyInfo'
    ]),
    getUrlRandom () {
      return require(`~/assets/image/product/${this.randomNumber()}.svg`)
    }
  },
  mounted () {
    this.url = window.location.href
  },
  methods: {
    randomNumber () {
      const max = 6;
      const min = 1;
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    findCompanyId (productAddress) {
      console.log(this.companyInfo, 'this.companyInfo');
      return this.companyInfo.filter((company) => company.companyAddress === productAddress)
    },
    getDate () {
      const dateObj = new Date()
      const month = dateObj.getUTCMonth() + 1
      const day = dateObj.getUTCDate()
      const year = dateObj.getUTCFullYear()
      return day + '/' + month + '/' + year
    },
    async updateDairy () {
      console.log(this.dairyArray, 'dairyArray')
      const diary = await axios.get('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/diary.json')
      this.dairyArray = []
      const dataDairy = []
      for (const key in diary.data) {
        dataDairy.push({ ...diary.data[key] })
      }
      this.dairyArray = dataDairy.filter(diary => diary.id === this.id)
    },
    async writeProductDairy () {
      this.loadingDiary = true
      if (this.$refs.form.validate()) {
        try {
          const data = await CompanyContract.writeProductDairy(this.id, this.text.toString())
          const params = {
            id: this.id,
            timestamp: this.getDate(),
            message: this.text.toString(),
            role: this.role
          }
          console.log(data, 'data')
          setTimeout(async () => {
            if (data.tx.txHash) {
              this.msg = data.tx.msg
              this.hash = data.tx.txHash
              params.txHash = data.tx.txHash
              this.loadingDiary = false
              this.diaryDialog = false
              this.showSuccessDialog = true
              await axios.post('https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/diary.json', params)
              this.updateDairy()
              this.$refs.form.reset()
              this.role = 'Admin'
            } else {
              this.msg = data.tx.msg
              this.hash = null
              this.loadingDiary = false
              this.diaryDialog = false
              this.showSuccessDialog = true
            }
          }, 2000)
        } catch (e) {
          console.log(e)
          this.msg = 'Something wrong, please try again XD'
          this.hash = null
          this.loadingDiary = false
          this.diaryDialog = false
          this.showSuccessDialog = true
        }
      }
    },
    goToLink (companyAddress, type) {
      const x = this.$getScanLink(companyAddress, type)
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
<style lang="scss">
@import '~/assets/scss/components/company.scss';
#qrid > img {
    margin: auto;
  }
@media screen and (max-width: 960px) {
  .product-detail {
    flex-direction: column;
    align-items: center;
    & > * {
      width: 100%!important;
      text-align: center;
      margin: 20px 0;
      }
  }
}
</style>
