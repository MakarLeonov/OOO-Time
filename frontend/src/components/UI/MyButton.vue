<template>
    <button @click.prevent="onSubmit">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "MyButton",
    
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss"; 

    button {
        padding: 13px 18px;
        

        background: #FFFFFF;
        border: 1.5px solid #000000;
        border-radius: 4px;
        cursor: pointer;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;

        color: #000000;
        
        transition: all .2s ease-in;

        &:hover {
            background-color: $fon;
            color: #fff;
            transition: all .23s ease-out;
        }
    }

</style>