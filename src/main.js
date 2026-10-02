import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1. Piniaを読み込む
import './style.css'
import App from './App.vue'
import router from './router' // 1. 作成したルーターを読み込む

const app = createApp(App)
const pinia = createPinia() // 2. Piniaインスタンスを作成

app.use(pinia) // 3. アプリに登録
app.use(router) // 2. Vueアプリに登録
app.mount('#app')