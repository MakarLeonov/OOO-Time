<template>
    <div class="slide">
        <div v-show="currentSlide === index + 1" >
            <img :src="require(`@/assets/img/carusel/${slide}`)" :key="index" rel="preload" alt="фоновая картинка" >
        </div>
    </div>
</template>
<script>
export default {
    props: {
        slide: {
            type: String,
        },

        index: {
            type: Number,
        },

        currentSlide: {
            type: Number,
        },

    }
}
</script>
<style lang="scss" scoped>
    img {
        top: 0;
        left: 0;
        max-width: 100%;
        object-fit:contain;
        z-index: 1;
    }
</style>