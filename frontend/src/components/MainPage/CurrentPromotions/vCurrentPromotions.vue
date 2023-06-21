<template>
    <section class="container">
        <div><div class="header">
            <my-title class="title">Акции</my-title>
            <my-button class="btn" @click="$router.push('/services'), scrollToTop()">Показать все акции</my-button>
        </div>
        <div class="body">
            <my-loader v-if="!PROMOTIONS.length"/>
            <v-promotion-cart 
                v-for="(promotion, index) in PROMOTIONS.slice(0, 3)" 
                :key="index" 
                :promotion="promotion"
                @click="$router.push('/services')"
            />
        </div></div>
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
        PROMOTIONS() {
            return this.$store.getters.PROMOTIONS;
        }
    },

    methods: {
        scrollToTop() {
            setTimeout(() => {
                window.scrollTo(0,0);
            }, 250);
        }
    },
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
}

.body {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 18px;
    }

@media (max-width: 1050px) {
    .body {
        justify-content: space-around;
        gap: 15px;
    }
}

@media (max-width: 1050px) {
    .body {
        gap: 10px;
    }
}

</style>