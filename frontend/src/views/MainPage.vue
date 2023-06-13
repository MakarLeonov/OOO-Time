<template>
    <main>
        <title-carousel></title-carousel>
        <v-carusel-form  @showMessage="toShowMessage()"/>
        <transition name="fade">
            <div class="message_modal" v-if="showMessage">
                <div class="modal_window">
                    <p class="message_h">Спасибо!</p>
                    <p class="message">Ваша заявка отправлена!</p>
                </div>
            </div>
        </transition>
        <v-popular-services />
        <v-adventages/>
        <v-current-promotions></v-current-promotions>
    </main>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue"
import vPopularServices from "@/components/MainPage/PopularServices/vPopularServices.vue" 
import vCaruselForm from "@/components/MainPage/TitleCarusel/vCaruselForm.vue"
import TitleCarousel from "@/components/MainPage/TitleCarusel/TitleCarousel.vue"
import vAdventages from "@/components/MainPage/Adventages/vAdventages.vue"
import vCurrentPromotions from "@/components/MainPage/CurrentPromotions/vCurrentPromotions.vue"
export default {
    name: 'MainPage',
    components: {
        MyTitle, 
        vPopularServices, 
        vCaruselForm,
        TitleCarousel,
        vCurrentPromotions,
        vAdventages,
    },

    data() {
        return {
            showMessage: false,
        }
    },

    methods: {
        toShowMessage() {
            this.showMessage = true;
            setTimeout(() => {
                this.showMessage = false;
            }, 2000);
        }
    },
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

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