import { defineStore } from 'pinia'
import { ref } from 'vue'
import { axios } from '../plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLoading: false,
    }
  },
  actions: {
    async register(form: object) {
      this.isLoading = true

      try {
        const { data } = await axios.post('/auth/register', form)
        console.log(data)
      } finally {
        this.isLoading = false
      }


    },
  }
});