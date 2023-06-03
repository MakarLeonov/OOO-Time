<template>
    <section>
        <p class="service_title">{{ SERVICE_ENTRY.name }}</p>
        <p class="description">{{ SERVICE_ENTRY.description }}</p>
        <p class="cost">Стоимость услуги: от {{ SERVICE_ENTRY.cost }}₽</p>
    </section>
</template>
<script>
export default {


    computed: {
        service_id() {
            return this.$route.params.id;
        },

        SERVICE_ENTRY() {
            return this.$store.getters.SERVICE_ENTRY;
        }
    },

    watch: {
        service_id() {
            this.GET_SERVICE_ENTRY();
        }
    },

    mounted() {
        this.GET_SERVICE_ENTRY()
    },

    methods: {
        GET_SERVICE_ENTRY() {  
            this.$store.dispatch('GET_SERVICE_ENTRY', this.service_id);
        }
    },
    
}
</script>
<style lang="scss" scoped>

    .service_title {
        
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 57px;
        display: flex;
        align-items: center;

        color: #000000;
    }
    .description {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: 10px;

        color: #494949;
    }
    .cost {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 20px;
        margin-top: 15px;

        color: #494949;
    }

</style>