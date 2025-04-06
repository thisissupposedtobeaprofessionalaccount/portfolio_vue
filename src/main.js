import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainPage from './components/MainPage.vue'
import ProjectDetailsPage from './components/ProjectDetailsPage.vue'

const pinia = createPinia()

const routes = [
  { path: '/', component: MainPage , meta : { title : "Hugo's portfolio" }},
  { path: '/projects', component: ProjectDetailsPage, meta : { title : "Projects" } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
   scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
