import { defineStore } from 'pinia'
import { axios } from '../plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLogged: false,
    };
  },
  actions: {
    async register(form: { email: string, password: string }) {
      const { data } = await axios.post('/register', form)
    },
    async login(form: { username: string, password: string }) {
      const { data } = await axios.post('/login_check', form);
      this.saveToken(data.token);
      this.isLogged = true;

      return data;
    },
    logout() {
      this.$reset();

      localStorage.removeItem('token');
    },
    saveToken(token: string) {
      if (window.localStorage)
        localStorage.setItem("token", token);
    },
  }
});