<template>
  <div :class="{dark: dark}" class="sk-chase">
    <div class="sk-chase-dot" />
    <div class="sk-chase-dot" />
    <div class="sk-chase-dot" />
    <div class="sk-chase-dot" />
    <div class="sk-chase-dot" />
    <div class="sk-chase-dot" />
  </div>
</template>
<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

.sk-chase {
    width: 60px;
    height: 60px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both
}

.sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2.0s infinite ease-in-out both
}

.sk-chase-dot:before {
    // @include bg-color(smm-brand);
    background: lightgreen;

    content: '';
    display: block;
    width: 25%;
    height: 25%;
    border-radius: 100%;
    animation: sk-chase-dot-before 2.0s infinite ease-in-out both
}
.dark {
    .sk-chase-dot:before {
        // @include bg-color(forest-dark-20);
        background: darkgreen;
    }
}

.sk-chase-dot:nth-child(1) {
    animation-delay: -1.1s
}

.sk-chase-dot:nth-child(2) {
    animation-delay: -1.0s
}

.sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s
}

.sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s
}

.sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s
}

.sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s
}

.sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s
}

.sk-chase-dot:nth-child(2):before {
    animation-delay: -1.0s
}

.sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s
}

.sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s
}

.sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s
}

.sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s
}

@keyframes sk-chase {
    100% {
        transform: rotate(360deg)
    }
}

@keyframes sk-chase-dot {
    80%, 100% {
        transform: rotate(360deg)
    }
}

@keyframes sk-chase-dot-before {
    50% {
        transform: scale(0.4)
    }

    100%, 0% {
        transform: scale(1)
    }
}

#spinners {
    width: 1400px;
    height: 60px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left;
    font-size: 0;
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

</style>
