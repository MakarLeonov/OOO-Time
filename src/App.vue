<template>
  <v-header />
    
    <router-view class="main"/>

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



</style>
