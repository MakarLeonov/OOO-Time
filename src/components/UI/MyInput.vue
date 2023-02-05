<template>
    <div class="input">
        <input type="text" class="form-input" placeholder=" ">
        <label class="form-label">
            <slot></slot>
        </label>
    </div>
</template>
<script>
export default {
    name: 'MyInput',
    
}
</script>
<style lang="scss" scoped>

@import "@/assets/assets.scss";

* {
    font-family: 'Inter', sans-serif;
}
    .input {
            position: relative;
            margin-bottom: 37px;
            z-index: 0;

            .form-label {
            position: absolute;
            font-size: 21px;
            font-weight: 500;
            top: -3px;
            left: 0;
            z-index: -1;
            color: #9e9e9e;
            transition: 0.3s;
            }

            .form-input {
                width: 100%;
                padding: 0 0 5px 2px;
                border: none;
                border-bottom: 2px solid #4f4f4fde ;
                background-color: transparent;
                outline: none;
                transition: .3s;
                font-size: 16px;
                font-weight: 600;
                color: $fon;

                &:focus {
                    border-bottom: 2px solid $orange;
                }
            }

            .form-input:focus ~ .form-label,
            .form-input:not(:placeholder-shown) ~ .form-label {
                top: -20px;
                font-size: 17px;
            }
        }
</style>