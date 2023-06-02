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
            <transition name="fade">
                <p v-if="v$.name.$error"> Это поле обязательно для заполнения</p>
            </transition>
        </div>

        <div class="input">
            <input type="tel" class="form-input" placeholder=" " v-model="tel">
            <label class="form-label">
                Вваше номер:
            </label>
        </div>
        <div class="validation_error">
            <transition name="fade">
                <p v-if="v$.tel.$error"> Это поле обязательно для заполнения</p>
            </transition>
        </div>
        
        <div class="confirm">
            <div class="checkbox">
                <input type="checkbox" id="checkboxID" hidden v-model="checked"> 
                <label for="checkboxID" class="checkmark"></label>
            </div>
            <p class="checkbock-p">Я даю согласие на обработку персональных данных в соответствии с законом № 152-ФЗ «О персональных данных»</p>
        </div>

        <div class="checkbox-error-message">
            <transition name="fade">
                <p v-if="v$.checked.$error">Нужно ваше согласие на обработку данных</p>
            </transition>
        </div>

        <my-button class="btn" @click="addEntry()">Оставить заявку</my-button>

    </form>
</template>
<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyCheckbox from "@/components/UI/MyCheckbox.vue";
import MyButton from "@/components/UI/MyButton.vue";
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, sameAs } from '@vuelidate/validators'
export default {
    components: { MyInput, MyCheckbox, MyButton,},
    data() {
        return {
            v$: useVuelidate(),
            name: '',
            tel: '',
            checked: false,
        }
    },

    validations() {
        return {
            name: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
            },
            tel: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required)
            },
            checked: {
                sameAs: sameAs(true)
            }
        }
    },

    methods: {
        addEntry() {
            this.v$.$validate();
            if (!this.v$.$error) {
                let url = `http://127.0.0.1:8000/api/consultation?name=${this.name}&phone=${this.tel}`;
                this.$store.dispatch('ADD_CONSULTATION', url);
                this.name = ''
                this.tel = ''
                this.checked = false
                this.v$.$reset();
                this.$emit('toShowMessage')

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
        left: 1189px;
        top: 25%;
        box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.25);

        background: #FFFFFF;
        border-radius: 6px;
        padding: 30px;

        .form-title{

            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            margin-bottom: 60px;
            

            color: #000000;
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
</style>