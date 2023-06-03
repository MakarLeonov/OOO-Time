<template>
    <main>
        <p class="error">Ошибка 404</p>
        <p class="error_message">Такой страницы не существует</p>
    </main>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        line-height: 57px;
        text-align: center;
    }

    .error {
        color: #000000;
        font-size: 48px;
    }
    .error_message {
        font-size: 25px;
        color: #494949;
    }

</style>