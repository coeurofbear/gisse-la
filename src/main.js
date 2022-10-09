import App from './App.vue'
import router from './router/index.js'
import VueMasonry from 'vue-masonry-css'
import { createApp } from 'vue'

const app = createApp(App)
app.use(router)
app.use(VueMasonry)

app.mount('#app')