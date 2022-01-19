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
  color: #919ec0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  /* background: linear-gradient(45deg, rgba(18,119,177,1) 0%, rgba(208,31,110,1) 40%, rgba(0,247,255,1) 100%); */
  background: linear-gradient(45deg, rgba(18,119,177,1) 0%, rgba(255,143,0,0.38279061624649857) 100%);
	background-size: 200% 200%;
	animation: rotation 10s ease infinite;
	height: 100vh;
  /* animation: rotation 2s infinite; */
  /* animation-iteration-count: infinite; */
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
