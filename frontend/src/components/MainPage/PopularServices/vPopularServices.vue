<template>
    <section>
        <my-title>Популярные виды услуг</my-title>
        <div class="container">
            <my-loader v-if="!SERVICE.length"/>
            <v-service-item v-for="(service, index) in POPULAR_SERVICE.slice(0, 8)" :key="index" :id="service.id">
                {{ service.name }}
            </v-service-item>
        </div>
    </section>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue"
import vServiceItem from "@/components/MainPage/PopularServices/vServiceItem.vue";
import MyLoader from '@/components/UI/MyLoader.vue';
export default {
    name: 'vPopularServices',
    components: {
        MyTitle, vServiceItem, MyLoader
    },

    computed: {
        SERVICE() {
            return this.$store.getters.SERVICE;
        },

        POPULAR_SERVICE() {
            return this.SERVICE.filter((service) => {
                return (service.is_popular === 1) ? true : false;
            })
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';    
.container {
        @extend %content-container;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 10px;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    

    @media (max-width: 940px) {
        .title {
            font-size: 19px !important;
        }
    }

    @media (max-width: 920px) {
        .title {
            font-size: 18px !important;
        }

        .item {
            margin-bottom: 12px;
            padding: 22px;
        }
    }

    @media (max-width: 800px) {
        .title {
            font-size: 16px !important;
        }

        .item {
            margin-bottom: 0;
            padding: 20px;
        }

        .container {
            margin-top: 5px;
        }
    }

    @media (max-width: 750px) {
        .item {
            padding: 15px;
        }
    }

    @media (max-width: 700px) {
        .item {
            width: 32%;
        }
    }

    @media (max-width: 500px) {
        .item {
            width: 50% ;
        }
    }

    @media (max-width: 350px) {
        .item {
            width: 85%;
        }

        .container {
            display: flex;
            justify-content: center;
        }
    }
</style>