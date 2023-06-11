<template>
    <div class="service">
        <v-service-item 
            v-for="(repair_type, index) in repair_types" 
            :key="index" 
            :repair_type="repair_type"
            />
        <div class="loader">
            <my-loader v-if="!repair_types.length"/>
        </div>
    </div>
</template>
<script>
import vServiceItem from '@/components/ServicePage/vServiceItem.vue'
import MyLoader from "@/components/UI/MyLoader.vue"
export default {
    components: {
        vServiceItem, MyLoader
    },

    mounted() {
        this.$store.dispatch('GET_REPAIR_TYPES');
    },

    computed: {
        repair_types() {
            return this.$store.getters.REPAIR_TYPES;
        }
    },

}
</script>
<style lang="scss" scoped>

    .service {

        position: sticky;
        top: 15px;
    }
    
</style>