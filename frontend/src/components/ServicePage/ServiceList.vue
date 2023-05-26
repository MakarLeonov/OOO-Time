<template>
    <div class="service">
        <div class="search-input">
            <input type="text" placeholder="Поиск по названию услуги...">
            <div class="search-button">
                <img src="@/assets/img/icons/search.png" alt="search">
            </div>
        </div>
        <v-service-item 
            v-for="(repair_type, index) in repair_types" 
            :key="index" 
            :repair_type="repair_type"
            />
    </div>
</template>
<script>
import vServiceItem from '@/components/ServicePage/vServiceItem.vue'
export default {
    components: {
        vServiceItem,
    },

    mounted() {
        this.$store.dispatch('GET_REPAIR_TYPES');
    },

    computed: {
        repair_types() {
            return this.$store.state.repair_types;
        }
    },
}
</script>
<style lang="scss" scoped>

    .service {
        width: 380px;   
        width: 22%;   
        margin-right: 30px;
    }

    .search-input {
        display: flex;

        & > input {
            width: 323px;
            height: 45px;

            background: #FFFFFF;
            border: 2px solid #000000;
            border-radius: 5px 0 0 5px;
            padding-left: 20px;
            font-size: 16px;
        }
    }

    .search-button {
        width: 60px;
        height: 45px;
        
        background: #1E1E1E;
        border: 1px solid #000000;
        border-radius: 0px 5px 5px 0px;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

</style>