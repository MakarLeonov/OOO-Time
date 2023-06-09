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
        text-align: justify;

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

        transition: all .2s ease;
    }

    @media (max-width: 1300px) {
        .service_title {
            font-size: 34px;
            line-height: 46px;
        }
        .description {
            font-size: 19px;
        }
        .cost {
            font-size: 22px;
        }
    }

    @media (max-width: 650px) {
        .service_title {
            line-height: 40px;
        }
        .description {
            margin-top: 5px;
        }
        .cost {
            font-size: 22px;
        }
    }

    @media (max-width: 500px) {
        .service_title {
            line-height: 40px;
            font-size: 31px;
        }
        .description {
            margin-top: 5px;
            font-size: 19px;
        }
    }

    @media (max-width: 450px) {
        .service_title {
            font-size: 29px;
        }
        .description {
            margin-top: 5px;
            font-size: 19px;
        }
        .cost {
            font-size: 22px;
        }
    }

    @media (max-width: 389px) {
        .service_title {
            font-size: 27px;
        }
    }

    @media (max-width: 360px) {
        .service_title {
            font-size: 26px;
        }
    }

    @media (max-width: 350px) {
        .service_title {
            font-size: 26px;
        }
        .description {
            margin-top: 5px;
            font-size: 18px;
        }
    }

    @media (max-width: 340px) {
        .service_title {
            font-size: 25px;
        }
        .description {
            margin-top: 5px;
            font-size: 18px;
        }
    }

</style>