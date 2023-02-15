import { defineStore } from 'pinia'
import { axios } from '@/plugins/axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    name: 'Funded',
    user: null,
  }),
  actions: {
    async profile() {
      const { data } = await axios.get('/me');

      this.user = data;
    },
    async patchUser(id: number, userData: object) {
      const { data } = await axios.patch(`/users/${id}`, userData)

      return data;
    },
  }
})