<template>
    <div class="custom-card-product custom-card" @click="$router.push('/product/' + item.productID)">
        <div>
            <img :src="getUrlRandom" alt="">
        </div>
        <div class="info-zone">
            <div>{{ item.productName }}</div>
            <div>{{ item.companyName }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        currentAddress: {
            type: String
        },
        totalProduct: {
            type: Number
        },
        type: {
            type: String
        }
    },
    computed: {
        getUrlRandom () {
            return require(`~/assets/image/product/${this.randomNumber()}.svg`);
        }
    },
    methods: {
        randomNumber () {
            const max = 6;
            const min = 1;
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }
}
</script>