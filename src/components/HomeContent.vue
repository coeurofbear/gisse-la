<template>
  <div class="wrapper">
    <h1 class="main-title">This is the beginning of my portfolio.</h1>
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
a {
  font-size: 25px;
  color: white;
}
.bottom {
  position: absolute;
  bottom: 3rem;
}
</style>