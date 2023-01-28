<script setup lang="ts">
import { useAppStore } from './store/app';

const store = useAppStore()

const { name } = store;

</script>

<template>
  <div class="app">
    <h1>{{ name }}</h1>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
