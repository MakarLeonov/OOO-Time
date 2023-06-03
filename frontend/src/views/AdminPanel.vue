<template>
    <main>
        <aside>
            <div class="aside_title">Таблицы с контентом</div>
            <a href="#feedback_table">Таблица "Отзывы"</a>
            <a href="#repaire_types_table">Таблица "Виды неисправностей"</a>
            <a href="#service_table">Таблица "Услуги"</a>
            <a href="#consultations_table">Таблица "Заявки на консультацию"</a>
            <a href="#promotions_table">Таблица "Акции"</a>
            <a href="#advantages_table">Таблица "Преимущества"</a>
            <!-- <a href="#feedback_table">Таблица "Пользователи"</a> -->
        </aside>
        <section class="content">
            <div class="title">Панель администратора</div>
            <hr>
            <feedback-table id="feedback_table"/>
            <repaire-types-table id="repaire_types_table"/>
            <service-table id="service_table"/>
            <consultations-table id="consultations_table"/>
            <promotions-table id="promotions_table"/>
            <advantages-table id="advantages_table"/>
        </section>
    </main>
</template>
<script>
import FeedbackTable from '@/components/AdminPanel/FeedbackTable.vue';
import RepaireTypesTable from '@/components/AdminPanel/RepaireTypesTable.vue';
import ServiceTable from '@/components/AdminPanel/ServiceTable.vue';
import ConsultationsTable from '@/components/AdminPanel/ConsultationsTable.vue';
import PromotionsTable from '@/components/AdminPanel/PromotionsTable.vue';
import AdvantagesTable from '@/components/AdminPanel/AdvantagesTable.vue';
export default {
    components: {
        FeedbackTable, 
        RepaireTypesTable, 
        ServiceTable,
        ConsultationsTable,
        PromotionsTable,
        AdvantagesTable,
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

    main {
        margin-top: 80px;
        @extend %container;
        display: flex;
        
        scroll-behavior: smooth;
    }

    aside {
        width: 320px;
        height: fit-content;
        border: 1px solid black;
        border-radius: 3px;
        margin-right: 50px;
        
        position: sticky;
        top: 20px;
    }

    .aside_title {
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 18px;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        background: #000000;
        color: #fff;
    }

    aside > a {
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 18px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        border-top: 1px solid #000000;

        color: #000000;

        &:hover {
            background: #000000;
            color: #fff;
        }
    }
    

    // aside > hr {
    //     width: 100%;
    // }
    
    .content {
        width: 1200px;
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

    section > hr {
        width: 100%;
        margin: 12px 0 0;
    }
</style>