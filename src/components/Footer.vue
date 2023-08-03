<template>
  <footer class="container footer">
    <div class="row">
      <div class="col-6 info">
        <Logo simple class="logo"/>
        <p class="small italic">{{ new Date().getFullYear() }}</p>
      </div>
      <div class="col-6">
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
<style scoped lang="scss">
.footer {
  padding-top: 2rem;
  padding-bottom: 1rem;
  align-self: flex-end;
}
.info {
  display: flex;
  align-items: center;
}
.logo {
  margin-right: .5rem;
}
</style>