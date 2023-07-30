<template>
  <div class="top-bar">
    <Logo v-if="false" />
    <SandwichMenuIcon class="wrap" />
  </div>
</template>

<script>
import SandwichMenuIcon from './SandwichMenuIcon.vue'
import Logo from './Logo.vue'

export default {
  components: {
    SandwichMenuIcon,
    Logo
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
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 35px 0;
}
</style>