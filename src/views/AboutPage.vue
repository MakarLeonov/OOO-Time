<template>
    <div>
        <v-info />
        <v-marks-carusel />
        <v-map-section />
        <v-feedback-list/>
    </div>
</template>
<script>
import vMarksCarusel from "@/components/CommonComponents/vMarksCarusel.vue";
import vInfo from "@/components/AboutPage/vInfo.vue";
import vMapSection from "@/components/AboutPage/vMapSection.vue";
import vFeedbackList from "@/components/AboutPage/Feedback/vFeedbackList.vue";
export default {
    name: "AboutPage",
    components: {
        vMarksCarusel, vInfo, vMapSection, vFeedbackList
    }
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/assets.scss';

</style>