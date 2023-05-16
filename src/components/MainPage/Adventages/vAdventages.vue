<template>
    <section>
        <my-title>Наши преимущества</my-title>
        <div class="container">
            <div class="adventages">
                <div class="adventage_item">
                    <img src="@/assets/img/icons/adventage.png" alt="adventage image">
                    <div class="adventage_info">
                        <p class="title">Профессиональные механики</p>
                        <p class="description">В нашем автосервисе работают только профессиональные механики, которые имеют опыт и знания в ремонте автомобилей разных марок и моделей</p>
                    </div>
                </div>
                <div class="adventage_item">
                    <img src="@/assets/img/icons/adventage.png" alt="adventage image">
                    <div class="adventage_info">
                        <p class="title">Профессиональные механики</p>
                        <p class="description">В нашем автосервисе работают только профессиональные механики, которые имеют опыт и знания в ремонте автомобилей разных марок и моделей</p>
                    </div>
                </div>
                <div class="adventage_item">
                    <img src="@/assets/img/icons/adventage.png" alt="adventage image">
                    <div class="adventage_info">
                        <p class="title">Профессиональные механики</p>
                        <p class="description">В нашем автосервисе работают только профессиональные механики, которые имеют опыт и знания в ремонте автомобилей разных марок и моделей</p>
                    </div>
                </div>
                <div class="adventage_item">
                    <img src="@/assets/img/icons/adventage.png" alt="adventage image">
                    <div class="adventage_info">
                        <p class="title">Профессиональные механики</p>
                        <p class="description">В нашем автосервисе работают только профессиональные механики, которые имеют опыт и знания в ремонте автомобилей разных марок и моделей</p>
                    </div>
                </div>
            </div>
            <img src="@/assets/about.jpg" alt="image">
        </div>
    </section>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue";
export default {
    name: "v-adventages",
    components: {
        MyTitle
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

    .container {
        @extend %content-container;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        padding: 20px 0;

        & > img {
            width: 430px;
            // height: 630px;
            border-radius: 5px;
        }
    }

    .adventage_item {
        display: flex;
        margin-bottom: 17px;

        & > img {
            margin: 10px 25px 0 0;
            width: 61px;
            height: 76px;
        }
    }

    .title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 33px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #272727;
        margin-bottom: 3px;
    }

    .description {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;

        color: #494949;
    }
    
</style>