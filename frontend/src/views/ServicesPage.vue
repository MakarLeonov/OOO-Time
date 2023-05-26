<template>
    <section class="container">
        <service-list />
        <service-info />
    </section>
</template>
<script>
import ServiceList from '@/components/ServicePage/ServiceList.vue'
import ServiceInfo from '@/components/ServicePage/ServiceInfo.vue'
export default {
    components: {
        ServiceList, ServiceInfo
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
</style>