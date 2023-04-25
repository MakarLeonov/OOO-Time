<template>
    <form class="form">
        <p class="form-title">Получить персональную консультацию</p>

        <my-input @value="(value) => this.name = value">Вваше имя:</my-input>
        <div class="validation_error">
            <p>Это поле обязательно для заполнения!!!!!!!!</p>
        </div>

        <my-input>Ваш email:</my-input>
        <div class="validation_error">
            <p>Это поле обязательно для заполнения!!!!!!!!</p>
        </div>
        
        <div class="confirm">
            <my-checkbox />
            <p class="checkbock-p">Я даю согласие на обработку персональных данных в соответствии с законом № 152-ФЗ «О персональных данных»</p>
        </div>

        <my-button class="btn">Оставить заявку</my-button>

    </form>
</template>
<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyCheckbox from "@/components/UI/MyCheckbox.vue";
import MyButton from "@/components/UI/MyButton.vue";
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
export default {
    components: { MyInput, MyCheckbox, MyButton,},
    data() {
        return {
            v$: useVuelidate(),
            name: '',
            email: '',
        }
    },

    validations() {
        return {
            name: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required)
            },
            email: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required)
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";

.form {
        position: absolute;
        width: 450px;
        left: 1189px;
        top: 25%;
        box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.25);

        background: #FFFFFF;
        border-radius: 4px;
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

        .confirm {
            display: flex;
            margin-bottom: 20px;
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
    
</style>