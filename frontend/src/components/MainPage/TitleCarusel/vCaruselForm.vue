<template>
    <form class="form">
        <p class="form-title">Получить персональную консультацию</p>

        <div class="input">
            <input type="text" class="form-input" placeholder=" " v-model="name">
            <label class="form-label">
                Вваше имя:
            </label>
        </div>
        <div class="validation_error">
            <transition-group name="list" mode="out-in">
                <p 
                    v-for="err in v$.name.$errors" 
                    :key="err.$uid"
                    class="list-complete-item"
                    >
                    {{ err.$message }}
                </p>
            </transition-group>
        </div>

        <div class="input">
            <input type="tel" class="form-input" placeholder=" " v-model="tel">
            <label class="form-label">
                Вваше номер:
            </label>
        </div>
        <div class="validation_error">
            <transition-group name="list" mode="out-in">
                <p 
                    v-for="err in v$.tel.$errors.slice(0, 1)" 
                    :key="err.$uid"
                    class="list-complete-item"
                    >
                    {{ err.$message }}
                </p>
            </transition-group>
        </div>


        <div class="confirm">
            <div class="checkbox">
                <input type="checkbox" id="checkboxID" hidden v-model="checked"> 
                <label for="checkboxID" class="checkmark"></label>
            </div>
            <p class="checkbock-p">Я даю согласие на обработку персональных данных в соответствии с законом № 152-ФЗ «О персональных данных»</p>
        </div>

        
        <div class="validation_error">
            <transition-group name="list" mode="out-in">
                <p 
                    v-for="err in v$.checked.$errors" 
                    :key="err.$uid"
                    class="list-complete-item"
                    >
                    Нужно ваше согласие на обработку данных
                </p>
            </transition-group>
        </div>

        <my-button class="btn" @click="addEntry()">Оставить заявку</my-button>

        <transition name="fade">
            <div class="message_modal" v-if="showMessage">
                <div class="modal_window">
                    <p class="message_h">Спасибо!</p>
                    <p class="message">Ваша заявка отправлена!</p>
                </div>
            </div>
        </transition>
    </form>
</template>
<script>
import url from '@/url.js'
import MyInput from "@/components/UI/MyInput.vue";
import MyCheckbox from "@/components/UI/MyCheckbox.vue";
import MyButton from "@/components/UI/MyButton.vue";
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, sameAs, maxLength, minLength, numeric } from '@vuelidate/validators'
export default {
    components: { MyInput, MyCheckbox, MyButton,},
    data() {
        return {
            v$: useVuelidate(),
            name: '',
            tel: '',
            checked: false,
            showMessage: false,
        }
    },

    validations() {
        return {
            name: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
            },
            tel: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
                numeric: helpers.withMessage('В номере могут присутствовать только цифры', numeric),
                maxLength: helpers.withMessage("Номер должен быть не больше 12 символов", maxLength(12)),
                minLength: helpers.withMessage("Номер должен быть не меньше 11 символов", minLength(11)),
            },
            checked: {
                sameAs: sameAs(true),
            }
        }
    },

    methods: {
        addEntry() {
            this.v$.$validate();
            if (!this.v$.$error) {
                let request = `${url}/api/consultation?name=${this.name}&phone=${this.tel}`;
                this.$store.dispatch('ADD_CONSULTATION', request);
                this.name = ''
                this.tel = ''
                this.checked = false
                this.v$.$reset();
                this.$emit('showMessage')

            } else {
                console.log('error')
            }
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";

.form {
        position: absolute;
        width: 440px;
        height: fit-content;
        right: 11%;
        top: 25%;
        box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.25);

        background: #FFFFFF;
        border-radius: 6px;
        padding: 30px;

        

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

    .form-title{

    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 60px;


    color: #000000;
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
        position: relative;
        width: 100%;
        height: 100%;
        background:  rgba(0, 0, 0, .15);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1300px) {
        .form {
            right: 7%;
        }
    }

    @media (max-width: 1000px) {
        .form {
            top: 20%;
            width: 420px;
        }
    }

    @media (max-width: 900px) {
        .form {
            top: 15%;
            right: 4%;
        }
    }

    @media (max-width: 800px) {
        .form {
            top: 12%;
            width: 400px;
        }
    }

    @media (max-width: 650px) {
        .form {
            position: relative;
            right: 0;
            width: 100%;
            margin: 0 auto;
            box-shadow: none;
            padding: 15px 10% 60px;
        }

        .form-title{
            
            font-family: "Rubik";
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            margin-bottom: 45px;
        }
    }

    @media (max-width: 600px) {
        .form {
            width: 100%;
            padding: 15px 7% 60px;
        }
    }

    @media (max-width: 500px) {
        .form {
            padding: 15px 5% 50px;
        }
    }
</style>