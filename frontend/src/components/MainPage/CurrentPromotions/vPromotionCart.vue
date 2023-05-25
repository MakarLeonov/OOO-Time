<template>
    <div class="promotion" 
                @mouseover="upHere = true" 
                @mouseleave="upHere = false"
                >
                <p class="promotion-title">
                    {{ promotion.title }}
                </p>

                <transition name="fade">
                    <p class="promotion-description" v-show="upHere">
                        {{ promotion.description }}
                    </p>
                </transition>
                
                <transition name="fade">
                    <p class="promotion-date" v-show="upHere">
                        Срок окончания акции: {{ promotion.ending }}
                    </p>
                </transition>
                
            </div>
</template>
<script>
export default {
    
    props: {
        promotion: Object,
        required: true,
    },

    data() {
        return {
            upHere: false,
        }
    },
}
</script>
<style lang="scss" scoped>
    
.promotion {
    background: url('@/assets/img/promotions-img/promotions-img.png');
    width: 49.2%;
    height: 300px;
    border-radius: 6px;
    filter: drop-shadow(0px 15px 15px rgba(0, 0, 0, 0.05));
    cursor: pointer;
    font-size: 32px;
    font-weight: 500;
    text-shadow: none;
    transition: all .4s ease-in;
    color: #FFFFFF;
    padding: 40px 60px;

    &:hover {
        font-size: 42px;
        font-size: 35px;
        text-shadow: rgba(0, 0, 0, .2) 3px 3px;
        transition: all .4s ease-out;
    }

    .promotion-title {
        font-weight: inherit;
        font-size: inherit;
        color: inherit;
        margin-bottom: 15px;
    }

    .promotion-description, .promotion-date {
        font-size: 20px;
        color: #e0e0e0;
        font-weight: 400;
    }

    .promotion-date {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>