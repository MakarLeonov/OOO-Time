<template>
    <main>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
</template>
<script>
import MyTitle from '@/components/UI/MyTitle.vue'
export default {
    components: {
        MyTitle
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/assets.scss";

main {
    width: 90%;
    height: 600px;
    margin: 0 auto;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease-in-out;
}

</style>