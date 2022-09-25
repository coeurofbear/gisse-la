<template>
<div>
  <div class="container-fluid wrapper">
    <div class="row">
      <div class="col-12">
        <h1 class="main-title">Projects</h1>
      </div>
      <div class="col-12">
        <P5Sketch1 />
        <P5Sketch2 />
        <P5Sketch3 />
      </div>
      <div class="col-12 col-sm-6">
      <router-link class="" to="/">Go to home</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import P5Sketch1 from './p5sketchs/P5Sketch-1.vue'
import P5Sketch2 from './p5sketchs/P5Sketch-2.vue'
import P5Sketch3 from './p5sketchs/P5Sketch-3.vue'

export default {
  components: {
    P5Sketch1,
    P5Sketch2,
    P5Sketch3
  },
}
</script>
