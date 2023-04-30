<template>
    <div>
        <v-info />

        <v-marks-carusel />
    </div>
</template>
<script>
import vMarksCarusel from "@/components/CommonComponents/vMarksCarusel.vue";
import vInfo from "@/components/AboutPage/vInfo.vue";
export default {
    name: "AboutPage",
    components: {
        vMarksCarusel, vInfo
    }
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/assets.scss';

</style>