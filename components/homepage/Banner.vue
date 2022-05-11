<template>
  <div class="banner">
    <div>
      <img src="https://trace.icheck.vn/frontendv3/assets/images/new/slider-bg.png" alt="">
    </div>
    <v-container class="banner-content">
      <div class="banner-content__caption">
        The Food Supply Chain
      </div>
      <div class="banner-content__sub-caption">
        For the traceability of your products from origin to final consumer
      </div>
      <v-btn outlined large style="color: #fff;text-decoration: none" @click="$router.push('/register')">
        Register now!
      </v-btn>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/scss/components/banner.scss";
</style>
