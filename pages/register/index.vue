<template>
  <v-container>
    <div class="register page">
      <div class="hidden-sm-and-down">
        <img src="https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/e406b9f1-a89c-4a74-a15d-52d825ef6760.png" alt="">
      </div>
      <div>
        <div>
          <h2 style="background: #c8e4cc;border-radius: 6px" class="text-center py-6 mb-5">
            <b style="font-family: 'Montserrat-Bold';font-size: 30px;color: #4f5f6e;">REGISTER</b>
          </h2>
        </div>
        <register-form />
      </div>
    </div>
  </v-container>
</template>

<script>
import RegisterForm from '../../components/register/RegisterForm.vue'

export default {
  components: {
    RegisterForm
  }
}
</script>
<style lang="sass" scoped>
.register
  display: flex
  justify-content: space-between
  & > div
    width: 50%
    padding: 20px
    @media screen and (max-width: 960px)
      width: 100%
</style>
