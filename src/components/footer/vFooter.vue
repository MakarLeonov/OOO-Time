<template>
    <div class="footer">
        <div class="container">
            <div class="info">
                <div class="info_column">
                    <p class="title">
                        ООО Тайм
                    </p>
                    <div class="info_p">
                        <img src="@/assets/img/icons/phone.png" alt="phone">
                        <p>+7 (961)-451-23-45</p>
                    </div>
                    <div class="info_p">
                        <img src="@/assets/img/icons/email.png" alt="email">
                        <p>triotime@gmail.com</p>
                    </div>

                    <br>
                    <div class="info_p">
                        <img class="adress" src="@/assets/img/icons/adress.png" alt="adress">
                        <p>пр. Стачки 51</p>
                    </div>
                    <div class="info_p">
                        <img src="@/assets/img/icons/time.png" alt="time">
                        <p>Будние дни: 8:00 - 22:00</p>
                    </div>
                    <div class="info_p">
                        <img src="@/assets/img/icons/time.png" alt="time">
                        <p>Выходные: 9:00 - 21:00</p>
                    </div>
                </div>

                <div class="service_column">
                    <p class="title">Услуги</p>
                        <router-link to="#" class="footer_link">Замена масла и фильтров</router-link>
                        <router-link to="#" class="footer_link">Диагностика неисправностей автомобиля</router-link>
                        <router-link to="#" class="footer_link">Ремонт тормозной системы</router-link>
                        <router-link to="#" class="footer_link">Ремонт системы охлаждения</router-link>
                        <router-link to="#" class="footer_link">Регулярное техническое обслуживание</router-link>
                        <router-link to="#" class="footer_link">Заправка кондиционеров</router-link>
                        <router-link to="#" class="footer_link">Шиномонтаж</router-link>
                </div>

                <div class="promotion_column">
                    <p class="title">Акции</p>
                        <router-link to="#" class="footer_link">Бесплатная диагностика автомобиля</router-link>
                        <router-link to="#" class="footer_link">Бесплатная проверка и зарядка аккумулятора</router-link>
                        <router-link to="#" class="footer_link">Скидка на ремонт подвески</router-link>
                        <router-link to="#" class="footer_link">Скидка замену масла</router-link>
                        <router-link to="#" class="footer_link">Скидка постоянным клиентам</router-link>
                </div>

                <div class="user_column">
                    <my-button-black>Авторизоваться</my-button-black>
                    <my-button-black>Личный кабинет</my-button-black>
                    <my-button-black>Панель администратора</my-button-black>
                </div>
            </div>

            <div class="hr"></div>
            <p class="copyright">© 2023, все права защищены.</p>
        </div>
    </div>
</template>
<script>
import MyButtonBlack from "@/components/UI/MyButtonBlack.vue";
export default {
    name: "vFooter",
    components: { MyButtonBlack }
    
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";

    .footer {
        width: 100%;
        height: 520px;
        height: fit-content;
        color: #fff !important;
        background-color: $fon;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        width: 1670px;
        height: 100%;
        padding: 60px 60px 15px;
    }

    .hr {
        width: 100%;
        height: 1px;
        background: #868D89;
        margin-top: 80px;
    }

    .copyright{
        text-align: center;
        margin-top: 15px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;

        color: #868D89;
    }

    .info {
        display: flex;
    }

    .title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        margin-bottom: 16px;
    }

    .footer_link {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 18px;

        color: #868D89;

        &:hover {
            @extend %linkshover;
        }
    }

    .info_column {
                width: 340px;
                .info_p {
                display: flex;
                gap: 4px;
                margin-bottom: 11px;

                &>p{
                    font-family: 'Rubik';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 21px;

                    color: #868D89;
                }

                .adress {
                    padding: 0 2px;
                    width: 22px;
                }
            }
            }

            .service_column {
                width: 430px;
                display: flex;
                flex-direction: column;
            }
            .promotion_column {
                width: 490px;
                display: flex;
                flex-direction: column;
            }

            .user_column {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }


 @media (max-width: 1600px) {

        .info_column {
            width: 320px;
        }
        .promotion_column {
            width: 450px;
        }
    }


    @media (max-width: 1500px) {

        .info_column {
            width: 290px;
        }
        .service_column {
            width: 410px;
        }

        .promotion_column {
            width: 430px;
        }

        .footer_link {
            font-size: 17px;
        }

        .title {
            font-size: 31px;
        }

        .info_column .info_p > p{
            font-size: 17px;
        }
        .copyright{
            font-size: 17px;
        }
    }

    @media (max-width: 1415px) {

        .info {
            flex-wrap: wrap;
        }

        .info_column {
            width: 25%;
        }
        .service_column {
            width: 35%;
        }

        .promotion_column {
            width: 40%;
        }

        .user_column {
            display: flex;
            flex-direction: row;
            gap: 16px;
            width: 100%;
            justify-content: flex-end;
            margin-top: -40px;
        }

        // .hr {
        //     margin-top: 65px;
        // }

        .container {
            padding: 60px 45px 15px;
        }
    }


    @media (max-width: 1100px) {

        .info {
            justify-content: center;
        }

        .info_column {
            width: 50%;
            // margin-left: 15%;
        }
        .service_column {
            width: 50%;
        }

        .promotion_column {
            width: 50%;
        }

        .user_column {
            flex-direction: column;
            padding: 0 10%;
            width: 50%;
        }

        // .hr {
        //     margin-top: 65px;
        // }

        .container {
            padding: 60px 60px 15px;
        }
    }

    @media (max-width: 900px) {
        .info_column {
            width: 45%;
            // margin-left: 15%;
        }
        .service_column {
            width: 55%;
        }

        .promotion_column {
            width: 60%;
        }

        .user_column {
            flex-direction: column;
            padding: 0;
            width: 40%;
        }

        .container {
            padding: 60px 50px 15px;
        }
    }

    @media (max-width: 750px) {
        .info_column {
            width: 50%;
            // margin-left: 15%;
        }
        .service_column {
            width: 50%;
        }

        .promotion_column {
            width: 60%;
        }

        .user_column {
            flex-direction: column;
            padding: 0;
            width: 40%;
        }

        .container {
            padding: 60px 40px 15px;
        }

        .title {
            font-size: 30px;
        }

        .footer_link {
            margin-bottom: 16px;
        }

        
    }

    @media (max-width: 650px) {

        .container {
            padding: 60px 30px 15px;
        }

        .title {
            font-size: 29px;
        }
    }

    @media (max-width: 550px) {

    .container {
        padding: 50px 50px 15px;
    }

    .info_column {
            width: 100%;
            margin-bottom: 20px;
        }
        .service_column {
            width: 100%;
            margin-bottom: 20px;
        }

        .promotion_column {
            width: 100%;
            margin-bottom: 20px;
        }

        .user_column {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding-top: 25px;
            width: 100%;
        }

        .hr {
            margin-top: 20px;
        }
}

</style>