<template>
  <div class="main">
    <Menu/>
    <Logo :height="300" class="center-logo"/>
    <!-- <router-link to="/projects">Go to Projects</router-link> -->
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Menu,
    Logo
  }
}
</script>

<style scoped lang="scss">
.center-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.main {
  height: 100dvh;
}
</style>