import { createApp } from 'vue'
import { i18n } from './plugins/i18n'
import { router } from './plugins/router'
import './style.css'
import App from './App.vue'
import Navbar from './components/Navbar.vue'

const app = createApp(App)

app.use(i18n)
app.use(router)

app.component('navbar', Navbar)


app.mount('#app')
