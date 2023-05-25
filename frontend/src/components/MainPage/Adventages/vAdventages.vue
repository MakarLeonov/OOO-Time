<template>
    <section>
        <my-title>Наши преимущества</my-title>
        <div class="container">
            <div class="advantages">
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
export default {
    name: "v-adventages",
    components: {
        MyTitle
    },
    
    mounted() {
        this.$store.dispatch('GET_ADVANTAGES');
    },

    computed: {
        advantages() {
            return this.$store.state.advantages;
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
            // height: 630px;
            border-radius: 5px;
            margin-bottom: 17px;
        }
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
</style>