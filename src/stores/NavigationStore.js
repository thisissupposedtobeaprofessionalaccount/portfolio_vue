// stores/counter.js
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => {
    return { page: 'landing' }
  },
  actions: {
    setPage(newPage) {
      this.page = newPage
    },
    gotoPage(newPage) {
      this.page = newPage
      document.getElementById(newPage)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
