import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => {
    return {
      isModal: false
    }
  },
  actions: {
    open() {
      this.isModal = true
    },
    close() {
      this.isModal = false
    }
  },
  getters: {
    get: (state) => {
      return state.isModal
    }
  }
})
