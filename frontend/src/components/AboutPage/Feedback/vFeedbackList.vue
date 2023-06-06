<template>
    <section class="container">
        <my-title>Отзывы клиентов</my-title>
        <p class="feedback_p">Благодарные отзывы наших клиентов - лучшее подтверждение высокого качества наших работ</p>
        <my-loader v-if="!feedback.length"/>
        <div class="feedback_list">
            <v-feedback-cart
                v-for="(feedbackInfo, index) in feedback" 
                :key="index"
                :feedbackInfo="feedbackInfo"
            />
        </div>
        <my-button class="button" @click="this.$store.commit('changeFeedbackModalWindowstatus')">Оставить отзыв</my-button>
    </section>
</template>
<script>
import MyTitle from '@/components/UI/MyTitle.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MyLoader from '@/components/UI/MyLoader.vue';
import vFeedbackCart from '@/components/AboutPage/Feedback/vFeedbackCart.vue'

export default {
    name: 'v-feedback-list',
    components: {
        MyTitle, MyButton, vFeedbackCart, MyLoader
    },

    mounted() {
        this.$store.dispatch('GET_FEEDBACK');
    },

    computed: {
        feedback() {
            return this.$store.getters.FEEDBACK;
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

    .container {
        width: 80%;
        margin: 0 auto;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
    }

    .feedback_p {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-align: center;

        color: #000000;

        margin: 15px 0 25px;
    }

    .feedback_list {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .button {
        align-self: flex-end;
    }
    
    @media (max-width: 1750px) {
        .container {
            width: 85%;
        }
    }

    @media (max-width: 1600px) {
        .container {
            width: 90%;
        }
    }

    @media (max-width: 1500px) {
        .container {
            width: 80%;
        }
    }

    @media (max-width: 1230px) {
        .container {
            width: 85%;
        }
    }

    @media (max-width: 1130px) {
        .container {
            width: 87%;
        }
    }

    @media (max-width: 1080px) {
        .container {
            width: 90%;
        }
    }

    @media (max-width: 1000px) {
        .container {
            width: 75%;
        }
    }

    @media (max-width: 900px) {
        .container {
            width: 80%;
        }
    }

    @media (max-width: 810px) {
        .container {
            width: 82%;
        }
    }

    @media (max-width: 800px) {
        .container {
            width: 83%;
        }
    }

    @media (max-width: 790px) {
        .container {
            width: 84%;
        }
    }

    @media (max-width: 790px) {
        .container {
            width: 84%;
        }
    }

    @media (max-width: 750px) {
        .container {
            width: 86%;
        }
    }

    @media (max-width: 730px) {
        .container {
            width: 88%;
        }
    }

    @media (max-width: 710px) {
        .feedback_p {
            font-size: 19px;
        }
    }

    @media (max-width: 680px) {
        .container {
            width: 90%;
        }
    }

    @media (max-width: 660px) {
        .container {
            width: 92%;
        }
    }

    @media (max-width: 640px) {
        .container {
            width: 94%;
        }
    }

    @media (max-width: 600px) {
        .container {
            width: 94%;
        }
        .feedback_list {
            justify-content: center;
        }
    }

    @media (max-width: 480px) {
        .feedback_p {
            font-size: 18px;
        }
    }
</style>