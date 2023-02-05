<template>
    <div>
        <!-- <my-title>Main page</my-title> -->
        <v-title-carusel></v-title-carusel>
        <v-popular-services />
        

        
    </div>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue"
import vPopularServices from "@/components/MainPage/vPopularServices.vue" 
import vTitleCarusel from "@/components/MainPage/vTitleCarusel.vue"
export default {
    name: 'MainPage',
    components: {
        MyTitle, vPopularServices, vTitleCarusel
    }
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

</style>