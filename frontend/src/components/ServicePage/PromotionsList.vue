<template>
    <section id="asd">
        <p class="title">Актуальные акции</p>
        <my-accordion v-for="promotion in PROMOTIONS" :key="promotion" :promotion="promotion"/>
        <div class="loader">
            <my-loader v-if="!PROMOTIONS.length"/>
        </div>
    </section>
</template>
<script>
import MyAccordion from "@/components/UI/MyAccordion.vue"
import MyLoader from "@/components/UI/MyLoader.vue"
export default {
    components: { MyAccordion, MyLoader },

    computed: {
        PROMOTIONS() {
            return this.$store.getters.PROMOTIONS;
        },
    },
}
</script>
<style lang="scss" scoped>
    
    .title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 57px;
        display: flex;
        align-items: center;

        color: #000000;
    }
</style>