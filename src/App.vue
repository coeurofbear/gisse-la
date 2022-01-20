<template>
  <div id="app">
    <Init/>
  </div>
</template>

<script>
import Init from './components/Init.vue'

export default {
  name: 'App',
  components: {
    Init
  }
}
</script>

<style>
body {
  /* background: rgb(18,119,177); */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff20;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, rgba(18,119,177,1) 0%, rgba(255,143,0,0.38279061624649857) 100%);
	background-size: 150% 150%;
	animation: rotation 10s ease infinite;
	height: 100vh;
  margin: 0;
}

/* @keyframes rotation {
  0% {
    background: linear-gradient(0deg, rgba(18,119,177,1) 0%, rgba(208,31,110,1) 40%, rgba(0,247,255,1) 100%);
  }
  100% {
    background: linear-gradient(270deg, rgba(18,119,177,1) 0%, rgba(208,31,110,1) 40%, rgba(0,247,255,1) 100%);
  }
} */

@keyframes rotation {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
