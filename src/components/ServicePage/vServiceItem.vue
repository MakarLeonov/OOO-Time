<template>
    <div>
        <div class="service_item" @click="isOpen = !isOpen">
            <p class="service_item_title">Ремонт двигателя</p>
            <img class="arrow" :style="[isOpen ? {'transform': 'rotate(90deg)'} : {'transform': 'rotate(0deg)'}]" src="@/assets/img/icons/arrow.png" alt=">">
        </div>
        <div class="service_list" :style= "[isOpen ? {'max-height': 3*50 + 'px'} : {'max-height': '0px'}]">
            <!-- <div class="service_list_link"><router-link to="#" class="service_link">Замена масла и фильтров</router-link></div>
            <div class="service_list_link"><router-link to="#" class="service_link">Замена масла и фильтров</router-link></div> -->
            <router-link to="#" class="service_link2">Замена масла и фильтров</router-link>
            <router-link to="#" class="service_link2">Замена масла и фильтров</router-link>
            <router-link to="#" class="service_link2">Замена масла и фильтров</router-link>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            isOpen: false,
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

    .service_item {
        width: 100%;
        height: 70px;
        border-radius: 5px;
        background: #1E1E1E;
        color: #fff;
        padding: 0 20px; 
        margin-top: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        -ms-user-select: none; 
		-moz-user-select: none; 
		-webkit-user-select: none; 
		user-select: none; 
    }

    .service_item_title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 25px;
        color: #FFFFFF;
    }

    .service_list {
        transition: all 0.3s ease-in-out;
        overflow: hidden;
    }

    .arrow {
        transition: all 0.3s ease-in-out;
    }

    .service_link2 {
        height: 50px;
        background: #f0f0f0;
        padding-left: 25px;
        display: flex;
        align-items: center;


        &:hover {
            background: #e0e0e0;
            cursor: pointer;
            transition: all .2s;
        }

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.8);
    }
</style>