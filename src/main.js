import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import WorkPage from './components/WorkPage.vue'

const pinia = createPinia()

const routes = [
  { path: '/', component: App },
  { path: '/projects', component: WorkPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
