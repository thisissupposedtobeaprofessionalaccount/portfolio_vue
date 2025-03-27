import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainPage from './components/MainPage.vue'
import ProjectDetailsPage from './components/ProjectDetailsPage.vue'

const pinia = createPinia()

const routes = [
  { path: '/', component: MainPage },
  { path: '/projects', component: ProjectDetailsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
