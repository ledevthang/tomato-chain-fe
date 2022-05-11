<template>
  <div id="about" class="about ebet-element">
    <v-container class="about-content">
      <div class="ebet-element__caption">
        <div class="ebet-element__caption-text">
          <span>top 4 companies</span>
        </div>
        <!-- <div class="underlined">
          <hr>
          <hr>
        </div> -->
      </div>
      <div class="ebet-element__content">
        <div class="about-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div class="about-features">
          <div v-for="(item, index) in aboutFeature" :key="index" class="about-feature">
            <img :src="require(`~/assets/image/${item.image}`)" alt="">
            <div>
              <b>{{ item.name }}</b>
            </div>
            <div class="about-feature__description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      aboutFeature: [
        {
          name: 'Company 1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Company 2',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Company 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Company 4',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        }
      ],
      aboutFeature: [
        {
          name: 'Company 1',
          description: 'Food traceability',
          image: 'company.png'
        },
        {
          name: 'Company 2',
          description: 'The entire life cycle of a product',
          image: 'company.png'
        },
        {
          name: 'Company 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Company 4',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/components/about.scss';
</style>
