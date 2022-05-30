<template>
  <div id="about" class="about ebet-element">
    <v-container class="about-content">
      <div class="ebet-element__caption">
        <div class="ebet-element__caption-text">
          <span>top 3 companies</span>
        </div>
      </div>
      <div class="ebet-element__content">
        <div class="about-description">
          There are numerous firms providing the same or similar set of products/services and this has given rise to a need - the need to be different. In our commitment to deliver top notch services to our clients, we measure every delivery step down to the minutest details. We take pride in sharing with you, a few of our differentiators.
        </div>
        <div v-if="allCompany" class="about-features">
          <custom-card-avatar
            v-for="(item, index) in allCompany.slice(0, 3)"
            :key="index"
            :item="item"
            :type="'about'"
            :current-address="currentAddress"
            :total-product="totalProduct(item.companyName)"
            class="custom-card"
          />
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CustomCardAvatar from '../common/CustomCardAvatar.vue'
export default {
  components: { CustomCardAvatar },
  data () {
    return {
      aboutFeature: [
        {
          name: 'Company 1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Company 2',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Company 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Company 4',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        }
      ],
      aboutFeature: [
        {
          name: 'Company 1',
          description: 'Food traceability',
          image: 'company.png'
        },
        {
          name: 'Company 2',
          description: 'The entire life cycle of a product',
          image: 'company.png'
        },
        {
          name: 'Company 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Company 4',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('walletStore', [
      'currentAddress'
    ]),
    ...mapGetters('companyStore', [
      'allCompany',
      'companyInfo',
      'allProduct'
    ])
  },
  methods: {
    totalProduct (companyName) {
      if (this.allProduct) {
        return this.allProduct.filter((item) => item.companyName === companyName).length
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/components/about.scss';
</style>
