<template>
  <VueP5
    @preload="preload"
    @setup="setup"
    @draw="draw"
  />
</template>

<script>
import VueP5 from 'vue-p5'
import data from '@/assets/json/temp.json'

export default {
  components: {
    VueP5
  },
  data() {
    return {
      globalDataBerlin: [],
      distanceBerlin: 2,
      diameter: 250,
    }
  },
  methods: {
    getDataBerlin(data) {
      this.globalDataBerlin = data.days.map(v=> v.tempmax*10)
    },
    pieChart(diameter, data, position, sketch) {
      sketch.push()
      // sketch.noLoop()

      // rotation
      sketch.translate(sketch.width / position, sketch.height /2);
      sketch.rotate(270*(sketch.PI/180));
      sketch.translate(- (sketch.width / position), -(sketch.height /2));
      // rotation

      let angleProportion = 360/data.length
      // let degreeCalc = degreeCalcs(data)
      let lastAngle = 0;
      const highestValue = Math.max(...data)
      const lowestValue = Math.min(...data)
      for (let i = 0; i < data.length; i++) {
        let color = sketch.map(data[i], lowestValue, highestValue, 0, 255);
        sketch.fill(90, color, 150);
        sketch.arc(
          sketch.width/position,
          sketch.height/2,
          diameter,
          diameter,
          lastAngle,
          lastAngle + sketch.radians(angleProportion+0.5)
          );
          lastAngle += sketch.radians(angleProportion);
      }
      sketch.push()
    },
    preload() {
      this.getDataBerlin(data)
    },
    setup(sketch) {
      sketch.createCanvas(900, 300);
      sketch.noStroke()
    },
    draw(sketch) {
      // sketch.background(174, 218, 205);
      this.pieChart(this.diameter, this.globalDataBerlin, this.distanceBerlin, sketch)
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