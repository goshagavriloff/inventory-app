import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSubModalStore = defineStore('submodal', {
  state: () => {
    return {
      isSubModal: false
    }
  },
  actions: {
    open() {
      this.isSubModal = true
    },
    close() {
      this.isSubModal = false
    }
  },
  getters: {
    get: (state) => {
      return state.isSubModal
    }
  }
})
