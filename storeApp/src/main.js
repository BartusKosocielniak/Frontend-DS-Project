import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from "./store/index01"

createApp(App).use(router).use(store).mount('#app')
