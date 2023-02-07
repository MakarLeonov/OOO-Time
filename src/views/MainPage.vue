<template>
    <div>
        <!-- <my-title>Main page</my-title> -->
        <v-title-carusel></v-title-carusel>
        <v-popular-services />
        <v-current-promotions></v-current-promotions>
        

        
    </div>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue"
import vPopularServices from "@/components/MainPage/vPopularServices.vue" 
import vTitleCarusel from "@/components/MainPage/vTitleCarusel.vue"
import vCurrentPromotions from "@/components/MainPage/vCurrentPromotions.vue"
export default {
    name: 'MainPage',
    components: {
        MyTitle, vPopularServices, vTitleCarusel, vCurrentPromotions
    }
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

</style>