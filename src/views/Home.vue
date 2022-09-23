<template>
  <div class="main">
    <HomeContent />
    <Bg />
  </div>
</template>

<script>
import HomeContent from '@/components/HomeContent.vue'
import Bg from '@/components/Background.vue'

export default {
  name: 'Home',
  components: {
    HomeContent,
    Bg
  }
}
</script>
