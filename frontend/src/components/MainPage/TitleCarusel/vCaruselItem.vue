<template>
    <transition name="slide-in" mode="out-in">
        <div 
            class="carusel-item">
            <img :src="require('@/assets/img/carusel/' + slide)" alt="">
            <div class="overlay"></div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'vCaruselItem',
    props: ["slide", "currentSlide", "index", "sectionHeight"],
    
    
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
        width: 100vw;
        object-fit: contain;
        // background-size: cover;
    }

    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        
        background:  rgba(0, 0, 0, 0.07);
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