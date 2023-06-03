<template>
    <section class="container">
        <div class="service_list">
            <service-list />
        </div>
        <div class="page_info">
            <p class="title">Ремонт двигателя</p>
            <hr>
            <p class="info">
                На состояние двигателя влияет соблюдение интервалов техобслуживания и правильный уход за автомобилем. <br> 
                Знание уязвимых мест ДВС позволит владельцу автомобиля своевременно устранять неисправности и не допускать новых поломок.
            </p>
            <img src="@/assets/service_info.jpg" alt="image" class="info_img">

            <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

        </div>
    </section>
</template>
<script>
import ServiceList from '@/components/ServicePage/ServiceList.vue'
export default {
    components: {
        ServiceList, 
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

.container {
    @extend %container;
    padding-top: 80px;
    display: flex;
    // background: #f0f0f0;
    
}

.service_list {  
    width: 22%;   
    margin-right: 30px;
    position: sticky;
    top: 5px;
}
.page_info {
    width: 75%;
    height: fit-content;
    margin-bottom: 40px;
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
        font-size: 17px;
        line-height: 20px;

        color: #000000;
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

</style>