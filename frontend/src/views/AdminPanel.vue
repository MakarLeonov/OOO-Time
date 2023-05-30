<template>
    <main>
        <aside>
            <div class="aside_title">Таблицы с контентом</div>
            <a href="#feedback_table">Таблица "Отзывы"</a>
            <a href="#feedback_table">Таблица "Виды неисправностей"</a>
            <a href="#feedback_table">Таблица "Услуги"</a>
            <a href="#feedback_table">Таблица "Акции"</a>
            <a href="#feedback_table">Таблица "Преимущества"</a>
            <a href="#feedback_table">Таблица "Пользователи"</a>
        </aside>
        <section class="content">
            <div class="title">Панель администратора</div>
            <hr>
            <feedback-table />
            
        </section>
    </main>
</template>
<script>
import FeedbackTable from '@/components/AdminPanel/FeedbackTable.vue';
export default {
    components: {
        FeedbackTable, 
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

    main {
        margin-top: 80px;
        @extend %container;
        display: flex;
    }

    aside {
        width: 320px;
        height: fit-content;
        border: 1px solid black;
        border-radius: 3px;
        margin-right: 50px;
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
        margin: 12px 0 15px;
    }
</style>