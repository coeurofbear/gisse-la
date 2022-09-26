<template>
<div>
  <Loading v-if="!circles" />
  <VueP5
    v-else
    @setup="setup"
    @draw="draw"
  />
</div>
</template>

<script>
import VueP5 from 'vue-p5'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    VueP5,
    Loading
  },
  data() {
    return {
      circles: []
    }
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(1000, 500);
      sketch.noStroke()
    },
    draw(sketch) {
      sketch.noLoop()
      let protection = 0
      while (this.circles.length < 4000) {
        let circle = {
          x: sketch.random(sketch.width),
          y: sketch.random(sketch.height),
          r: sketch.random(4,45),
          c: sketch.color(sketch.random(0,255), sketch.random(0,255), sketch.random(0,255), 200)
        }

        let overLapping = false

        for (let j = 0; j < this.circles.length; j++) {
          let other = this.circles[j]
          let d = sketch.dist(circle.x, circle.y, other.x, other.y)

          if (d - (circle.r + other.r) < 0) {
            // they overlapping
            overLapping = true
            break
          }
        }

        if (!overLapping) {
          this.circles.push(circle)
        }

        protection++

        if (protection > 50000) {
          break
        }
      }
      for (let i = 0; i < this.circles.length; i++) {
        sketch.fill (this.circles[i].c)
        sketch.ellipse(this.circles[i].x, this.circles[i].y, this.circles[i].r*2, this.circles[i].r*2)
      }
    }
  }
}
</script>

<style lang="scss">
.p5Canvas {
  height: 100% !important;
  width: 100% !important;
}
</style>