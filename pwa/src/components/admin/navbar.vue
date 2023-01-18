<!-- Créer une barre de navigation pour le panel admin -->

<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#">
            Admin Dashboard
          </a>
          <button @click="toggleNavbar" class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">
                <i class="fas fa-home text-lg leading-lg text-white opacity-75" /><span class="ml-2">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">
                <i class="fas fa-cog text-lg leading-lg text-white opacity-75" /><span class="ml-2">Settings</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">
                <i class="fas fa-sign-out-alt text-lg leading-lg text-white opacity-75" /><span class="ml-2">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  export default {
      name: 'admin-navbar',
    data() {
      return {
        showMenu: false
      };
    },
    methods: {
      toggleNavbar() {
        this.showMenu = !this.showMenu;
      }
    }
  };
  </script>