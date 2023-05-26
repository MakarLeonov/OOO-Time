<template>
    <section class="container">
        <div class="header">
            <my-title class="title">Акции</my-title>
            <my-button class="btn">Показать все акции</my-button>
        </div>
        <div class="body">
            <my-loader v-if="!promotions.length"/>
            <v-promotion-cart 
                v-for="(promotion, index) in promotions" 
                :key="index" 
                :promotion="promotion"
                />

        </div>

        {{ upHere }}
    </section>
</template>
<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyTitle from "@/components/UI/MyTitle.vue";
import MyLoader from '@/components/UI/MyLoader.vue';
import vPromotionCart from "@/components/MainPage/CurrentPromotions/vPromotionCart.vue"
export default {
    name: "vCurrentPromotions",
    components: {
        MyButton, MyTitle, MyLoader, vPromotionCart
    },

    computed: {
        promotions() {
            return this.$store.state.promotions;
        }
    },

    mounted() {
        this.$store.dispatch('GET_PROMOTIONS');
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

.container {
    @extend %content-container;
    padding-bottom: 30px;
    
    .header {
        margin-top: 50px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            text-align: left;
            margin-top: 0px;
        }
    }

    .body {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 18px;
    }
}

</style>