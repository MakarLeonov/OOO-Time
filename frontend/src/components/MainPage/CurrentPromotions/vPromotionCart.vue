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
                        Срок окончания акции: {{ getDate(promotion.ending)  }}
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
            upHere: (this.$store.getters.screenWidth > 500) ? false : true
        }
    },

    methods: {
        getDate(date) {
            return date[8] + date[9] + '.' + date[5] + date[6] + '.' + date[0] + date[1] + date[2] + date[3];
        },
    }
}
</script>
<style lang="scss" scoped>
    
.promotion {
    background: url('@/assets/img/promotions-img/promo.jpg');
    background-size: cover;
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
        backdrop-filter: blur(5px);
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1300px) {
    .promotion {
        width: 49%;
        padding: 40px;
        font-size: 30px;

        &:hover {
            font-size: 32px;
        }
        
    }
}

@media (max-width: 1100px) {
    .promotion {
        padding: 30px;
    }
}

@media (max-width: 1050px) {
    .promotion {
        width: 49%;
        height: 270px;
        padding: 25px;
        font-size: 26px;

        &:hover {
            font-size: 27px;
        }
    }
}

@media (max-width: 910px) {
    .promotion {
        width: 49%;
        height: 255px;
        padding: 25px;
        font-size: 25px;

        &:hover {
            font-size: 26px;
        }
    }

    .promotion .promotion-title {
        margin-bottom: 10px;
    }

    .promotion .promotion-description, 
    .promotion .promotion-date {
        font-size: 19px;
        color: #e0e0e0;
        font-weight: 400;
    }
}

@media (max-width: 850px) {
    .promotion {
        width: 49%;
        font-size: 23px;

        &:hover {
            font-size: 24px;
        }
    }
}

@media (max-width: 800px) {
    .promotion {
        width: 90%;
        height: 200px;
        font-size: 27px;

        &:hover {
            font-size: 30px;
        }
    }
}

@media (max-width: 700px) {
    .promotion {
        width: 90%;
        height: 235px;
        font-size: 27px;
    }
}

@media (max-width: 630px) {
    .promotion {
        width: 95%;
        height: 250px;
    }
}

@media (max-width: 570px) {
    .promotion {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .promotion {
        width: 100%;
        
        height: fit-content;
        padding-bottom: 50px;
        font-size: 25px;
    }

    .promotion .promotion-description, 
    .promotion .promotion-date {
        font-size: 18px;
    }
}

@media (max-width: 410px) {
    .promotion {
        font-size: 23px;
    }
}

@media (max-width: 375px) {
    .promotion {
        font-size: 22px;
        padding: 20px;
        height: fit-content;
        padding-bottom: 50px;
    }

    .promotion .promotion-description, 
    .promotion .promotion-date {
        font-size: 17px;
    }
}

@media (max-width: 350px) {
    .promotion {
        padding: 15px;
        padding-bottom: 50px;
    }

    .promotion .promotion-description, 
    .promotion .promotion-date {
        font-size: 16px;
    }
}
</style>