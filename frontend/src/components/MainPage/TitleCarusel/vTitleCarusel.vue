<template>
    <section 
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
                    :sectionHeight="sectionHeight"
                ></v-carusel-item>
                <v-carusel-form @toShowMessage="toShowMessage"/>
                <transition name="fade">
                    <div class="message_modal" v-if="showMessage">
                        <div class="modal_window">
                            <p class="message_h">Спасибо!</p>
                            <p class="message">Ваша заявка отправлена!</p>
                        </div>
                    </div>
                </transition>
            </div>
        </div >
    </section>
</template>
<script> 
import vCaruselItem from "@/components/MainPage/TitleCarusel/vCaruselItem.vue";
import vCaruselForm from '@/components/MainPage/TitleCarusel/vCaruselForm.vue'
export default {
    name: 'vTitleCarusel',
    components: { vCaruselItem, vCaruselForm },
    data() {
        return {
            sectionHeight: 0,
            currentSlide: 0,
            slideInterval: null,
            showMessage: false,

            slides: [
                "fon1.jpg",
                // "fon2.jpg",
                "fon3.jpg",
                // "fon4.jpg",
                // "fon5.jpg",
                // "fon6.jpg",
                // "fon7.jpg",
                "fon8.jpg",
                // "fon9.jpg",
                "fon10.jpg",
            ],
        }
    },

    methods: {
        updateSectionHeight(){
            this.sectionHeight = window.innerHeight - 80;
        },

        setCurrentSlide(index) {
            this.currentSlid = index;
        },

        toShowMessage() {
            this.showMessage = true;
            setTimeout(() => {
                this.showMessage = false;
            }, 2000);
        }
    },

    mounted() {
        this.sectionHeight = window.innerHeight - 80;
        this.slideInterval = setInterval(() => {
            if (this.currentSlide <= this.slides.length-2) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        }, 4000)
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

    

    .section {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .caruserl {
        width: 100%;
        // height: fit-content;

        // display: flex;
        // justify-content: center;
    }

    .carusel-inner{
        position: relative;
        // height: fit-content;
        width: 100%;
        overflow: hidden;
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
    
</style>