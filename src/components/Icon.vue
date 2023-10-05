<template>
  <InlineSvg
    class="icon"
    :style="colorObject"
    :class="icon"
    :height="size"
    :width="size"
    :src="require(`@/assets/images/icons/${icon}.svg`)"/>
</template>
<script>
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg
  },
  props: {
    size: {
      type: Number,
      default: 30
    },
    icon: {
      type: String,
      default: 'logo'
    },
    color: {
      type: String,
      default: '#FF753A'
    }
  },
  computed: {
    colorObject () {
      return this.color ? {'--color': this.color } : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  :deep(path:first-child) {
    fill: var(--color);
  }
}
</style>
