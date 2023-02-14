<template>
    <div class="flex flex-col bg-white rounded shadow-lg">
      <img :src="image" class="w-full h-48 object-cover rounded-t" />
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
        <p class="text-gray-600 mb-4">{{ description }}</p>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="makeDonation">
          Faire un don
        </button>
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
    methods: {
      makeDonation() {
        alert("Donation made!");
      }
    }
  };
  </script>
  
  <style>
  </style>
  