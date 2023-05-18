<template>
    <section class="container">
        <my-title>Отзывы клиентов</my-title>
        <p class="feedback_p">Благодарные отзывы наших клиентов - лучшее подтверждение высокого качества наших работ</p>
        <div class="feedback_list">
            <div class="feedback_cart">
                <div class="feedback_head">
                    <img src="@/assets/img/users/user_f.png" alt="user image">
                    <div class="feedback_head_info">
                        <p class="name">Александра</p>
                        <p class="stars">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                        </p>
                    </div>
                </div>
                <p class="feedback">Отличный автосервис! Мастер быстро заменил колодки и исправил вмятину на двери. Отдали за всё всего лишь 2 тыс. <br> В общем, всем советую✌</p>
                <p class="date">22.03.2023</p>
            </div>
            <div class="feedback_cart">
                <div class="feedback_head">
                    <img src="@/assets/img/users/user_f.png" alt="user image">
                    <div class="feedback_head_info">
                        <p class="name">Александра</p>
                        <p class="stars">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                        </p>
                    </div>
                </div>
                <p class="feedback">Отличный автосервис! Мастер быстро заменил колодки и исправил вмятину на двери. Отдали за всё всего лишь 2 тыс. <br> В общем, всем советую✌</p>
                <p class="date">22.03.2023</p>
            </div>
            <div class="feedback_cart">
                <div class="feedback_head">
                    <img src="@/assets/img/users/user_f.png" alt="user image">
                    <div class="feedback_head_info">
                        <p class="name">Александра</p>
                        <p class="stars">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                        </p>
                    </div>
                </div>
                <p class="feedback">Отличный автосервис! Мастер быстро заменил колодки и исправил вмятину на двери. Отдали за всё всего лишь 2 тыс. <br> В общем, всем советую✌</p>
                <p class="date">22.03.2023</p>
            </div>
            <div class="feedback_cart">
                <div class="feedback_head">
                    <img src="@/assets/img/users/user_f.png" alt="user image">
                    <div class="feedback_head_info">
                        <p class="name">Александра</p>
                        <p class="stars">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                            <img src="@/assets/img/icons/fully_star.png" alt="⭐">
                        </p>
                    </div>
                </div>
                <p class="feedback">Отличный автосервис! Мастер быстро заменил колодки и исправил вмятину на двери. Отдали за всё всего лишь 2 тыс. <br> В общем, всем советую✌</p>
                <p class="date">22.03.2023</p>
            </div>
        </div>
        <my-button class="button" @click="this.$store.commit('changeFeedbackModalWindowstatus')">Оставить отзыв</my-button>
    </section>
</template>
<script>
import MyTitle from '@/components/UI/MyTitle.vue';
import MyButton from '@/components/UI/MyButton.vue';

export default {
    name: 'v-feedback-list',
    components: {
        MyTitle, MyButton
    }
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

    .feedback_cart {
        width: 360px;
        height: fit-content;
        background: #FFFFFF;
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        padding: 21px 23px 10px 23px;
        margin-bottom: 15px;
    }

    .feedback_head {
        display: flex;
        align-items: center;

        & > img {
            width: 88px;
            height: 88px;
            margin-right: 10px;
        }
    }

    .name {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        color: #272727;
    }

    .stars {
        display: flex;
        gap: 3px;
    }

    .feedback {
        margin: 13px 0 20px;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;

        color: #454545;
    }

    .date {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        text-align: right;

        color: #454545;
    }

    .button {
        align-self: flex-end;
    }
    
</style>