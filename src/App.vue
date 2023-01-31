<template>
  <div>
    <my-header />
    <router-view />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'

  export default {
    components: {
      MyHeader,
    }
      
  }
</script>

<style lang="scss">
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

      & > a:hover {
        color: $orange;
        transition: all .2s;
      }
    }

    nav > a {
      font-size: 22px;
      font-weight: 400;
      margin-left: 50px;

      &:hover {
        color: $orange;
        transition: all .2s;
      }
    }
  }


}

</style>
