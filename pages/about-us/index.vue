<template>
  <div class="index">
    <about />
    <how-it-work />
  </div>
</template>

<script>
import About from '~/components/homepage/About'
import HowItWork from '~/components/homepage/HowItWork'

export default {
  components: {
    About,
    HowItWork
  }
  // beforeCreate () {
  //   this.$router.push('/bet')
  // }
}
</script>