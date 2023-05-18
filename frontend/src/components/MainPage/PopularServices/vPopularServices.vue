<template>
    <section>
        <my-title>Популярные виды услуг</my-title>
        <div class="container">

            <v-service-item>Автосервис</v-service-item>
            <v-service-item>Диагностика</v-service-item>
            <v-service-item>Шиномонтаж</v-service-item>
            <v-service-item>Прочие услуги</v-service-item>

            <v-service-item>Автосервис</v-service-item>
            <v-service-item>Диагностика</v-service-item>
            <v-service-item>Шиномонтаж</v-service-item>
            <v-service-item>Прочие услуги</v-service-item>
        </div>
    </section>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue"
import vServiceItem from "@/components/MainPage/PopularServices/vServiceItem.vue";
export default {
    name: 'vPopularServices',
    components: {
        MyTitle, vServiceItem
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