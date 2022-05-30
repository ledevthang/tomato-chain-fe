<template>
  <v-container>
    <div class="products page">
      <div style="display: flex;justify-content: space-between;align-items: center" class="hidden-sm-and-down">
        <div style="width: 50%">
          <img src="https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/e406b9f1-a89c-4a74-a15d-52d825ef6760.png" alt="">
        </div>
        <qrcode-drop-zone @detect="onDetect" @dragover="onDragOver" @init="logErrors">
          <div class="drop-area" :class="{ 'dragover': dragover }">
            DROP QR IMAGE HERE TO SEE PRODUCT INFORMATION
          </div>
        </qrcode-drop-zone>
      </div>
      <div class="hidden-md-and-up">
        <qrcode-stream @decode="onDecode" @init="onInit" />
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { QrcodeStream, QrcodeDropZone } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeStream,
    QrcodeDropZone
  },
  data () {
    return {
      result: '',
      error: '',
      dragover: false
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
        const index = newVal.indexOf('/product/')
        const result = newVal.slice(index, newVal.length)
        console.log(index, newVal.length)
        this.$router.push(result)
        // window.location.replace(result)
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
    logErrors (promise) {
      promise.catch(console.error)
    },

    onDragOver (isDraggingOver) {
      this.dragover = isDraggingOver
    },
    async onDetect (promise) {
      try {
        const { content } = await promise

        this.result = content
        this.error = null
      } catch (error) {
        if (error.name === 'DropImageFetchError') {
          this.error = 'Sorry, you can\'t load cross-origin images :/'
        } else if (error.name === 'DropImageDecodeError') {
          this.error = 'Ok, that\'s not an image. That can\'t be decoded.'
        } else {
          this.error = 'Ups, what kind of error is this?! ' + error.message
        }
      }
    },
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
<style lang="scss" scoped>
.drop-area {
  width: 400px;
  height: 400px;
  color: #000;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DEF9EC;
}

.dragover {
  background-color: rgba(0,0,0,.8);
}

.drop-error {
  color: red;
  font-weight: bold;
}
</style>
