<template>
  <v-container>
    <div class="products page">
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeStream
  },
  data () {
    return {
      result: '',
      error: ''
    }
  },
  computed: {
    ...mapGetters('companyStore', [
      'triggerUpdate'
    ])
  },
  watch: {
    result (newVal) {
      if (newVal) {
        window.location.href(newVal)
      }
    }
  },
  mounted () {
    if (this.triggerUpdate !== 0) {
      this.changeTriggerUpdate()
    }
  },
  methods: {
    ...mapActions('companyStore', [
      'changeTriggerUpdate'
    ]),
    onDecode (result) {
      this.result = result
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permission'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
        } else {
          this.error = `ERROR: Camera error (${error.name})`
        }
      }
    }
  }
}
</script>
<style
    Company lang="sass" scoped>
</style>
