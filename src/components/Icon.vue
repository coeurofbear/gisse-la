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

svg {
  transition: .8s;

  :deep(stop) {
    transition: .8s;
  }
  &.logo-full {
    :deep(.stop1),
    :deep(.stop3) {
      stop-color: var(--color);
    }
    &:hover {
      filter: blur(2px);

      :deep(.stop1) {
        stop-color: #22c1c3;
      }
      :deep(.stop3) {
        stop-color: #eeaeca;
      }
    }
    :deep(path:first-child) {
      fill: url(#gradient-svg) var(--color);
    }
  }
  &:not(.logo-full) :deep(path:first-child) {
    fill: var(--color);
  }
}
</style>
