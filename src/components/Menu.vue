<template>
  <div class="top-bar">
    <Icon @click="switchDarkMode" :icon="darkMode ? 'bulb' : 'bulb-off'" color="#EAC435" class="cursor"/>
    <router-link to="/">
      <Icon :size="90" icon="logo-full" color="#EAC435"/>
    </router-link>
    <SandwichMenuIcon />
  </div>
</template>

<script>
import SandwichMenuIcon from './SandwichMenuIcon.vue'
import Icon from '@/components/Icon.vue'

export default {
  components: {
    SandwichMenuIcon,
    Icon
  },
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    switchDarkMode () {
      this.darkMode = !this.darkMode
      const main = document.querySelector('#app .main')
      main.classList.toggle('dark')
    }
  }
}
</script>
<style scoped lang="scss">
.top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 35px;
  align-items: center;
}
</style>