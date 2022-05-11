<template>
  <div class="index">
    <banner />
    <about />
    <how-it-work />
  </div>
</template>

<script>
import Banner from '~/components/homepage/Banner'
import About from '~/components/homepage/About'
import HowItWork from '~/components/homepage/HowItWork'

export default {
  components: {
    Banner,
    About,
    HowItWork
  }
  // beforeCreate () {
  //   this.$router.push('/bet')
  // }
}
</script>
