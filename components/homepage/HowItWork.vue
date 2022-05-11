<template>
  <div id="about" style="background: #dcede4 !important" class="about ebet-element">
    <v-container class="about-content">
      <div class="ebet-element__caption">
        <div class="ebet-element__caption-text">
          <span>top products</span>
        </div>
      </div>
      <div class="ebet-element__content">
        <div class="about-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div class="about-features">
          <div v-for="(item, index) in aboutFeature" :key="index" class="about-feature">
            <img :src="require(`~/assets/image/not-found-image.svg`)" alt="">
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
          name: 'Product 1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Product 2',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Product 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Product 4',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        }
      ],
      aboutFeature: [
        {
          name: 'Product 1',
          description: 'Food traceability',
          image: 'company.png'
        },
        {
          name: 'Product 2',
          description: 'The entire life cycle of a product',
          image: 'company.png'
        },
        {
          name: 'Product 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'company.png'
        },
        {
          name: 'Product 4',
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
