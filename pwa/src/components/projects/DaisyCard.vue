<template>
    <div class="card bg-white rounded shadow-lg">
      <img :src="image" alt="Project image" class="w-full h-64 object-cover rounded-t" />
      <div class="px-6 py-4">
        <h3 class="font-bold text-xl mb-2">{{ title }}</h3>
        <p class="text-gray-700 text-base">{{ description }}</p>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    },
    
  };
  </script>
  
  <style>
  </style>
  