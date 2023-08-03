<template>
  <img id="logo-menu" class="logo-menu" :src="image" alt="">
  <!-- <div v-html="require('@/assets/images/logo-full.svg')"/> -->
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 100
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    image () {
      return this.simple ? require('@/assets/images/logo.svg') : require('@/assets/images/logo-full.svg')
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