<template>
    <div 
        class="section" 
        :style="{height: sectionHeight + 'px'}"
        >
        <div class="caruserl" :style="{height: sectionHeight + 'px'}">
            <div 
                class="carusel-inner" 
                :style="{height: sectionHeight + 'px'}"
                >
                <v-carusel-item
                    v-for="(slide, index) in slides" 
                    :slide="slide"
                    :currentSlide="currentSlide"
                    :index="index"
                    :key="index" 
                    v-show="currentSlide === index"
                ></v-carusel-item>
                <form class="form">
                    <p class="form-title">Получить персональную консультацию</p>

                    <my-input>Вваше имя:</my-input>

                    <my-input>Ваш email:</my-input>
                    
                    <div class="confirm">
                        <my-checkbox />
                        <p class="checkbock-p">Я даю согласие на обработку персональных данных в соответствии с законом № 152-ФЗ «О персональных данных»</p>
                    </div>

                    <my-button class="btn">Оставить заявку</my-button>

                </form>
            </div>
        </div >
    </div>
</template>
<script> 
import vCaruselItem from "@/components/MainPage/vCaruselItem.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyCheckbox from "@/components/UI/MyCheckbox.vue";
import MyButton from "@/components/UI/MyButton.vue";
export default {
    name: 'vTitleCarusel',
    components: { vCaruselItem, MyInput, MyCheckbox, MyButton },
    data() {
        return {
            sectionHeight: 0,
            currentSlide: 0,
            slideInterval: null,

            slides: [
                "img1.jpg",
                "img2.jpg",
                // "img3.jpg",
                "img4.jpg",
                // "img5.jpg",
            ],
        }
    },

    methods: {
        updateSectionHeight(){
            this.sectionHeight = window.innerHeight - 80;
        },

        setCurrentSlide(index) {
            this.currentSlid = index;
        }
    },

    mounted() {
        this.sectionHeight = window.innerHeight - 80;
        this.slideInterval = setInterval(() => {
            // const index = this.currentSlide <= this.slides.length-1 ? this.currentSlide : 0;
            
            if (this.currentSlide <= this.slides.length-2) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
            // this.setCurrentSlide(index);
            // console.log(index)
        }, 5000)
    },

    beforeUnmount() {
        clearInterval(this.slideInterval);
    },

    created() {
        window.addEventListener('resize', this.updateSectionHeight)
    },

    
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";
    * {
        color: #000;
    }

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

        
    }

    .section {
        // background-color: antiquewhite;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .caruserl {
        width: 100%;
        height: fit-content;

        display: flex;
        justify-content: center;

        
    }

    .carusel-inner{
        position: relative;
        height: fit-content;
        width: 100%;
        overflow: hidden;

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

    
</style>