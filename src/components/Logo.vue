<template>
  <div>
    <img id="logo-menu" class="logo-menu" src="@/assets/images/logo-full.svg" alt="">
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 100
    }
  },
  mounted() {
    const logo = document.getElementById('logo-menu')
    logo.style.setProperty('--height', `${this.height}px`)
  }
}
</script>

<style scoped lang="scss">
.logo-menu {
  height: var(--height);
}
</style>