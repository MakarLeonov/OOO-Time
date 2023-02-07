<template>
    <div class="footer">
        <p style="color:azure;">Footer</p>
    </div>
</template>
<script>
export default {
    name: "vFooter",
    
}
</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";

    .footer {
        width: 100%;
        height: 300px;
        color: #fff !important;
        background-color: $fon;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>