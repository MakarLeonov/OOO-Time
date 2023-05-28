<template>
    <v-header />
    <!-- <router-view class="main"/> -->
    <router-view v-slot="{ Component }" class="main">
      <transition :name="[(this.$store.getters.screenWidth > 1000) ? 'fade' : !'fade']" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <v-footer />
</template>

<script>
import vHeader from '@/components/header/vHeader.vue'
import vFooter from '@/components/footer/vFooter.vue'

  export default {
    components: {
      vHeader, vFooter
    },

    data() {
      return {
        flag: true,
      }
    },

    created() {
      if(this.flag){
        this.flag = false;
        this.$store.commit('updateScreenWidth', window.innerWidth);
      }
      window.addEventListener('resize', () => {
        this.$store.commit('updateScreenWidth', window.innerWidth);
      });
    },
  }
</script>

<style lang="scss">
@import '@/assets/assets.scss';

.main {
  flex-grow: 1;
}

.sidebar {
  position: fixed;
  width: 250px;
  height: 100%;
  background-color: #fff;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease-in;
}

@media (max-width: 1000px) {
  header .container .logo[data-v-efe28a9e] {
    font-size: 30px;
    }
}
</style>
