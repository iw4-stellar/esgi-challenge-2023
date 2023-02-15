import { defineStore } from 'pinia'
import { axios } from '@/plugins/axios'
import type { UserType } from '../../types';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLogged: false,
      token: null as string | null,
    };
  },
  actions: {
    async register(
      form: {
        email: string,
        password: string,
        userType: UserType,
      }) {
      const { data } = await axios.post('/register', form)

      return data
    },
    async login(form: { username: string, password: string }) {
      const { data } = await axios.post('/login_check', form);

      this.isLogged = true;
      this.token = data.token;

      localStorage.setItem("token", data.token)

      return data;
    },
    logout() {
      this.$reset();

      localStorage.removeItem('token');
    },
  }
});