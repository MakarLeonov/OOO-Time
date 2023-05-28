<template>
    <div class="checkbox">
        <input type="checkbox" id="checkboxID" @click="$emit('switchChecked')" hidden>
        <label for="checkboxID" class="checkmark"></label>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";
    * {
        color: #7E7E7E;
    }

    .checkmark {
        display: block;
        width: 22px;
        height: 22px;
        border: 1px solid rgba(79, 79, 79, 0.8705882353);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;

        transition: all .1s ease-in-out;
    }

    #checkboxID:checked ~ .checkmark {
        background-color: $orange;
        background-color: $fon;
        border: none;
    }

    #checkboxID:checked ~ .checkmark::after {
        font-family: 'FontAwesome';
        content: '\f00c';
        color: #fff;
        font-size: 15px;
    }

</style>