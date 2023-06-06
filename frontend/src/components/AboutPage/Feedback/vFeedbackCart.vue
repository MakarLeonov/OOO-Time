<template>
    <div class="feedback_cart" >
        <div class="feedback_head">
            <img src="@/assets/img/users/user_f.png" alt="user image">
            <div class="feedback_head_info">
                <p class="name">{{ feedbackInfo.author }}</p>
                <p class="stars">
                    <img 
                        :src="getImgUrl(index, feedbackInfo.rating)"
                        alt="⭐"
                        v-for="index in 5" 
                        :key="index">
                </p>
            </div>
        </div>
        <p class="feedback">{{ feedbackInfo.feedback_text }}</p>
        <p class="date">{{ getDate(feedbackInfo.date) }}</p>
    </div>
</template>
<script>
export default {
    props: {
        feedbackInfo: Object,
        required: true,
    },

    methods: {

        getImgUrl(index, rating) {
            if (index <= rating) {
                return require('../../../assets/img/icons/fully_star.png');
            } else {
                return require('../../../assets/img/icons/empty_star.png');
            }
		},

        getDate(date) {
            return date[8] + date[9] + '.' + date[5] + date[6] + '.' + date[0] + date[1] + date[2] + date[3];
        }
    },

}
</script>
<style lang="scss" scoped>

.feedback_cart {
        width: 23.5%;
        // height: fit-content;
        background: #FFFFFF;
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        padding: 21px 23px 10px 23px;
        margin-bottom: 15px;
        transition: all .4s ease;

        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
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
        text-align: justify;

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

    @media (max-width: 1500px) {
        .feedback_cart {
            width: 32%;
        }
    }

    @media (max-width: 1500px) {
        .feedback {
            font-size: 18px;
            line-height: 21px;
        }

        .date {
            font-size: 17px;
        }
    }

    @media (max-width: 1150px) {
        .feedback_head > img[data-v-58a69cd4] {
            width: 78px;
            height: 78px;
        }

        .name {
            font-size: 19px;
        }
    }

    @media (max-width: 1000px) {
        .feedback_cart {
            width: 48%;
        }
    }

    @media (max-width: 810px) {
        .feedback_cart {
            width: 49%;
        }
    }

    @media (max-width: 600px) {
        .feedback_cart {
            width: 90%;
        }
    }
    
</style>