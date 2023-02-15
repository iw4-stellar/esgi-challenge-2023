<template>
  <header class="fun-header navbar border-b-2 border-b-primary">
    <div class="navbar-start">
      <router-link to="/" class="text-primary font-bold">{{ name }}</router-link>
    </div>
    <div v-if="isLogged" class="navbar-end">
      <router-link to="/" @click="logout" class="btn btn-error">Logout</router-link>
    </div>
    <div v-else class="navbar-end">
      <router-link to="/login" class="btn btn-ghost">Login</router-link>
      <router-link to="/register" class="btn btn-ghost">Register</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';

export default defineComponent({
  name: 'FunHeader',
  setup() {
    const appStore = useAppStore();
    const { name } = appStore;

    const authStore = useAuthStore();
    const { logout } = authStore;
    const { isLogged } = storeToRefs(authStore);

    return {
      name,
      isLogged,
      logout,
    }
  },
});
</script>