<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-6 info">
          <Icon color="#EAC435" />
          <p class="small italic">{{ new Date().getFullYear() }}</p>
        </div>
        <div class="col-6">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  components: {
    Icon
  }
}
</script>
<style scoped lang="scss">
.footer {
  padding: 1rem 0;
  margin-top: 2rem;
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