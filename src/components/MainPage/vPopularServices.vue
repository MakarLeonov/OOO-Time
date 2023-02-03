<template>
    <div>
        <my-title>Популярные виды услуг</my-title>
        <div class="container">
            <div class="item">
                <img src="@/assets/img1.png" alt="img">
                <p class="title">Автосервис</p>
            </div>
            <div class="item">
                <img src="@/assets/img1.png" alt="img">
                <p class="title">Диагностика</p>
            </div>
            <div class="item">
                <img src="@/assets/img1.png" alt="img">
                <p class="title">Шиномонтаж</p>
            </div>
            <div class="item">
                <img src="@/assets/img1.png" alt="img">
                <p class="title">Прочие услуги</p>
            </div>
            <div class="item">
                <img src="@/assets/img1.png" alt="img">
                <p class="title">Автосервис</p>
            </div>
            <div class="item">
                <img src="@/assets/img1.png" alt="img">
                <p class="title">Автосервис</p>
            </div>
            <div class="item">
                <img src="@/assets/img1.png" alt="img">
                <p class="title">Автосервис</p>
            </div>
            <div class="item">
                <img src="@/assets/img1.png" alt="img">
                <p class="title">Автосервис</p>
            </div>
        </div>
    </div>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue"
export default {
    name: 'vPopularServices',
    components: {
        MyTitle,
    }
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';    
.container {
        @extend %content-container;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 10px;
    }

    .item {
            
            height: fit-content; 
            width: 24%;
            background-color: #fff;
            // box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.05);
            padding: 28px;
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;

            img {
                // width: 234px;
                // height: 211px;
                width: 100%;
                z-index: 10;
            }

            p {
                font-weight: 400;
                font-size: 20px;
                line-height: 25px;
                text-align: center;
                margin-top: -13px;
                color: #000000;
                z-index: 15;
            }

            &:hover {
                box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.10);
                transition: all .2s;
            }
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
            width: 32% ;
        }
    }

    @media (max-width: 500px) {
        .item {
            width: 48% ;
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