<template>
    <section class="container">
        <my-title>Отзывы клиентов</my-title>
        <p class="feedback_p">Благодарные отзывы наших клиентов - лучшее подтверждение высокого качества наших работ</p>
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
import vFeedbackCart from '@/components/AboutPage/Feedback/vFeedbackCart.vue'

export default {
    name: 'v-feedback-list',
    components: {
        MyTitle, MyButton, vFeedbackCart
    },

    mounted() {
        this.$store.dispatch('GET_FEEDBACK');
    },

    computed: {
        feedback() {
            return this.$store.state.feedback;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .button {
        align-self: flex-end;
    }
    
</style>