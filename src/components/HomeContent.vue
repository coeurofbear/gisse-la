<template>
  <div class="wrapper">
    <h1>This is the beginning of my portfolio.</h1>
    <div class="bottom">
      <router-link to="/projects">Go to Projects</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~@/assets/css/all.scss';

h1 {
  font-size: 120px;
  color: white;
  margin-bottom: 40px;
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