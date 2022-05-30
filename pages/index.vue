<template>
  <div class="home">
    <div class="banner">
      <div>
        <img src="~/assets/image/home-banner.svg" alt="">
      </div>
      <v-container class="banner-content">
        <div class="banner-content__caption">
          1000 rate Program
          support 30000 business households
          traceability method.
        </div>
        <div class="banner-content__sub-caption">
          Accept donations. Start a membership. Sell anything you like. 
It’s easier than you think. 
        </div>
        <v-btn outlined large rounded style="color: #fff;text-decoration: none" @click="$router.push('/register')">
          Register now
        </v-btn>
      </v-container>
    </div>
    <!-- <v-container> -->
      <div class="products page">
        <companies />
        <products />
      </div>
    <!-- </v-container> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Companies from '~/components/company/Companies.vue'
import Products from '~/components/products/Products.vue'

export default {
  components: {
    Products,
    Companies
  },
  computed: {
    ...mapGetters('companyStore', [
      'triggerUpdate'
    ])
  },
  mounted () {
    if (this.triggerUpdate !== 0) {
      this.changeTriggerUpdate()
    }
  },
  methods: {
    ...mapActions('companyStore', [
      'changeTriggerUpdate'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/components/banner.scss";
.banner {
  background: unset;
  @media screen and (max-width: 599px) {
    display: none;
  }
  .banner-content {
    padding-right: 20%;
    text-align: unset;
    & > div:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>