<template >
    <header>
      <div class="container">
        <div class="logo">
          <router-link to="main">
            <!-- <img src="@/assets/img/log o.png" alt="logo"> -->
            ООО Тайм</router-link>
        </div>
        <nav v-if="this.$store.state.screenWidth > 1000">
          <router-link to="/main">Главная</router-link>
          <router-link to="/services">Услуги</router-link>
          <router-link to="/about">О нас</router-link>
          <my-button-black @click="$router.push('/auth')">Авторизоваться</my-button-black>
          
        </nav>
        <v-burger-element v-else @click="this.$store.commit('showSidebar')" />
      </div>
    </header>
    <transition name="slide-fade">
      <v-sidebar v-if="this.$store.state.isSidebarActive"/>
    </transition>
  </template>
<script>
import vSidebar from "@/components/header/vSidebar.vue"
import vBurgerElement from "@/components/header/vBurgerElement.vue"
import MyButtonBlack from "@/components/UI/MyButtonBlack.vue";

export default {
  name: 'vHeader',
  components: {
    vSidebar, vBurgerElement, MyButtonBlack
  },

  mounted() {
    this.$store.commit('SET_USER_TO_STATE')
    console.log(this.$store.state.user)
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/assets.scss';

header {
  width: 100%;
  height: 80px;
  background-color: $fon;
  display: flex;
  align-items: center;
  

  .container {
    @extend %container;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
      font-weight: 500;
      font-size: 32px;
      // -webkit-filter: invert(100%);
      // filter: invert(100%);

      & > a {
        color: #fff;
      }

      & > a:hover {
        @extend %linkshover;
      }
    }

    nav > a {
      font-size: 22px;
      font-weight: 400;
      margin-right: 40px;
      color: #fff;

      // &:hover {
      //  @extend %linkshover;
      // }

      &.router-link-active {
        @extend %linkshover;
      }
    }

    .menu {
      font-size: 40px;
      display: inline-block;
      
      &:hover {
       @extend %linkshover;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  // opacity: 0;
}




.no-mode-fade-leave-active {
  transition: opacity .3s 
}
.no-mode-fade-enter-active {
  transition: opacity 3s ease-out
}

.no-mode-fade-enter-from, .no-mode-fade-leave-to {
  opacity: 0
}



// .burger{
//   position: relative;
// }


@media (max-width: 1300px) {
  header .container .logo[data-v-efe28a9e] {
    font-size: 30px;
    }
}

@media (max-width: 900px) {
  header .container .logo[data-v-efe28a9e] {
    font-size: 29px;
    }
}

@media (max-width: 750px) {
  header .container .logo[data-v-efe28a9e] {
    font-size: 28px;
    }
}

@media (max-width: 500px) {
  header .container .logo[data-v-efe28a9e] {
    font-size: 27px;
    }
}

@media (max-width: 400px) {
  header .container .logo[data-v-efe28a9e] {
    font-size: 25px;
    }
}

</style>