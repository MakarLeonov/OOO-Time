<template>
    <div>
        <v-info />
        <v-marks-carusel />
        <v-map-section />
        <v-feedback-list/>
        <transition name="fade">
            <v-modal-window v-if="this.$store.getters.isFeedbackModalWindowActive"/>
        </transition>
        
    </div>
</template>
<script>
import vMarksCarusel from "@/components/AboutPage/vMarksCarusel.vue";
import vInfo from "@/components/AboutPage/vInfo.vue";
import vMapSection from "@/components/AboutPage/vMapSection.vue";
import vFeedbackList from "@/components/AboutPage/Feedback/vFeedbackList.vue";
import vModalWindow from "@/components/AboutPage/Feedback/vModalWindow.vue";
export default {
    name: "AboutPage",
    components: {
        vMarksCarusel, vInfo, vMapSection, vFeedbackList, vModalWindow
    },

    data() {
        return {
            isModalWindowActive: false,
        }
    },
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/assets.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>