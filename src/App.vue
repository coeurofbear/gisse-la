<template>
  <div class="main">
    <router-link to="/">
      <Menu/>
    </router-link>
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