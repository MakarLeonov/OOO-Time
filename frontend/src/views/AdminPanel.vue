<template>
    <main>
        <aside>
            
        </aside>
        <section class="content">
            <div class="title">Панель администратора</div>
        </section>
    </main>
</template>
<script>
export default {
    
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
        height: 50px;
        border: 1px solid black;
        margin-right: 50px;
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
</style>