<template>
    <section>
        <!-- <p class="service_title">Титульник</p> -->
        <p class="description">
            Все услуги, предоставляемые нашим автосервисом, поделены на категории по виду неисправности. 
            Чтобы открыть подробную информацию об услуге достаточно нажать вид неисправности и бырать интересующую вас услугу.
        </p>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .service_title {
        
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 57px;
        display: flex;
        align-items: center;

        color: #000000;
    }
    .description {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: 10px;
        text-align: justify;

        color: #494949;
    }
    .cost {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 20px;
        margin-top: 15px;

        color: #494949;

        transition: all .2s ease;
    }
</style>