<template>
  <div class="main">
    <Menu/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/css/project/all.scss';
</style>