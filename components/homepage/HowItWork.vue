<template>
  <div id="about" class="about ebet-element">
    <v-container class="about-content">
      <div class="ebet-element__caption">
        <div class="ebet-element__caption-text">
          <span>top products</span>
        </div>
      </div>
      <div class="ebet-element__content">
        <div class="about-description">
          There are numerous firms providing the same or similar set of products/services and this has given rise.
        </div>
        <div class="about-features">
          <custom-card-product
            v-for="(item, index) in allProduct.slice(0, 6)"
            :key="index"
            :item="item"
            :type="'about'"
            :current-address="currentAddress"
          />
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CustomCardProduct from '../common/CustomCardProduct.vue'
export default {
  components: { CustomCardProduct },
  data () {
    return {
      aboutFeature: [
        {
          name: 'Product 1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Product 2',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Product 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Product 4',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        }
      ],
      aboutFeature: [
        {
          name: 'Product 1',
          description: 'Food traceability',
          image: 'company.png'
        },
        {
          name: 'Product 2',
          description: 'The entire life cycle of a product',
          image: 'company.png'
        },
        {
          name: 'Product 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Product 4',
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
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/components/about.scss';
</style>
