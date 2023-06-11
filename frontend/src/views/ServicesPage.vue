<template>
    <section class="container">
        <div class="service_list" v-if="this.$store.getters.screenWidth > 1500">
            <service-list />
        </div>
        <div class="show_service_list" v-else @click="this.$store.commit('hideServiceSidebar')">Услуги</div>
        <transition name="slide-fade">
            <div class="service_list_aside" v-if="this.$store.getters.isServiceSidebarActive">
                <div class="dropdown_head">
                    <p>Виды неисправностей</p>
                    <span class="material-symbols-outlined close" @click="this.$store.commit('hideServiceSidebar')">close</span>
                </div>
                <service-list />
            </div>
        </transition>
        <div class="page_info">
            <p class="title">Виды услуг и ТО</p>
            <hr>
            <p class="info">
                Наша компания предлагает широкий спектр услуг по техническому обслуживанию автомобилей различных марок и моделей. 
                Мы осуществляем как регулярное ТО, так и комплексное диагностирование и ремонт любой сложности.
            </p>
            <img src="@/assets/service_info.jpg" alt="image" class="info_img">

            <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        
        <promotions-list />
        </div>
    </section>
</template>
<script>
import ServiceList from '@/components/ServicePage/ServiceList.vue'
import PromotionsList from '@/components/ServicePage/PromotionsList.vue'
export default {
    components: {
        ServiceList, PromotionsList
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

.container {
    @extend %container;
    padding-top: 80px;
    display: flex; 
    
}

.service_list {  
    width: 22%;   
    margin-right: 30px;
    position: sticky;
    top: 5px;
}

.show_service_list {
    z-index: 2;
    width: 100px;
    height: 50px;
    background: #1E1E1E;
    border-radius: 25px 0 0 25px;
    color: #fff;
    position: fixed;
    top: 87px;
    right: 0;
    cursor: pointer;
    
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    transition: .3s ease;

    &:hover {
        width: 103px;
    }
}

.service_list_aside {
    z-index: 3;
    width: 400px;
    padding: 15px;
    background: #fff;
    position: fixed;
    top: 86px;
    top: 80px;
    right: 0;
    border: 1px solid grey;
    border-radius: 5px 0 0 5px;
}

.dropdown_head {
        display: flex;
        justify-content: space-between;
        padding: 10px;

        & > p {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 21px;
            line-height: 20px;

            color: #1E1E1E;
        }

        .close {
            font-style: normal;
            font-weight: 600;
            font-size: 29px;
            line-height: 20px;

            color: #1E1E1E;
            cursor: pointer;
        }
    }
.page_info {
    width: 75%;
    height: fit-content;
    padding-bottom: 40px;
}

.title {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 57px;
    display: flex;
    align-items: center;

    color: #000000;
}

    .subtitle {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        display: flex;
        align-items: center;

        color: #000000;
    }

    .malfunction {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 23px;
        color: #747474;
        margin: 14px 0 9px;
    }

    

    hr {
        width: 100%;
        margin: 12px 0 15px;
    }

    .info {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: 10px;

        color: #494949;
    }

    .info_img {
        width: 100%;
        border-radius: 3px;
        margin: 20px 0 30px;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity .3s ease-in-out;
    }

    .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(100%);
    }

    @media (max-width: 1500px) {
        .page_info {
            width: 100%;
            margin: 0 auto;
        }
    }

    @media (max-width: 1200px) {
        .title {
            font-size: 47px;
        }
    }

    @media (max-width: 1000px) {
        .container {
            padding-top: 40px;
        }
    }

    @media (max-width: 900px) {
        .title {
            font-size: 46px;
        }

        .info {
            font-size: 19px;
        }
    }

    @media (max-width: 750px) {
        .title {
            font-size: 44px;
        }

        hr {
            margin: 10px 0 10px;
        }
    }

    @media (max-width: 650px) {
        .title {
            font-size: 42px;
        }

        .info {
            font-size: 19px;
            text-indent: 30px;
            text-align: justify;
        }
    }

    @media (max-width: 500px) {
        .container {
            padding-top: 20px;
        }
    }

    @media (max-width: 470px) {
        .title {
            font-size: 41px;
        }
    }


    @media (max-width: 450px) {
        .title {
            font-size: 39px;
        }

        hr {
            margin: 5px 0;
        }

        .info_img {
            margin: 10px 0 10px;
        }

        .info {
            font-size: 18px;
        }

        .service_list_aside {
            width: 100%;
            border-radius: 0;
        }
    }

    @media (max-width: 440px) {
        .title {
            font-size: 37px;
        }
    }

    @media (max-width: 420px) {
        .container {
            width: 95%;
        }
    }

    @media (max-width: 410px) {
        .title {
            font-size: 36px;
        }

        hr {
            margin: 0;
        }

        .info {
            font-size: 17px;
        }
    }

    @media (max-width: 400px) {
        .title {
            font-size: 34px;
        }
    }

    @media (max-width: 385px) {
        .title {
            font-size: 33px;
        }
    }

    @media (max-width: 370px) {
        .title {
            font-size: 31px;
        }
    }

    @media (max-width: 360px) {
        .title {
            font-size: 30px;
        }
    }

    @media (max-width: 350px) {
        .title {
            font-size: 29px;
        }
    }

    @media (max-width: 340px) {
        .title {
            font-size: 28px;
        }
    }

    @media (max-width: 330px) {
        .title {
            font-size: 27px;
        }
    }


    

</style>