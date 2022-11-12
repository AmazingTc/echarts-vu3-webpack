import { createApp } from "vue";
import App from './App.vue'
import router from './router/index.js'

import flexible from './js/flexible'
import chinaJs from './js/china'

const app=createApp(App)
app.use(router)
app.mount('#app')