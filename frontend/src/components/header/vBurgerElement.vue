<template>
    <div class="hamb">
            <div :class="{ 'hamb-field': true, active: this.$store.getters.isSidebarActive }" id="hamb">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .hamb {
        display: flex;
        align-items: center;
    }

    .hamb-field {
        padding: 10px 0 10px;
        cursor: pointer;
    }

    .bar {
        display: block;
        width: 30px;
        height: 3px;
        margin: 6px auto;
        background-color: #fff;
        transition: all .3s;
        border-radius: 5px;
    }

    .hamb-field.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamb-field.active .bar:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
    }

    .hamb-field.active .bar:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
    }

    

</style>