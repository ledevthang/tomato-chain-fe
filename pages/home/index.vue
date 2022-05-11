<template>
  <v-container>
    <div class="products page">
      <div>
        <h2 style="background: #c8e4cc;border-radius: 6px" class="text-center py-6 mb-5">
          <b style="font-family: 'Montserrat-Bold';font-size: 30px;color: #4f5f6e;">
            HOME
          </b>
        </h2>
      </div>
      <companies />
      <products />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Companies from '../../components/company/Companies.vue'
import Products from '../../components/products/Products.vue'

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
<style
    Company lang="sass" scoped>
</style>
