<template>
<div>
  <div class="container-fluid wrapper">
    <div class="row">
      <div class="col-12">
        <h1 class="main-title">Projects</h1>
      </div>
      <div class="col-12">
        <P5Sketch1 v-if="false"/>
        <P5Sketch2 v-if="false"/>
        <P5Sketch3 v-if="false"/>
      </div>
      <div class="col-12">
        <h2>p5 projects</h2>
        <masonry
          class="gallery"
          :cols="3"
          :gutter="2"
          >
          <router-link
            to="/"
            class="box"
            :class="`box-${index+1}`"
            v-for="(item, index) in items"
            :key="index">
              <div class="image">
                <img :src="item.image" alt="">
              </div>
              <div class="hover">
                Item {{index + 1}}: {{ item.text }}
              </div>
            </router-link>
        </masonry>
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
  data() {
    return {
      // items: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
      items: [
        { image: require('@/assets/images/circles.png'), text: 'p5 circle project', url: '/' },
        { image: '', text: '', url: '/' },
        { image: '', text: '', url: '/' },
        { image: '', text: '', url: '/' },
        { image: '', text: '', url: '/' },
        { image: '', text: '', url: '/' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.gallery {
  margin-bottom: 100px;
}
h2 {
  color: white;
  margin-bottom: 30px;
}

.box {
  // background: red;
  border: 1px solid black;
  margin-bottom: 2px;
  display: block;

  // &-1 {
  //   height: 150px;
  // }
  &-2 {
    height: 90px;
  }
  &-3 {
    height: 120px;
  }
  &-4 {
    height: 150px;
  }
  &-5 {
    height: 60px;
  }
  &-6 {
    height: 170px;
  }
}
</style>