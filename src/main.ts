import { createPinia } from "pinia";
import { createApp } from "vue";
import { createMemoryHistory, createRouter } from 'vue-router'

// ИМПОРТ КОМПОНЕНТОВ
import App from "./App.vue";
import Home from './components/Home.vue'
import About from './components/About.vue'
import Basket from './components/Basket.vue'
import Sendorder from './components/Sendorder.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const routes = [
    { path: '/', component: Home },
    { path: '/basket', component: Basket },
    { path: '/sendorder', component: Sendorder },
    { path: '/:id', component: About },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
