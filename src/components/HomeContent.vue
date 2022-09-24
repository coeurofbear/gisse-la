<template>
  <div class="wrapper">
    <h1>This is the beginning of my portfolio.</h1>
    <!-- <div class="container">
      <div class="row">
        <div class="col-12 col-xl-6">
          hola
        </div>
        <div class="col-12 col-xl-6">
          hola
        </div>
      </div>
    </div> -->
    <div class="bottom">
      <router-link to="/projects">Go to Projects</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/variables/all.scss';

h1 {
  font-size: 120px;
  color: white;
  margin-bottom: 40px;

  @media #{$breakpoint-xl-down} {
    font-size: 80px;
  }
}
a {
  font-size: 25px;
  color: white;
}
.bottom {
  position: absolute;
  bottom: 3rem;
}
</style>