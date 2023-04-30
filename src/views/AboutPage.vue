<template>
    <div>
        <v-info />

        <v-map-section></v-map-section>

        <v-marks-carusel />
    </div>
</template>
<script>
import vMarksCarusel from "@/components/CommonComponents/vMarksCarusel.vue";
import vInfo from "@/components/AboutPage/vInfo.vue";
import vMapSection from "@/components/AboutPage/vMapSection.vue";
export default {
    name: "AboutPage",
    components: {
        vMarksCarusel, vInfo, vMapSection
    }
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/assets.scss';

</style>