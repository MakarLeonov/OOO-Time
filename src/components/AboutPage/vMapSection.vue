<template>
    <section class="container">
        <div class="title">Где нас найти?</div>
        <div>
            <div class="map">
                <iframe class="map_iframe" src="https://yandex.ru/map-widget/v1/?um=constructor%3A02cee52051a069d222a01d7fe8330a84adfd07aa1eda1fec7b54f132fb11a5c1&amp;source=constructor" frameborder="0"></iframe>
            </div>
            <div class="info_column">
                <p class="info-title">
                    Наш адрес
                </p>
                <div class="info_p">
                    <img class="adress" src="@/assets/img/icons/adress.png" alt="adress">
                    <p>Проспект Стачки 227</p>
                </div>
                <br>
                <p class="info-title">
                    График работы
                </p>
                <div class="info_p">
                    <img src="@/assets/img/icons/time.png" alt="time">
                    <p>Будние дни: 8:00 - 22:00</p>
                </div>
                <div class="info_p">
                    <img src="@/assets/img/icons/time.png" alt="time">
                    <p>Выходные: 9:00 - 21:00</p>
                </div>
                <br>
                <p class="info-title">
                    Свяжитесь с нами
                </p>
                <div class="info_p">
                    <img src="@/assets/img/icons/phone.png" alt="phone">
                    <p>+7 (961)-451-23-45</p>
                </div>
                <div class="info_p">
                    <img src="@/assets/img/icons/email.png" alt="email">
                    <p>triotime@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "vMapSection",
}
</script>
<style lang="scss" scoped>
    
    .container {
        width: 64%;
        margin: 0 auto;
        padding: 25px 0 40px;

        & > div {
            display: flex;
            width: 100%;
        }
    }

    .map {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
        height: 450px;
        width: 800px;
    }

    .map_iframe {
        width: 100%;
        height: 100%;
    }

    .info_column {
        margin-left: 40px;
        .info_p {
            display: flex;
            gap: 4px;
            margin-bottom: 11px;

            &>p{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 17px;
                line-height: 21px;

                color: #868D89;
            }

        .adress {
            padding: 0 2px;
            width: 22px;
        }
        }
    }

    .title {
        width: 100%;
        font-family: 'Rubik';
        text-align: left;
        font-size: 32px;
        font-weight: regular;
        color: #000;
        margin-bottom: 10px;
    }
    .info-title {
        width: 100%;
        font-family: 'Rubik';
        text-align: left;
        font-size: 28px;
        font-weight: regular;
        color: #494949;
        margin-bottom: 10px;
    }

    @media (max-width: 1230px) {
        .title {
            font-size: 30px;
        }
    }

    @media (max-width: 1170px) {
        .title {
            font-size: 31px;
        }
    }

    @media (max-width: 1100px) {
        .title {
            font-size: 29px;
        }
    }

    @media (max-width: 1050px) {
        .title {
            font-size: 28px;
        }
    }

    @media (max-width: 850px) {
        .title {
            font-size: 27px;
        }
    }

    @media (max-width: 800px) {
        .title {
            font-size: 26px;
        }
    }

    @media (max-width: 570px) {
        .title {
            font-size: 25px;
        }
    }

    @media (max-width: 400px) {
        .title {
            font-size: 24px;
        }
    }

    @media (max-width: 350px) {
        .title {
            font-size: 23px;
        }
    }
</style>