<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1>Hey!<br>I'm Gíssela</h1>
          <p class="large">I'm a Front-End developer and Designer from Chile based in Berlin.</p>
          <div v-if="false">
            <p>I have more than 4 years of experience developing in Vue.js and recently started learning Flutter. I have experience in Graphic and Web Design, UI/UX and branding too. Although Graphic Design is not my main focus anymore, I still consider myself one :).</p>
            <p>In my free time I like to ride my road bike, take analogue photos and learn german.</p>
            <p>Wanna know more?</p>
          </div>
          <router-link class="btn mrgn-tp" to="/about">About me</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.center-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>