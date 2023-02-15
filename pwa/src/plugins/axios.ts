import Axios from 'axios'

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

axios.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('token');

      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
  },

  (error) => {
      return Promise.reject(error);
  }
);