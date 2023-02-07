<template>
    <div class="item">
        <p class="item-title">
            <slot></slot>
        </p>
    </div>
</template>
<script>
export default {
    name: 'vPromotionItem',
}
</script>
<style lang="scss" scoped>

@import '@/assets/assets.scss';

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
</style>