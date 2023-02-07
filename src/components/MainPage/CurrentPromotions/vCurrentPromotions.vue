<template>
    <div class="container">
        <div class="header">
            <my-title class="title">Акции</my-title>
            <my-button class="btn">Показать все акции</my-button>
        </div>
        <div class="body">
            <v-promotion-item>
                Бесплатная диагностика ходовой части
            </v-promotion-item>

            <v-promotion-item>
                Бесплатная замена масла ДВС и фильтра
            </v-promotion-item>

            <v-promotion-item>
                Ремонт авто в рассрочку
            </v-promotion-item>
        </div>
    </div>
</template>
<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyTitle from "@/components/UI/MyTitle.vue";
import vPromotionItem from "@/components/MainPage/CurrentPromotions/vPromotionItem.vue";
export default {
    name: "vCurrentPromotions",
    components: {
        MyButton, MyTitle, vPromotionItem,
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

.container {
    @extend %content-container;
    padding-bottom: 30px;
    
    .header {
        margin-top: 50px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            text-align: left;
            margin-top: 0px;
        }
    }

    .body {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 18px;

        .item {
            background: url('@/assets/img/promotions-img/promotions-img.png');
            width: 49.2%;
            height: 300px;
            border-radius: 6px;
            filter: drop-shadow(0px 15px 15px rgba(0, 0, 0, 0.05));
            cursor: pointer;
            font-size: 32px;
            font-weight: 500;
            text-shadow: none;
            transition: all .4s ease-in;
            color: #FFFFFF;

            

            &:hover {
                // filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, .3));
                // filter: drop-shadow(0px 2px 5px rgba(255, 175, 0, 1));
                // background: none;
                font-size: 42px;
                // color: $orange;
                // text-shadow: rgba(255, 175, 0, .2) 4px 4px;
                text-shadow: rgba(0, 0, 0, .2) 3px 3px;
                transition: all .4s ease-out;
                
            }

            .item-title {
                margin: 42px 66px;
                font-weight: inherit;
                font-size: inherit;
                color: inherit;
            }
        }
    }
}

</style>