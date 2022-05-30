<template>
    <div class="section">
    <div>
        <div class="columns">
        <div class="column is-4 is-offset-4">
            <div class="card">
                <div v-if="item.companyAddress === currentAddress" class="custom-badges">
                    <span class="custom-badges__content">
                    My company
                    </span>
                </div>
                <div :style="{ 'background-image': 'url(' + require(`~/assets/image/company-banner/${randomNumber()}.svg`) + ')'}" class="header">
                    <div class="avatar">
                    <img :src="getUrlRandom" alt="">
                    </div>
                </div>
                <div class="card-body">
                    <div style="margin-top: 55px" class="d-flex flex-column align-center">
                        <div class="card-title">{{ item.companyName }}</div>
                        <div style="color: #757575;font-size: 13px;margin: 10px 0" class="text-left">
                            {{ item.companyType }}
                        </div>
                        <v-rating
                            :value="0"
                            background-color="#d6d6d6"
                            color="yellow"
                            dense
                            half-increments
                            size="20"
                        />
                    </div>
                    <div v-if="type !== 'about'">
                        <div class="des-row">
                        <div class="d-flex align-center">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.26016 3.50732C6.38016 3.67398 6.46683 3.82732 6.52683 3.97398C6.58683 4.11398 6.62016 4.25398 6.62016 4.38065C6.62016 4.54065 6.5735 4.70065 6.48016 4.85398C6.3935 5.00732 6.26683 5.16732 6.10683 5.32732L5.60016 5.85398C5.52683 5.92732 5.4935 6.01398 5.4935 6.12065C5.4935 6.17398 5.50016 6.22065 5.5135 6.27398C5.5335 6.32732 5.5535 6.36732 5.56683 6.40732C5.68683 6.62732 5.8935 6.91398 6.18683 7.26065C6.48683 7.60732 6.80683 7.96065 7.1535 8.31398C7.5135 8.66732 7.86016 8.99398 8.2135 9.29398C8.56016 9.58732 8.84683 9.78732 9.0735 9.90732C9.10683 9.92065 9.14683 9.94065 9.1935 9.96065C9.24683 9.98065 9.30016 9.98732 9.36016 9.98732C9.4735 9.98732 9.56016 9.94732 9.6335 9.87398L10.1402 9.37398C10.3068 9.20732 10.4668 9.08065 10.6202 9.00065C10.7735 8.90732 10.9268 8.86065 11.0935 8.86065C11.2202 8.86065 11.3535 8.88732 11.5002 8.94732C11.6468 9.00732 11.8002 9.09398 11.9668 9.20732L14.1735 10.774C14.3468 10.894 14.4668 11.034 14.5402 11.2007C14.6068 11.3673 14.6468 11.534 14.6468 11.7207C14.6468 11.9607 14.5935 12.2073 14.4802 12.4473C14.3668 12.6873 14.2202 12.914 14.0268 13.1273C13.7002 13.4873 13.3402 13.7473 12.9335 13.914C12.5335 14.0807 12.1002 14.1673 11.6335 14.1673C10.9535 14.1673 10.2268 14.0073 9.46016 13.6807C8.6935 13.354 7.92683 12.914 7.16683 12.3607C6.40016 11.8007 5.6735 11.1807 4.98016 10.494C4.2935 9.80065 3.6735 9.07398 3.12016 8.31398C2.5735 7.55398 2.1335 6.79398 1.8135 6.04065C1.4935 5.28065 1.3335 4.55398 1.3335 3.86065C1.3335 3.40732 1.4135 2.97398 1.5735 2.57398C1.7335 2.16732 1.98683 1.79398 2.34016 1.46065C2.76683 1.04065 3.2335 0.833984 3.72683 0.833984C3.9135 0.833984 4.10016 0.873984 4.26683 0.953984C4.44016 1.03398 4.5935 1.15398 4.7135 1.32732" stroke="#757575" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            <span class="ml-2">Phone Number:</span>
                        </div>
                        <div>{{ item.companyPhoneNumber }}</div>
                    </div>
                    <div class="des-row">
                        <div class="d-flex align-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6668 8.65398V10.334C14.6668 12.6673 13.3335 13.6673 11.3335 13.6673H4.66683C2.66683 13.6673 1.3335 12.6673 1.3335 10.334V5.66732C1.3335 3.33398 2.66683 2.33398 4.66683 2.33398H11.3335C13.3335 2.33398 14.6668 3.33398 14.6668 5.66732" stroke="#757575" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3332 6L9.2465 7.66667C8.55983 8.21333 7.43317 8.21333 6.7465 7.66667L4.6665 6" stroke="#757575" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            <span class="ml-2">Email:</span>
                        </div>
                        <div>{{ item.companyEmail }}</div>
                    </div>
                    <div class="des-row">
                        <b style="color: #213449">Total Product:</b>
                        <div>{{ totalProduct }}</div>
                    </div>
                    </div>
                    <div style="padding: 40px 0px 30px 0" class="d-flex justify-center">
                        <v-btn
                            class="custom-btn-green"
                            rounded
                            dense
                            @click="item.companyAddress === currentAddress ? $router.push('/company') : $router.push('/company/' + item.companyID)"
                        >
                            <b>
                            See details
                            </b>
                            <v-icon class="ml-1">
                            mdi-arrow-right-bold-circle
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
        </div>
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
            return require(`~/assets/image/company/${this.randomNumber()}.svg`);
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
<style lang="scss" scoped>
    $primary: #7F00FF;
    $secondary: #00D1B2;
    $section: #fff;
    $muted: #999;

    body {
    position: relative;
    height: 100%;
    width: 100%;
    }

    .columns {
    margin-top: 0;
    }

    .section {
    background-color: $section;
    position: relative;
    .card {
        border-radius: 6px;
        overflow:hidden;
        margin: 0 auto;
        .header {
        height: 120px;
        background-size: cover;
        border-radius: 5px 5px 0px 0px;
        .avatar {
            width: 130px;
            height: 100%;
            position: relative;
            margin: 0 auto;
            img {
            display: block;
            border-radius: 50%;
            position: absolute;
            bottom: -63px;
            }
        }
        }
        .card-body {
        padding: 15px;
        .user-meta {
            padding-top: 20px;
            .username {
            font-size: 18px;
            font-weight: 600;
            }
            .position {
            font-size: 90%;
            color: $primary;
            }
        }
        }
        .user-bio {
        padding-top: 8px;
        font-size: 92%;
        color: $muted;
        }
        .action {
        padding-top: 20px;
        .button {
            padding: 16px 20px 16px 20px;
            background: $primary;
            border-color: $primary;
            color: white;
            border-radius: 100px;
            transition: opacity .3s;
            &:hover {
            opacity: 0.7;
            }
        }
        }
    }
    }

    //Css Ninja link
    .link-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $primary;
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .4s;
    img {
        width: 32px;
        height: 32px;
        display: block;
    }
    &:hover {
        transform: scale(1.1) rotate(180deg);
        background: $secondary;
    }
    }
</style>