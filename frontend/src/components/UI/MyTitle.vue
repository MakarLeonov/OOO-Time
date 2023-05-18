<template>
    <p>
        <slot></slot>
    </p>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    p {
        text-align: center;
        margin-top: 50px;
        font-size: 32px;
        font-weight: regular;
        color: #000;
    }

    @media (max-width: 1230px) {
        p {
            font-size: 30px;
        }
    }

    @media (max-width: 1170px) {
        p {
            font-size: 31px;
        }
    }

    @media (max-width: 1100px) {
        p {
            font-size: 29px;
        }
    }

    @media (max-width: 1050px) {
        p {
            font-size: 28px;
        }
    }

    @media (max-width: 850px) {
        p {
            font-size: 27px;
        }
    }

    @media (max-width: 800px) {
        p {
            font-size: 26px;
        }
    }

    @media (max-width: 570px) {
        p {
            font-size: 25px;
        }
    }

    @media (max-width: 400px) {
        p {
            font-size: 24px;
        }
    }

    @media (max-width: 350px) {
        p {
            font-size: 23px;
        }
    }
    
</style>