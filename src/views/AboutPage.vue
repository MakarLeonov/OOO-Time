<template>
    <div>
        <!-- <p>About page</p> -->

        <v-marks-carusel />
    </div>
</template>
<script>
import vMarksCarusel from "@/components/CommonComponents/vMarksCarusel.vue";
export default {
    name: "AboutPage",
    components: {
        vMarksCarusel,
    }
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/assets.scss';

    p {
        text-align: center;
        margin-top: 50px;
        font-size: 22px;
    }

</style>