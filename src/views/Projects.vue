<template>
  <div class="main">
    <ProjectsContent />
    <Bg />
  </div>
</template>

<script>
import ProjectsContent from '@/components/ProjectsContent.vue'
import Bg from '@/components/Background.vue'

export default {
  name: 'Projects',
  components: {
    ProjectsContent,
    Bg
  },

}
</script>
