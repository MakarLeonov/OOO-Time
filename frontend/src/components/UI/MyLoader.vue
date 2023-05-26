<template>
    <section>
        <div class="dots">
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:6;"></span>
            <span style="--i:7;"></span>
            <span style="--i:8;"></span>
            <span style="--i:9;"></span>
            <span style="--i:10;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:13;"></span>
            <span style="--i:14;"></span>
            <span style="--i:15;"></span>
        </div>
        <!-- <p class="loader_message">Отзывы загружаются</p> -->
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    
    section{
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 100%;
    align-items: center;
    justify-content: center;
    }

    section .dots span{
    position: absolute;
    height: 10px;
    width: 10px;
    background: #4e4e4e;
    border-radius: 50%;
    transform: rotate(calc(var(--i) * (360deg / 15))) translateY(35px);
    animation: animate 1.5s linear infinite;
    animation-delay: calc(var(--i) * 0.1s);
    opacity: 0;
    }

    @keyframes animate {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }

    .loader_message {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #4e4e4e;
    }

</style>