<template>
    <section class="container">
        <div class="page_info">
            <p class="title">О нашей компании</p>
            <hr>
            <div class="content">
                <div class="text_info">
                    <p class="info">
                        Автосервис ООО Тайм - это место, где вы можете получить качественный и профессиональный ремонт вашего автомобиля. Мы предлагаем широкий спектр услуг, включая техническое обслуживание, ремонт и замену деталей, диагностику и многое другое. Наша команда профессиональных механиков готова помочь вам в любое время, чтобы ваш автомобиль был в отличном состоянии и готов к дороге.
                    </p>
                    <br>
                    <p class="info">
                        Мы стремимся предоставлять нашим клиентам не только качественный ремонт, но и отличный сервис. Наша команда готова ответить на все ваши вопросы, предоставить вам подробную информацию о наших услугах и ценах, а также помочь вам с подбором наиболее подходящего ремонта для вашего автомобиля. Мы также предоставляем замену автомобиля на время ремонта, чтобы вы могли продолжать свою жизнь, не теряя времени на ожидание ремонта.
                    </p>
                </div>
                <img src="@/assets/img/logo.png" alt="logo" class="logo">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "vInfo",
}
</script>
<style lang="scss" scoped>
    
    .container {
        padding: 90px 0 0;
        width: 80%;
        margin: 0 auto;

        display: flex;
    }
    .page_info {
        width: 100%;
        
    }
    .title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 57px;
        display: flex;
        align-items: center;

        color: #000000;
        margin-bottom: 15px;
    }

    .content {
        display: flex;
    }

    .logo {
        width: 255px;
        height: 255px;
        margin-left: 10px;
    }
    .info {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        color: #000000;
    }


    @media (max-width: 1350px) {

        .container {
            padding: 60px 0 0;
        }
        .title {
            font-size: 47px;
            margin-bottom: 10px;
        }
        .info {
            font-size: 19px;
            line-height: 23px;
        }

    }

    @media (max-width: 1250px) {
        .logo {
            width: 240px;
            height: 240px;
            margin-left: 7px;
        }

        .container {
            width: 85%;
            padding: 40px 0 0;
        }

    }

    @media (max-width: 1150px) {
        .text_info {
            margin-bottom: 20px;
        }
        .logo {
            margin: 0 auto;
        }
        .info {
            text-align: justify;
        }
        .info:first-child {
            text-indent: 30px;
        }

        .content {
            flex-direction: column;
        }

    }

    @media (max-width: 800px) {
        .title {
            font-size: 45px;
        }
    }

    @media (max-width: 600px) {
        .title {
            font-size: 43px;
            margin-bottom: 0;
        }

        .info {
            font-size: 18px;
            line-height: 22px;
        }
    }

    @media (max-width: 500px) {
        .title {
            font-size: 41px;
            line-height: 45px;
        }
    }

    @media (max-width: 450px) {
        .title {
            font-size: 39px;
        }

        .container {
            padding: 30px 0 0;
        }
    }

    @media (max-width: 430px) {
        .title {
            font-size: 37px;
        }
        .container {
            padding: 25px 0 0;
        }
    }

    @media (max-width: 400px) {
        .title {
            font-size: 35px;
        }
    }

    @media (max-width: 385px) {
        .title {
            font-size: 34px;
        }
    }

    @media (max-width: 375px) {
        .title {
            font-size: 33px;
        }
    }

    @media (max-width: 360px) {
        .title {
            font-size: 32px;
        }
    }

    @media (max-width: 350px) {
        .title {
            font-size: 31px;
            line-height: 40px;
        }
    }

    @media (max-width: 340px) {
        .title {
            font-size: 30px;
        }
    }
       
</style>