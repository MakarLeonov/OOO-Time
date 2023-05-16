<template>
    <div>
        <v-title-carusel></v-title-carusel>
        <!-- <v-marks-carusel />                  -->
        <v-popular-services />
        <v-adventages/>
        <v-current-promotions></v-current-promotions>
    </div>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue"
import vMarksCarusel from "@/components/CommonComponents/vMarksCarusel.vue"
import vPopularServices from "@/components/MainPage/PopularServices/vPopularServices.vue" 
import vTitleCarusel from "@/components/MainPage/TitleCarusel/vTitleCarusel.vue"
import vAdventages from "@/components/MainPage/Adventages/vAdventages.vue"
import vCurrentPromotions from "@/components/MainPage/CurrentPromotions/vCurrentPromotions.vue"
export default {
    name: 'MainPage',
    components: {
        MyTitle, 
        vPopularServices, 
        vTitleCarusel, 
        vCurrentPromotions, 
        vMarksCarusel, 
        vAdventages,
    }
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

</style>