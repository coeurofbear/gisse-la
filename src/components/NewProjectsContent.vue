<template>
  <div>    
    <Logo v-if="false" :height="300" class="center-logo"/>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <h1>Hey!</h1>
          <p class="large">This page is under construction</p>
          <router-link class="btn" to="/">Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
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
</style>