<script setup lang="ts">
import FunHeader from './components/Header.vue';
</script>

<template>
  <div class="app">
    <fun-header />
    <div class="navbar">
      <ul class="menu menu-horizontal">
        <li>
          <router-link to="/projects">
            {{ $t('app.menu.projects') }}
          </router-link>
        </li>
      </ul>
    </div>
    <main class="p-8">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

</style>
