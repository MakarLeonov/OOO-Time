<template>
    <transition name="slide-in">
        <div 
            class="carusel-item">
            <img :src="require('@/assets/img/' + slide)" alt="">
        </div>
    </transition>
</template>
<script>
export default {
    name: 'vCaruselItem',
    props: ["slide", "currentSlide", "index"],
    
}
</script>
<style lang="scss" scoped>
    .carusel-item{
        position: absolute;
        width: 100%;
        height: fit-content;
        // display: flex;
        // justify-content: center;
        
    }

    img {
        // width: 100%;
        object-fit: contain;
    }

    .slide-in-enter-active, 
    .slide-in-leave-active {
        transition: all 1.5s ease-in-out;
    }

    .slide-in-enter-from {
        transform: translateY(-100%);
    }

    .slide-in-leave-to {
        transform: translateY(100%);
    }
</style>