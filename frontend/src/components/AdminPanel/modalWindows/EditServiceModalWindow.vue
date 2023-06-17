<template>
    <div class="modal" @keyup.ctrl.enter="addEntry()">
        <div class="modal-window">
            <div class="modal-window-head">
                <p class="title">Таблица "Виды услуг"</p>
                <div class="close" @click="this.$store.commit('EditServiceModalWindow')">
                    <img src="@/assets/img/icons/close.png" alt="close" class="close-img">
                </div>
            </div>
            <div class="modal-window-body">

                <div class="form-group">
                    <p class="label">Название: </p>
                    <input type="text" class="input" v-model.trim="title">
                </div>
                <div class="validation_error">
                    <transition-group name="list" mode="out-in">
                        <p 
                            v-for="err in v$.title.$errors" 
                            :key="err.$uid"
                            class="list-complete-item"
                            >
                            {{ err.$message }}
                        </p>
                    </transition-group>
                </div>

                <div class="form-group">
                    <p class="label">Стоимость: </p>
                    <input type="number" class="input" v-model.trim="cost">
                </div>
                <div class="validation_error">
                    <transition-group name="list" mode="out-in">
                        <p 
                            v-for="err in v$.cost.$errors" 
                            :key="err.$uid"
                            class="list-complete-item"
                            >
                            {{ err.$message }}
                        </p>
                    </transition-group>
                </div>

                <div class="form-group">
                    <p class="label">Вид ремонта: </p>
                    <my-select :options="REPAIR_TYPES" :repair_types_id="repair_types_id" @changeOption="(value) => repair_types_id = value" class="select" />
                </div>
                <div class="validation_error">
                    <transition-group name="list" mode="out-in">
                        <p 
                            v-for="err in v$.repair_types_id.$errors" 
                            :key="err.$uid"
                            class="list-complete-item"
                            >
                            {{ err.$message }}
                        </p>
                    </transition-group>
                </div>

                <div class="form-group-2">
                    <p class="label">Эта услуга популярна? </p>
                    <div class="checkbox">
                        <input type="checkbox" id="checkboxID" hidden v-model="checked"> 
                        <label for="checkboxID" class="checkmark"></label>
                    </div>                
                </div>

                <div class="form-group">
                    <p class="label">Описание: </p>
                    <textarea class="textarea" v-model.trim="description"></textarea>
                </div>
                <div class="validation_error">
                    <transition-group name="list" mode="out-in">
                        <p 
                            v-for="err in v$.description.$errors" 
                            :key="err.$uid"
                            class="list-complete-item"
                            >
                            {{ err.$message }}
                        </p>
                    </transition-group>
                </div>
                <my-button @click="addEntry()" class="button">Редактировать запись</my-button>
            </div>
        </div> 
    </div>
</template>
<script>
import url from '@/url.js'
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue'
import MyCheckbox from '@/components/UI/MyCheckbox.vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, maxLength, sameAs } from '@vuelidate/validators'
export default {
    components: {
        MyButton, MySelect, MyCheckbox
    },

    props: {
        item: Object,
    },

    data() {
        return {
            v$: useVuelidate(),
            title: this.item.name,
            description: this.item.description,
            cost: this.item.cost,
            repair_types_id: this.item.repair_types_id,
            checked: this.isChecked(this.item.repair_types_id),
        }
    },

    validations() {
        return {
            title: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
                maxLength: helpers.withMessage("Название не должно превышать 40 символов", maxLength(40)),
            },
            cost: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
                maxLength: helpers.withMessage("Цена не может превышать 6 символов", maxLength(6)),
            },
            repair_types_id: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
            },
            description: {
                required: helpers.withMessage('Это поле обязательно для заполнения', required),
            }
        }
    },

    methods: {
        addEntry() {
            this.v$.$validate();
            if (!this.v$.$error) {
                let request = `${url}/api/service/${this.item.id}?name=${this.title}&cost=${this.cost}&is_popular=${this.is_popular}&repair_types_id=${this.repair_types_id}&description=${this.description}`;
                this.$store.commit('EditServiceModalWindow');
                this.$store.dispatch('EDIT_SERVICE_ENTRY', request);
            }
        },

        isChecked(is_popular) {
            return (is_popular === 1) ? false : true;
        }
    },

    computed: {
        REPAIR_TYPES() {
            return this.$store.getters.REPAIR_TYPES;
        },

        is_popular() {
            return (this.checked) ? 1 : 0;
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";

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

    .form-group-2 {
        display: flex;
        align-items: flex-end;
        align-items: center;
        width: 100%;
        gap: 15px;
        margin-bottom: 10px;

        & > .label {
            margin-top: 0;
        }
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
        margin-bottom: 6px;
        padding: 0 10px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;

        color: #A3A2A0;
    }

    .select {
        width: 400px;
        height: 50px;
        border-radius: 3px;
        margin-left: 30px;
        margin-bottom: 6px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;

        color: #A3A2A0;
    }

    .textarea {
        // min-width: 400px;
        // max-width: 400px;
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
        height: 15px;
        // padding: 5px;
        text-align: right;

        & > p {
        color: $red;
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
        }

        .input {
            width: 100%;
            height: 50px;
            margin-bottom: 10px;
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

        .label[data-v-535f7b4a] {
            margin-top: 7px;
            font-size: 18px;
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