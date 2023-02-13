<script setup lang="ts">
import { useAppStore } from './store/app';

const store = useAppStore()

const { name } = store;

</script>

<template>
  <div class="app">
    <header class="navbar border-b-2 border-b-primary">
      <div class="navbar-start">
        <router-link to="/" class="text-primary font-bold">{{ name }}</router-link>
      </div>
      <div class="navbar-end">
        <router-link to="/login" class="btn btn-ghost">Login</router-link>
        <router-link to="/register" class="btn btn-ghost">Register</router-link>
      </div>
    </header>
    <main class="p-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
