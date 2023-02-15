<script setup lang="ts">
import FunHeader from './components/Header.vue';
</script>

<template>
  <div class="app">
    <fun-header />
    <main class="p-8">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

</style>
