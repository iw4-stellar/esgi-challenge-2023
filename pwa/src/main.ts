import { createApp } from 'vue'
import { i18n } from './plugins/i18n'
import { router } from './plugins/router'
import { axios } from './plugins/axios'
import { pinia } from './plugins/pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(pinia)

app.config.globalProperties.$api = axios;

app.mount('#app')
