<template>
    <div class="accirdion">
        <div :class="[accordionBody, (isAccordionActive) ? 'active' : 'close']">
            <div class="label" @click="isAccordionActive = !isAccordionActive">
                <p>{{ promotion.title }}</p>
                <img class="arrow" :style="[isAccordionActive ? {'transform': 'rotate(90deg)'} : {'transform': 'rotate(0deg)'}]" src="@/assets/img/icons/arrow.png" alt=">">
            </div>
            <div class="content">
                <div class="info">
                    <p class="description">
                        {{ promotion.description }}
                    </p>
                    <p>Акция действует с: {{ getDate(promotion.beginning) }} по {{ getDate(promotion.ending) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        promotion: {
            type: Object,
        }
    },

    data() {
        return {
            isAccordionActive: false,
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

    .accirdion {
        width: 850px;
        margin-bottom: 10px;
        
    }
    .accordionBody {
        position: relative;
        margin: 10px 0;
    }
    .label {
        position: relative;
        padding: 20px;
        background: #000;
        border-radius: 5px;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        -ms-user-select: none; 
		-moz-user-select: none; 
		-webkit-user-select: none; 
		user-select: none; 
    }

    .label > P {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;
        transition: .5s;
        color: #FFFFFF;
        max-width: 95%;
    }
    .content {
        position: relative;
        background: #f0f0f0b0;
        height: 0;
        overflow: hidden;
        transition: .5s;
        overflow-y: auto;
        
        border-radius: 0 0 5px 5px;
    }

    .info {
        width: 100%;
        height: 100%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .info > p {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.8);
        
    }

    .description {
        margin-bottom: 5px;
    }

    .active .label {
        border-radius: 5px 5px 0 0;
    }

    .active .content {
        position: relative;
        height: 120px;
        // padding: 15px;
        margin-top: -6px;
        z-index: 0;
    }

    .arrow {
        transition: all 0.3s ease-in-out;
    }


    @media (max-width: 950px) {
        .accirdion {
            width: 100%;
        }
    }

    @media (max-width: 750px) {
        .active .content {
            height: 130px;
        }
    }

    @media (max-width: 550px) {
        .active .content {
            height: 150px;
        }

        .label > p {
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        .active .content {
            height: 150px;
        }

        .label > p {
            font-size: 19px;
        }

        .info > p {
            font-size: 17px;
        }
    }

    @media (max-width: 450px) {
        .active .content {
            height: 170px;
        }

        .label {
            padding: 15px;
        }

        .label > p {
            font-size: 17px;
            font-weight: 500;
        }
    }

    @media (max-width: 385px) {
        .label {
            padding: 12px 15px;
            height: 75px;
        }
    }

    @media (max-width: 355px) {
        .label > p {
            max-width: 93%;
        }
    }
    @media (max-width: 340px) {
        .active .content {
            height: 180px;
        }
    }

</style>