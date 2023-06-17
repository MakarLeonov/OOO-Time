<template>
    <form class="form">
        
        <my-title class="title">Авторизация</my-title>

        <div class="input">
            <input type="email" class="form-input" placeholder=" " v-model.trim="email">
            <label class="form-label">
                Ваш email:
            </label>
        </div>
        <div class="validation_error">
            <transition-group name="list" mode="out-in">
                <p 
                    v-for="err in v$.email.$errors" 
                    :key="err.$uid"
                    class="list-complete-item"
                    >
                    {{ err.$message }}
                </p>
            </transition-group>
        </div>

        <div class="input">
            <input type="password" class="form-input" placeholder=" " v-model.trim="password">
            <label class="form-label">
                Введите пароль:
            </label>
        </div>
        <div class="validation_error">
            <transition-group name="list" mode="out-in">
                <p 
                    v-for="err in v$.password.$errors" 
                    :key="err.$uid"
                    class="list-complete-item"
                    >
                    {{ err.$message }}
                </p>
            </transition-group>
        </div>

        <div class="links">
            <router-link to="/auth/registration">Ещё нет аккаунта?</router-link>
            <my-button @click="auth()">Авторизоваться</my-button>
        </div>

        <transition name="fade">
            <div class="message_modal" v-if="showMessage">
                <div class="modal_window">
                    <p class="message_h">Ошибка!</p>
                    <p class="message">Проверьте введённые данные!</p>
                </div>
            </div>
        </transition>

    </form>
</template>
<script>
import url from '@/url.js'
import MyTitle from '@/components/UI/MyTitle.vue'
import MyButton from '@/components/UI/MyButton.vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, sameAs, email, minLength } from '@vuelidate/validators'
export default {
    components: {
        MyTitle, MyButton
    },

    data() {
        return {
            v$: useVuelidate(),
            email: '',
            password: '',
            showMessage: false,
        }
    },

    validations() {
        return {
            email: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
                email: helpers.withMessage('Введённая почта должна быть корректной', email),
            },
            password: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
                minLength: helpers.withMessage("Пароль должен быть не меньше 6 символов", minLength(6)),
            },
        }
    },

    methods: {
        auth() {
            this.v$.$validate();
            if (!this.v$.$error) {
                let request = `${url}/api/login?email=${this.email}&password=${this.password}`;
                this.$store.dispatch('LOGIN', request);
                history.back()
            } else {
                this.showMessage = true;
                setTimeout(() => {
                    this.showMessage = false;
                }, 2000);
            }
        },
    },

    mounted() {
        console.log(process.env.NODE_ENV)
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";
    .form {
        width: 500px;

        border-radius: 4px;
        padding: 30px;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;

        .title {
            margin-bottom: 50px;
        }
        .validation_error{ 
            margin-bottom: 30px;
            height: 15px;
            padding: 5px;
            text-align: center;

            & > p {
            color: $red;
            }
        }

        .checkbox-error-message {
            margin-bottom: 20px;
            height: 15px;
            padding: 5px;
            text-align: center;

            & > p {
            color: $red;
            }
        }

        .confirm {
            display: flex;
        }

        .checkbock-p {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            display: flex;
            align-items: center;
            margin-left: 7px;

            color: #000000;
        }

        .btn {
            float: right;
        }

        
    }

.input {
        position: relative;
        
        z-index: 0;
        font-family: 'Rubik';

        .form-label {
        position: absolute;
        font-size: 21px;
        font-weight: 400;
        top: -3px;
        left: 0;
        z-index: -1;
        color: #9e9e9e;
        transition: 0.3s;
        }

        .form-input {
            width: 100%;
            padding: 0 0 5px 2px;
            border: none;
            border-bottom: 2px solid #4f4f4fde ;
            background-color: transparent;
            outline: none;
            transition: .3s;
            font-size: 16px;
            font-weight: 400;
            color: $fon;

            &:focus {
                border-bottom: 2px solid $orange;
            }
        }

        .form-input:focus ~ .form-label,
        .form-input:not(:placeholder-shown) ~ .form-label {
            top: -20px;
            font-size: 17px;
        }
    }

    .checkmark {
        display: block;
        width: 22px;
        height: 22px;
        border: 1px solid rgba(79, 79, 79, 0.8705882353);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;

        transition: all .1s ease-in-out;
    }

    #checkboxID:checked ~ .checkmark {
        background-color: $orange;
        background-color: $fon;
        border: none;
    }

    #checkboxID:checked ~ .checkmark::after {
        font-family: 'FontAwesome';
        content: '\f00c';
        color: #fff;
        font-size: 15px;
    }


    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }

    .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    a, a:hover {
        display: flex;
        justify-content: space-between;
        gap: 5px;

        font-family: "Rubik", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: $orange;
        
        &:hover {
            @extend %linkshover;
        }
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

    
.message_modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    z-index: 5;
}

.modal_window {
        width: 460px;
        height: 250px;
        background: #fff;
        box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .message_h {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 26px;
        text-align: center;
        margin-bottom: 5px;
    }
    .message {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        margin-bottom: 5px;
    }

    
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }
    
    @media (max-width: 500px) {
        .modal_window {
            width: 85%;
            height: 200px;
            border-radius: 7px;
        }

        .message_h {
            font-size: 33px;
        }

        .message {
            font-size: 20px;
        }
    }

    @media (max-width: 430px) {
        .modal_window {
            width: 85%;
            height: 190px;
        }
    }

        @media (max-width: 400px) {
            .links {

                align-items: flex-end;
                flex-direction: column-reverse;
                gap: 30px;

                
            }

            .links > a {
                display: block;
                width: 100%;
                text-align: center;
            }
        }

    @media (max-width: 370px) {
        .modal_window {
            width: 90%;
            height: 180px;
            border-radius: 7px;
        }

        .message_h {
            font-size: 32px;
        }

        .message {
            font-size: 19px;
        }
    }
</style>