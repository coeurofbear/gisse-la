<template>
  <div @click.native="isOpen = !isOpen;">
    <div class="line" :class="{open: isOpen}"/>
    <div class="line" :class="{open: isOpen}"/>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/variables/all.scss';
.line {
  background: $cream;
  height: 3px;
  border-radius: 5px;
  width: 40px;
  transition: all .25s ease;

  &:nth-child(1) {
    margin-bottom: 5px;
    transform: rotate(0);
  }
  &:nth-child(2) {
    transform: rotate(0);
  }

  &.open {
    &:nth-child(1) {
      transform: rotate(45deg);
      margin-bottom: -3px;
    }
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
}

.open {
  .line {
    
    &:nth-child(1) {
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
}
</style>