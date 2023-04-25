<template>
    <div 
        class="section" 
        :style="{height: sectionHeight + 'px'}"
        >
        <div class="caruserl" :style="{height: sectionHeight + 'px'}">
            <div 
                class="carusel-inner" 
                :style="{height: sectionHeight + 'px'}"
                >
                <v-carusel-item
                    v-for="(slide, index) in slides" 
                    :slide="slide"
                    :currentSlide="currentSlide"
                    :index="index"
                    :key="index" 
                    v-show="currentSlide === index"
                ></v-carusel-item>
                <v-carusel-form />
            </div>
        </div >
    </div>
</template>
<script> 
import vCaruselItem from "@/components/MainPage/TitleCarusel/vCaruselItem.vue";
import vCaruselForm from '@/components/MainPage/TitleCarusel/vCaruselForm.vue'
export default {
    name: 'vTitleCarusel',
    components: { vCaruselItem, vCaruselForm },
    data() {
        return {
            sectionHeight: 0,
            currentSlide: 0,
            slideInterval: null,

            slides: [
                "img1.jpg",
                "img2.jpg",
                // "img3.jpg",
                "img4.jpg",
                // "img5.jpg",
            ],
        }
    },

    methods: {
        updateSectionHeight(){
            this.sectionHeight = window.innerHeight - 80;
        },

        setCurrentSlide(index) {
            this.currentSlid = index;
        }
    },

    mounted() {
        this.sectionHeight = window.innerHeight - 80;
        this.slideInterval = setInterval(() => {
            // const index = this.currentSlide <= this.slides.length-1 ? this.currentSlide : 0;
            
            if (this.currentSlide <= this.slides.length-2) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
            // this.setCurrentSlide(index);
            // console.log(index)
        }, 5000)
    },

    beforeUnmount() {
        clearInterval(this.slideInterval);
    },

    created() {
        window.addEventListener('resize', this.updateSectionHeight)
    },

    
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";
    * {
        color: #000;
    }

    

    .section {
        // background-color: antiquewhite;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .caruserl {
        width: 100%;
        height: fit-content;

        display: flex;
        justify-content: center;

        
    }

    .carusel-inner{
        position: relative;
        height: fit-content;
        width: 100%;
        overflow: hidden;

    }

    

    
</style>