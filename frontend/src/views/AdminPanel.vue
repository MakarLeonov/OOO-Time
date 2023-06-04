<template>
    <main>
        <aside v-if="this.$store.getters.screenWidth > 1000">
            <div class="aside_title">Таблицы с контентом</div>
            <a href="#feedback_table">Таблица "Отзывы"</a>
            <a href="#repaire_types_table">Таблица "Виды неисправностей"</a>
            <a href="#service_table">Таблица "Услуги"</a>
            <a href="#consultations_table">Таблица "Заявки на консультацию"</a>
            <a href="#promotions_table">Таблица "Акции"</a>
            <a href="#advantages_table">Таблица "Преимущества"</a>
        </aside>
        <div class="aside_mobile" @click="dropdownActive = !dropdownActive" v-else>Таблицы</div>
        <transition name="slide-fade">
            <div class="aside_mobile_dropdown" v-if="dropdownActive">
                <div class="dropdown_head">
                    <p>Таблицы с контентом</p>
                    <span class="material-symbols-outlined close" @click="dropdownActive = !dropdownActive">close</span>
                </div>
                <a href="#feedback_table" @click="dropdownActive = !dropdownActive">Таблица "Отзывы"</a>
                <a href="#repaire_types_table" @click="dropdownActive = !dropdownActive">Таблица "Виды неисправностей"</a>
                <a href="#service_table" @click="dropdownActive = !dropdownActive">Таблица "Услуги"</a>
                <a href="#consultations_table" @click="dropdownActive = !dropdownActive">Таблица "Заявки на консультацию"</a>
                <a href="#promotions_table" @click="dropdownActive = !dropdownActive">Таблица "Акции"</a>
                <a href="#advantages_table" @click="dropdownActive = !dropdownActive">Таблица "Преимущества"</a>
            </div>
        </transition>
        
        
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
    },

    data() {
        return {
            dropdownActive: false,
        }
    },
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
    

    .aside_mobile {
        z-index: 1;
        width: 100px;
        height: 50px;
        background: #1E1E1E;
        border-radius: 25px 0 0 25px;
        color: #fff;
        position: fixed;
        top: 87px;
        right: 0;
        cursor: pointer;
        
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;

        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 5px;
    }

    .aside_mobile_dropdown {
        z-index: 2;
        width: 90px;
        width: fit-content;
        background: #1E1E1E;
        border-radius: 25px 0 0 25px;
        
        position: fixed;
        top: 87px;
        right: 0;
        padding: 11px;

        display: flex;
        flex-direction: column;
    }

    .aside_mobile_dropdown > a {
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 18px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        border-top: 1px solid #1E1E1E;

        color: #fff;
        border-radius: 13px;

        &:hover {
            background: #2c2c2c;
            color: #fff;
        }
    }

    .dropdown_head {
        display: flex;
        justify-content: space-between;
        padding: 10px 10px 5px;

        & > p {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 21px;
            line-height: 20px;
            border-top: 1px solid #1E1E1E;

            color: #fff;
        }

        .close {
            font-style: normal;
            font-weight: 600;
            font-size: 29px;
            line-height: 20px;
            border-top: 1px solid #1E1E1E;

            color: #fff;
            cursor: pointer;
        }
    }
    
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
        width: 100%;
    }

    section > hr {
        width: 100%;
        margin: 12px 0 0;
    }

    .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(100%);
    }

    @media (max-width: 1000px) {
        main {
            margin-top: 40px;
        }
    }
</style>