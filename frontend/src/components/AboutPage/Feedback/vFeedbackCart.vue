<template>
    <div class="feedback_cart" >
        <div class="feedback_head">
            <img src="@/assets/img/users/user_f.png" alt="user image">
            <div class="feedback_head_info">
                <p class="name">{{ feedbackInfo.author }}</p>
                <p class="stars">
                    <img 
                        src="@/assets/img/icons/fully_star.png" 
                        alt="⭐"
                        v-for="(star, index) in feedbackInfo.rating" 
                        :key="index">
                </p>
            </div>
        </div>
        <p class="feedback">{{ feedbackInfo.feedback_text }}</p>
        <p class="date">{{ feedbackInfo.date }}</p>
    </div>
</template>
<script>
export default {
    props: {
        feedbackInfo: Object,
        required: true,
    }
}
</script>
<style lang="scss" scoped>

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
    
</style>