<template>
  <div class="create-product page">
    <div class="hidden-sm-and-down">
      <img src="https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg" alt="">
    </div>
    <div>
      <create-product />
    </div>
  </div>
  </v-container>
</template>

<script>
import CreateProduct from '../../components/products/CreateProduct.vue'

export default {
  components: {
    CreateProduct
  }
}
</script>
<style lang="sass" scoped>
.create-product
  display: flex
  justify-content: space-between
  & > div
    width: 50%
    padding: 20px
    @media screen and (max-width: 960px)
      width: 100%
</style>
