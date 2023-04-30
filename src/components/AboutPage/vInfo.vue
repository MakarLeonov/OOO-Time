<template>
    <div class="container">
        <div class="photo">
            <img src="@/assets/about.jpg" alt="photo">
        </div>
        <div class="info">
            <p class="title">О нашей компании</p>
            <div class="hr"></div>    
            <div>
                <div class="info_p">
                    <p>Наш автосервис - это место, где вы можете получить качественный и профессиональный ремонт вашего автомобиля. Мы предлагаем широкий спектр услуг, включая техническое обслуживание, ремонт и замену деталей, диагностику и многое другое. Наша команда профессиональных механиков готова помочь вам в любое время, чтобы ваш автомобиль был в отличном состоянии и готов к дороге.</p>
                    <br>
                    <p>Мы стремимся предоставлять нашим клиентам не только качественный ремонт, но и отличный сервис. Наша команда готова ответить на все ваши вопросы, предоставить вам подробную информацию о наших услугах и ценах, а также помочь вам с подбором наиболее подходящего ремонта для вашего автомобиля. Мы также предоставляем замену автомобиля на время ремонта, чтобы вы могли продолжать свою жизнь, не теряя времени на ожидание ремонта.</p>
                    <br>
                    <p>Кроме того, мы часто проводим акции и предлагаем специальные скидки на наши услуги, чтобы сделать ремонт вашего автомобиля еще более доступным. Мы ценим каждого нашего клиента и готовы предоставить индивидуальный подход к каждому случаю. Мы приглашаем вас посетить наш автосервис и убедиться в качестве наших услуг на собственном опыте.</p>
                </div>
                <div class="logo">logo</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "vInfo",
}
</script>
<style lang="scss" scoped>
    
    .container {
        padding: 90px 0 0;
        width: 64%;
        margin: 0 auto;

        display: flex;
    }

    .photo > img {
        width: 350px;
        border-radius: 3px;
    }

    .info {
        margin-left: 20px;
        width: 100%;

        & > div {
            display: flex;
        }
    }

    .info_p {
        width: 80%;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    .title {
        text-align: left;
        font-size: 32px;
        font-weight: regular;
        color: #000;
    }

    .hr {
        width: 100%;
        height: 1px;
        background: #868D89;
        margin: 15px 0 20px;
        border-radius: 3px;
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