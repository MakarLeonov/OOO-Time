<template>
    <div class="sidebar">
      <nav>
          <router-link to="/main" @click="this.$store.commit('showSidebar')">Главная страница</router-link>
          <router-link to="/services" @click="this.$store.commit('showSidebar')">Цены и услуги</router-link>
          <router-link to="/about" @click="this.$store.commit('showSidebar')">О компании</router-link>
          <router-link to="/auth" @click="this.$store.commit('showSidebar')" v-if="!this.$store.getters.authorized">Авторизоваться</router-link>
          <a href="#" @click="this.$store.dispatch('LOGOUT'), this.$store.commit('showSidebar')" v-else>Выйти из аккаунта</a>
        </nav>
    </div>
</template>
<script>
import MyButton from '../UI/MyButton.vue';
export default {
    name: 'vSidebar',
    components: { MyButton }
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
    margin-top: 80px;
    padding-top: 25px;

    z-index: 1000;
}

nav {
    height: 100%;
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

        &.router-link-active {
            @extend %linkshover;
        }
    }
}
</style>