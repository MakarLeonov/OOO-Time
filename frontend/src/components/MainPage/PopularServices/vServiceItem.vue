<template>
    <div class="item" @click="this.$router.push(`/services/${id}`)">
        <img src="@/assets/popular_service.webp" alt="img">
        <p class="title">
            <slot></slot>
        </p>
    </div>
</template>
<script>
import { integer } from '@vuelidate/validators'
export default {
    name: 'vServiceItem',
    props: {
        id: Number,
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss'; 
    .item {
            
            height: fit-content; 
            width: 24%;
            background-color: #fff;
            padding: 28px;
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;

            cursor: pointer;
            z-index: 4;

            img {
                width: 100%;
                z-index: 10;
                margin: 10px;
            }

            p {
                font-weight: 400;
                font-size: 20px;
                line-height: 25px;
                text-align: center;
                margin-top: -13px;
                color: #000000;
                z-index: 15;
            }

            &:hover {
                box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.10);
                padding: 21px;
                transition: all .2s;
            }
        }

    @media (max-width: 1000px) {
        .item {
            width: 30%;
        }
    }

    @media (max-width: 940px) {
        .title {
            font-size: 19px !important;
        }
    }

    @media (max-width: 920px) {
        .title {
            font-size: 18px !important;
        }

        .item {
            margin-bottom: 12px;
            padding: 22px;
        }

    }

    @media (max-width: 800px) {
        .title {
            font-size: 16px !important;
        }

        .item {
            margin-bottom: 0;
            padding: 20px;
        }

        .container {
            margin-top: 5px;
        }
    }

    @media (max-width: 750px) {
        .item {
            padding: 15px;

            &:hover {
                padding: 11px;
            }
        }
    }

    @media (max-width: 700px) {
        .item {
            width: 32%;
        }
    }

    @media (max-width: 500px) {
        .item {
            width: 50% ;
        }
    }

    @media (max-width: 350px) {
        .item {
            width: 85%;
        }

        .container {
            display: flex;
            justify-content: center;
        }
    }
</style>