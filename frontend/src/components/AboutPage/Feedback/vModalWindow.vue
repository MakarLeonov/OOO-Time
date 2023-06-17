<template>
    <div class="modal" @keyup.ctrl.enter="sendFeedback()">
        <div class="modal-window" v-if="this.$store.getters.authorized">
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
                <div class="validation_error">
                    <transition-group name="list" mode="out-in">
                        <p 
                            v-for="err in v$.author.$errors" 
                            :key="err.$uid"
                            class="list-complete-item"
                            >
                            {{ err.$message }}
                        </p>
                    </transition-group>
                </div>

                <div class="form-group mb">
                    <p class="label">Ваша оценка: </p>
                        <my-select :options="rating_types" @changeOption="(value) => rating = value" class="select"/> 
                </div>

                <div class="form-group">
                    <p class="label">Ваш отзыв: </p>
                    <textarea class="textarea" v-model="feedback"></textarea>
                </div>
                <div class="validation_error">
                    <transition-group name="list" mode="out-in">
                        <p 
                            v-for="err in v$.feedback.$errors" 
                            :key="err.$uid"
                            class="list-complete-item"
                            >
                            {{ err.$message }}
                        </p>
                    </transition-group>
                </div>
                <my-button @click="sendFeedback()">Оставить отзыв</my-button>
            </div>
        </div>
        <div class="unauthorized-message-window" v-else>
            <div class="close" @click="this.$store.commit('changeFeedbackModalWindowstatus')">
                <img src="@/assets/img/icons/close.png" alt="close" class="close-img">
            </div>
            <div class="message">
                <p>Чтобы оставить свой отзыв необходимо <span @click="$router.push('/auth')">авторизоваться</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import url from '@/url.js'
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, maxLength } from '@vuelidate/validators'
export default {
    name: 'v-modal-window',
    components: {
        MyButton, MySelect
    },

    data() {
        return {
            v$: useVuelidate(),
            author: (localStorage.length > 0) ? JSON.parse(localStorage.getItem('user')).name : '',
            rating: 5,
            feedback: '',
            rating_types: [
            {id: 5, name: '⭐⭐⭐⭐⭐'},
            {id: 4, name: '⭐⭐⭐⭐'},
            {id: 3, name: '⭐⭐⭐'},
            {id: 2, name: '⭐⭐'},
            {id: 1, name: '⭐'},
            ]
        }
    },

    validations() {
        return {
            author: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
                maxLength: helpers.withMessage("Название не должно превышать 40 символов", maxLength(40)),
            },
            feedback: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
            }
        }
    },

    methods: {
        sendFeedback() {
            this.v$.$validate();
            if (!this.v$.$error) {
                let date = new Date()
                let request = `${url}/feedback?author=${ this.author }&rating=${ this.rating }&feedback_text=${ this.feedback }&date=${ date.toISOString().split('T')[0] }`;
                this.$store.dispatch('ADD_FEEDBACK', request);
                this.$store.commit('changeFeedbackModalWindowstatus')
            }

            
        }
    },

    mounted() {
        if (this.$store.getters.user) {
            this.author = this.$store.getters.user.name;
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";
    .modal {
        z-index: 4;
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
        width: 670px;

        background: #FFFFFF;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
        padding: 25px 25px 0;
    }

    .unauthorized-message-window {
        width: 370px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        background: #FFFFFF;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
        align-items: flex-end;
    }

    .message {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & > p {
            font-family: "Rubik";
            font-style: normal;
            font-weight: 400;
            font-size: 21px;
            line-height: 23px;
            color: #454545;

            & > span:hover {  
                @extend %linkshover;
            }

            & > span {  
                @extend %linkshover;
            }
        }
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
        margin-left: 8px;
        margin-bottom: 6px;
        padding-left: 10px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;

        color: #A3A2A0;
    }

    .textarea {
        width: 400px;
        min-height: 150px;
        max-height: 150px;
        border: 1px solid #CDCDCD;
        border-radius: 3px;
        margin-left: 30px;
        margin-bottom: 6px;

        padding: 10px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;

        color: #A3A2A0;
    }

    .button {
        margin-top: 5px;
    }

    .validation_error{ 
        width: 100%;
        margin-bottom: 15px;
        height: 10px;
        // padding: 5px;
        text-align: right;

        transition: all .2s;

        & > p {
        color: $red; 
        }
    }

    .mb {
        margin-bottom: 20px;
    }

    .select {
        margin-bottom: 5px;
        margin-left: 5px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }



    .list-enter-from,
    .list-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    }


    .list-complete-item {
    transition: all .13s ease-in;
    display: inline-block;
    }
    .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(10px);
    }
    .list-complete-leave-active {
    position: absolute;
    }

    @media (max-width: 730px) {
        .modal-window {
            width: 600px;
        }

        .modal-window-body {
            padding: 45px 40px 45px 40px;   
        }
        .form-group {
            flex-wrap: wrap;
            width: 100%;
        }

        .label {
            margin-top: 10px;
            font-size: 20px;
            width: 100%;
        }

        .input {
            width: 100%;
            height: 50px;
            margin-bottom: 5px;
            margin-left: 0;
        }

        .textarea {
            width: 100%;
            margin-left: 0;
        }

        .validation_error{ 
            margin-bottom: 10px;
            text-align: center;
        }

        .select{
            margin-left: 0;
            width: 100%;
        }
    }

    @media (max-width: 650px) {
        .modal-window {
            width: 90%;
        }

        .modal-window-body {
            padding: 20px 20px 20px 20px;
        }
    }

    @media (max-width: 550px) {
        .modal-window {
            width: 90%;
        }

        .modal-window-body {
            padding: 15px 10px 20px 10px;
        }

        .title {
            font-size: 22px;
        }

        .label {
            margin-top: 7px;
            font-size: 18px;
        }

        .unauthorized-message-window {
            width: 330px;
        }

        .message > p {
            font-size: 20px;
        }

    }

    @media (max-width: 450px) {
        .modal-window {
            width: 95%;
        }

        .modal-window-body {
            padding: 15px 0 10px;
        }

        .title {
            font-size: 22px;
        }

        .label {
            margin-top: 7px;
            font-size: 18px;
        }

        .validation_error > p {
            font-size: 15px;
        }
    }

    @media (max-width: 360px) {
        .modal-window {
            width: 97%;
        }

        .label {
            margin-top: 7px;
            font-size: 18px;
        }

        .validation_error > p {
            font-size: 14px;
        }
    }
    
</style>