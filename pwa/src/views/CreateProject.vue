<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold my-6">Créer un nouveau projet</h1>
      <form @submit.prevent="createProject">
        <div class="my-4">
          <label class="block font-bold mb-2" for="name">Nom du projet :</label>
          <input v-model="project.name" type="text" id="name" class="w-full p-2 border border-gray-400 rounded"/>
        </div>
        <div class="my-4">
          <div class="my-4">
          <label class="block font-bold mb-2" for="category">Catégorie :</label>
          <select v-model="project.category" class="w-full p-2 border border-gray-400 rounded">
          <option disabled value="">Sélectionnez une catégorie</option>
          <option value="art">Art</option>
          <option value="design">Design</option>
          <option value="mode">Mode</option>
          <option value="musique">Musique</option>
          <option value="photographie">Photographie</option>
          <option value="technologie">Technologie</option>
        </select>
        </div>
          <label class="block font-bold mb-2" for="description">Description :</label>
          <textarea v-model="project.description" id="description" class="w-full p-2 border border-gray-400 rounded"></textarea>
        </div>
        <div class="my-4">
          <label class="block font-bold mb-2" for="amount">Montant souhaité :</label>
          <input v-model.number="project.amount" type="number" id="amount" class="w-full p-2 border border-gray-400 rounded"/>
        </div>
        <div class="my-4">
            <label class="block font-bold mb-2" for="image">Image :</label>
            <input @change="handleImageUpload" type="file" id="image" class="w-full p-2 border border-gray-400 rounded"/>
        </div>
        <div class="my-4">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Créer le projet</button>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        project: {
          name: "",
          description: "",
          amount: 0,
          image: "",
          category: ""
        }
      };
    },
    methods: {
      createProject() {
        console.log(this.project);
        // Vous pouvez appeler une API pour créer un nouveau projet ici
      },
      handleImageUpload(event: any) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.project.image = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
    }
  });
  </script>
  
  <style>
  </style>
  