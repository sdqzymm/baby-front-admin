import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import register from './register'
import 'normalize.css'
import 'vfonts/Lato.css'
import '@/assets/css/index.scss'
// import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(register)

app.mount('#app')
