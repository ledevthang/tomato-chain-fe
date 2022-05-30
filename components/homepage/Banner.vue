<template>
  <div class="banner">
    <div>
      <img style="filter: brightness(60%);" src="~/assets/image/about-us-banner.svg" alt="">
    </div>
    <v-container class="banner-content">
      <div class="banner-content__caption">
        The Food Supply Chain
      </div>
      <div class="banner-content__sub-caption">
        For the traceability of your products from origin to final consumer
      </div>
      <v-btn outlined rounded large style="color: #fff;text-decoration: none;padding: 0 30px" @click="$router.push('/register')">
        Register now
      </v-btn>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/scss/components/banner.scss";
</style>
