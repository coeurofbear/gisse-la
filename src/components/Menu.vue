<template>
  <div class="top-bar">
    <router-link to="/">
      <Icon :size="90" icon="logo-full" color="#EAC435"/>
    </router-link>
    <SandwichMenuIcon class="wrap" />
  </div>
</template>

<script>
import SandwichMenuIcon from './SandwichMenuIcon.vue'
import Icon from '@/components/Icon.vue'

export default {
  components: {
    SandwichMenuIcon,
    Icon
}
}
</script>
<style scoped lang="scss">
.wrap {
  padding: 15px 0;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
}
.top-bar {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 35px 0;
  align-self: self-start;
}
</style>