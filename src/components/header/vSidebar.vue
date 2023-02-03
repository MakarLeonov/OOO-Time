<template>
    <div class="sidebar">
      <nav>
          <router-link to="main" @click="this.$store.commit('showSidebar')">Главная страница</router-link>
          <router-link to="services" @click="this.$store.commit('showSidebar')">Наши услуги</router-link>
          <router-link to="prices" @click="this.$store.commit('showSidebar')">Наши цены</router-link>
          <router-link to="about" @click="this.$store.commit('showSidebar')">О нас</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'vSidebar'
}
</script>
<style lang="scss" scoped>
    
    @import '@/assets/assets.scss';
    .sidebar {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #fff;
        // background-color: $fon;
        padding-top: 50px;

        z-index: 1000;
    }

    nav {
        display: flex;
        flex-direction: column;

        & > a {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 20px 0;
            font-size: 20px;
            font-weight: 500;
            color: #3f3f3f;
            // color: #fff;
            

            &:hover {
                @extend %linkshover;
                // background-color: #3f3f3f;
            }
        }
    }

</style>