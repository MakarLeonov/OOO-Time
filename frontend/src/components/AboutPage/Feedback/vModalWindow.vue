<template>
    <div class="modal">
        <div class="modal-window">
            <div class="modal-window-head">
                <p class="title">Оставить свой отзыв</p>
                <div class="close" @click="this.$store.commit('changeFeedbackModalWindowstatus')">
                    <img src="@/assets/img/icons/close.png" alt="close" class="close-img">
                </div>
            </div>
            <div class="modal-window-body">
                <div class="form-group">
                    <p class="label">Ваше имя: </p>
                    <input type="text" class="input" v-model="author">
                </div>
                <div class="form-group">
                    <p class="label">Ваша оценка: </p>
                    <select class="input" v-model="rating">
                        <option value="5">⭐ ⭐ ⭐ ⭐ ⭐</option>
                        <option value="4">⭐ ⭐ ⭐ ⭐</option>
                        <option value="3">⭐ ⭐ ⭐</option>
                        <option value="2">⭐ ⭐</option>
                        <option value="1">⭐</option>
                    </select>
                </div>
                <div class="form-group">
                    <p class="label">Ваш отзыв: </p>
                    <textarea class="textarea" v-model="feedback"></textarea>
                </div>
                <my-button @click="sendFeedback(), this.$store.commit('changeFeedbackModalWindowstatus')">Оставить отзыв</my-button>
            </div>
        </div>
    </div>
</template>
<script>
import MyButton from '@/components/UI/MyButton.vue';
export default {
    name: 'v-modal-window',
    components: {
        MyButton,
    },

    data() {
        return {
            author: '',
            rating: '',
            feedback: '',
        }
    },

    methods: {
        sendFeedback() {

            let date = new Date()
            let url = `http://127.0.0.1:8000/api/feedback?author=${ this.author }&rating=${ this.rating }&feedback_text=${ this.feedback }&date=${ date.toISOString().split('T')[0] }`;

            this.$store.dispatch('ADD_FEEDBACK', url);
        }
    },
    
}
</script>
<style lang="scss" scoped>
    

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(51, 51, 51, .2);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-window {
        width: 710px;
        height: 455px;

        background: #FFFFFF;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
        padding: 25px;
    }

    .modal-window-head {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
    }

    .close {
        width: 30px;
        height: 30px;
        padding: 5px;
        cursor: pointer;
    }

    .modal-window-body {
        padding: 45px 65px 45px 15px;
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .form-group {
        display: flex;
        align-items: top;
    }

    .label {
        margin-top: 10px;
        font-family: 'Rubik';
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;

        color: #757575;
    }

    .input {
        width: 400px;
        height: 50px;
        border: 1px solid #CDCDCD;
        border-radius: 3px;
        margin-left: 30px;
        margin-bottom: 10px;
        padding-left: 10px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;

        color: #A3A2A0;
    }

    .textarea {
        min-width: 400px;
        max-width: 400px;
        min-height: 150px;
        max-height: 150px;
        border: 1px solid #CDCDCD;
        border-radius: 3px;
        margin-left: 30px;
        margin-bottom: 10px;

        padding: 10px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;

        color: #A3A2A0;
    }
</style>