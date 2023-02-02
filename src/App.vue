<template>
  <div>
    <v-header />
    
    <router-view />
  </div>
</template>

<script>
import vHeader from '@/components/header/vHeader.vue'

  export default {
    components: {
      vHeader,
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

.sidebar {
  position: fixed;
  width: 250px;
  height: 100%;
  background-color: #fff;
}



</style>
