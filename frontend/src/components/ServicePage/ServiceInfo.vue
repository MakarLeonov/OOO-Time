<template>
    <main>
        <p class="title">Ремонт двигателя</p>
        <hr>
        <p class="info">
            На состояние двигателя влияет соблюдение интервалов техобслуживания и правильный уход за автомобилем. <br> 
            Знание уязвимых мест ДВС позволит владельцу автомобиля своевременно устранять неисправности и не допускать новых поломок.
        </p>
        <img src="@/assets/service_info.jpg" alt="image" class="info_img">

        <p class="subtitle">Что чаще всего ломается в ДВС автомобиля?</p>

        <p class="malfunction">
            - Неисправен кривошипно-шатунный механизм
        </p>

        <p class="description">К кривошипно-шатунному механизму относят цилиндры, поршни, пальцы, коренные и шатунные подшипники. Выработка ресурса перечисленных частей — основная причина выхода всего механизма из строя. Однако повредить систему может и неправильное масло — недостаточно или слишком вязкое для двигателя, а также повышенные нагрузки на ТС.</p>
        <p class="malfunction">
            - Поврежден газораспределительный механизм            
        </p>

        <p class="description">Проблемами газораспределительного механизма считают поломку гидрокомпенсатора, нарушение тепловых зазоров клапанов и износ кулачков распредвала. Даже опытные водители не всегда могут самостоятельно выявить неисправности механизма. Поэтому правильным решением будет отправить машину на диагностику — мастера внимательно изучат систему и найдут неполадку.</p>
        <p class="malfunction">
            - Проблемы в системе зажигания
        </p>

        <p class="description">В системе зажигания сломаться может катушка или свечи, а могут отойти контакты. Любая из перечисленных неполадок может стать причиной затрудненного запуска мотора. В некоторых случаях он не заводится вовсе. Главные причины невозможности запустить ДВС — некачественное техобслуживание или его недостаток.
        </p>
    
    </main>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    main {
        width: 75%;
        margin-bottom: 40px;
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
    }

    .subtitle {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        display: flex;
        align-items: center;

        color: #000000;
    }

    .malfunction {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 23px;
        color: #747474;
        margin: 14px 0 9px;
    }

    .description {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;

        color: #747474;
    }

    hr {
        width: 100%;
        margin: 12px 0 15px;
    }

    .info {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;

        color: #000000;
    }

    .info_img {
        width: 100%;
        border-radius: 3px;
        margin: 20px 0 30px;
    }
</style>