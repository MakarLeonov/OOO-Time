<template>
    <section>
        <transition-group name="list-complete" >
            <CarouselSlide 
                v-for="(slide, index) in carouselSlides" 
                :key="index" 
                :slide="slide" 
                :index="index" 
                :currentSlide="currentSlide"
            />
        </transition-group>
    </section>
</template>
<script>
import CarouselSlide from "@/components/MainPage/TitleCarusel/CarouselSlide.vue"

export default {
    components: { CarouselSlide },
    data() {
        return {
            currentSlide: 1,
            sectionHeight: 0,
            carouselSlides: [
                "fon1.webp",
                "fon2.webp",
                "fon3.webp",
            ], 
        }
    },

    mounted() {
        setInterval(() => {
            if (this.currentSlide < this.carouselSlides.length) {
                this.currentSlide++;
            } else {
                this.currentSlide -= 2;
            }
        }, 5000);
    },
}
</script>
<style lang="scss" scoped>
    section {
        z-index: 2;
        position: block;
        width: 100%;
    }

    .list-complete-item {
    transition: all 0.8s ease;
    display: inline-block;
    }

    .list-complete-enter-from,
    .list-complete-leave-to {
    opacity: 0;
    // transform: translateY(100%);
    }

    .list-complete-leave-active {
        position: absolute;
    }
</style>