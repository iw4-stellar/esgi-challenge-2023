import { defineStore } from 'pinia'
import { ref } from 'vue'
import { axios } from '../plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
    };
  },
  actions: {
    async register(form: { email: string, password: string }) {
      const { data } = await axios.post('/register', form)
    },
  }
});