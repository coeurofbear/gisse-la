<template>
  <div>
    <div class="bg"></div>
    <div class="border"></div>
  </div>
</template>

<style lang="scss" scope>
@import '~@/assets/css/all.scss';

.bg {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  border-radius: 5px;
  background: linear-gradient(120deg, rgba(18,119,177,1) 0%, rgba(255,143,0,0.38279061624649857) 100%);
	background-size: 150% 150%;
	animation: rotation 10s ease infinite;
}

.border {
  position: fixed;
  top: 0;
  left: 0;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  border: 10px solid white;
  border-radius: 16px;
  outline: white solid 10px;
  z-index: -1;
}

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
