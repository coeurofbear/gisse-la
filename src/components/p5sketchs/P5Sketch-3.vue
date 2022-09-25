<template>
  <VueP5
    @setup="setup"
    @draw="draw"
  />
</template>

<script>
import VueP5 from 'vue-p5'

export default {
  components: {
    VueP5
  },
  data() {
    return {
      linesCanvasWidth: 0,
      linesCanvasHeight: 0,
      distanceBetweenLines: 10,
      yoff: 0.0,
      margin: 10,
    }
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(800, 400);
      this.linesCanvasWidth = 800 - (this.margin * 2)
      this.linesCanvasHeight = 400 - (this.margin * 2)
    },
    draw(sketch) {
      // noLoop()
      let xoff = 0.0;
      sketch.background(240);
      sketch.strokeWeight(0.5);
      sketch.stroke(50, 100, 255);
      sketch.noFill();
      
      for (let y = 0; y <= this.linesCanvasHeight; y += this.distanceBetweenLines) {
        
        sketch.beginShape();

        for (let x = 0; x <= this.linesCanvasWidth; x += this.distanceBetweenLines) {
          let noiseScale = sketch.map(sketch.noise(x * xoff, this.yoff), 0, 1, -15, 15)
          sketch.curveVertex(x + this.margin, (y + noiseScale) + this.margin);
          // curveVertex(x + margin, y + x + margin);
          xoff += 0.00002;
        }
        
        this.yoff += 0.0001;
        sketch.endShape();
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