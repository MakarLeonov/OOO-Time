<template>
    <section>
        <my-title>Наши преимущества</my-title>
        <div class="container">
            <div class="loader" v-if="!advantages.length">
                <my-loader />
            </div>
            <div class="advantages" v-else>
                <div class="advantage_item" v-for="(advantage, index) in advantages" :key="index" >
                    <img src="@/assets/img/icons/adventage.png" alt="advantage image">
                    <div class="adventage_info">
                        <p class="title">{{ advantage.title }}</p>
                        <p class="description">{{ advantage.description }}</p>
                    </div>
                </div>
            </div>
            <img src="@/assets/about.jpg" alt="image">
        </div>
    </section>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue";
import MyLoader from '@/components/UI/MyLoader.vue';
export default {
    name: "v-adventages",
    components: {
        MyTitle, MyLoader
    },
    
    mounted() {
        this.$store.dispatch('GET_ADVANTAGES');
    },

    computed: {
        advantages() {
            return this.$store.getters.ADVANTAGES;
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

    .container {
        @extend %content-container;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        padding: 20px 0;

        & > img {
            width: 430px;
            border-radius: 5px;
            margin-bottom: 15px;
            transition: .3s ease;
        }
    }

    .loader {
        width: 100%;
        height: 550px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .advantages {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-right: 10px;
    }

    .advantage_item {
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
        font-size: 22px;
        line-height: 28px;

        color: #494949;
    }

    @media (max-width: 1600px){
        .title {
            font-size: 27px;
        }

        .description {
            font-size: 21px;
        }

        .container > img {
            width: 400px;
        }
    }

    @media (max-width: 1460px){
        .title {
            font-size: 26px;
        }

        .description {
            font-size: 20px;
        }

        .container > img {
            width: 380px;
        }

        .advantage_item > img {
            margin: 10px 22px 0 0;
            width: 59px;
            height: 73px;
        }
    }

    @media (max-width: 1350px){
        .title {
            font-size: 25px;
        }

        .description {
            font-size: 19px;
        }

        .container > img {
            width: 370px;
        }
    }

    @media (max-width: 1300px){
        .title {
            font-size: 26px;
        }

        .description {
            font-size: 20px;
        }

        .container > img {
            width: 380px;
        }

        .advantage_item > img {
            margin: 10px 22px 0 0;
            width: 59px;
            height: 73px;
        }
    }

    @media (max-width: 1000px){
        .title {
            font-size: 25px;
            text-align: left;
        }

        .description {
            font-size: 20px;
            line-height: 25px;
        }

        .advantage_item > img {
            margin: 0px 12px 0 0;
            width: 56px;
            height: 68px;
        }

        .advantage_item {
            margin-bottom: 10px;
            width: 48%;
        }

        .container > img {
            display: none;
        }

        .advantages {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding-right: 0;
            flex-wrap: wrap;
            gap: 10px;
        }
    }

    @media (max-width: 860px){

        .advantage_item {
            margin-bottom: 10px;
            width: 100%;
        }


        .advantages {
            gap: 20px;
            padding: 20px;
        }
    }

    @media (max-width: 780px){

        .advantage_item {
            margin-bottom: 10px;
            width: 100%;
        }


        .advantages {
            gap: 15px;
            padding: 0;
        }
    }

    @media (max-width: 730px){

        .advantage_item {
            margin-bottom: 10px;
            width: 90%;
        }
        .advantages {
            gap: 10px;
            padding: 0;
        }
        .title {
            font-size: 24px;
            text-align: left;
        }
        .description {
            font-size: 18px;
            line-height: 23px;
            text-align: justify;
        }

        .advantage_item > img {
            width: 54px;
            height: 65px;
        }
    }

    @media (max-width: 630px){
        .advantage_item {
            margin-bottom: 10px;
            width: 100%;
        }
    }

    @media (max-width: 530px){
        .advantage_item {
            margin-bottom: 10px;
            width: 95%;
        }

        .title {
            font-size: 21px;
            text-align: left;
        }

        .description {
            font-size: 17px;
            line-height: 19px;
        }
    }

    @media (max-width: 490px){

        .advantage_item {
            margin-bottom: 10px;
            width: 100%;
        }
    }

    @media (max-width: 450px){

        .advantages {
            gap: 3px;
        }
        .advantage_item {
            margin-bottom: 10px;
            width: 95%;
        }
        .advantage_item > img {
            height: 52px;
        }

        .title {
            font-size: 19px;
            line-height: 24px;
        }

        .description {
            font-size: 15px;
            line-height: 17px;
        }

        .advantage_item > img {
            width: 50px;
            height: 59px;
        }
    }

    @media (max-width: 410px){

        .advantages {
            gap: 0;
        }
    }
</style>