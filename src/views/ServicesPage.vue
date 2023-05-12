<template>
    <section class="container">
        <div class="service">

            <v-service-item />
            <v-service-item />
            <v-service-item />

        </div>
    </section>
</template>
<script>
import vServiceItem from '@/components/ServicePage/vServiceItem.vue'
export default {
    components: {
        vServiceItem,
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

    .container {
        @extend %container;
        padding-top: 80px;
        display: flex;
        // background: #f0f0f0;
    }

    .service {
        width: 380px;
        
    }

</style>