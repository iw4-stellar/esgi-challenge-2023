<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold my-6">Liste de projets</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <daisy-card
          v-for="project in projects"
          :key="project.id"
          :title="project.name"
          :description="project.description"
          :image="project.image"
          class="col-span-1"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import DaisyCard from "./DaisyCard.vue";
  import companyImg from '@assets/company.jpg';
  
  export default {
    components: {
      DaisyCard
    },
    data() {
      return {
        projects: [
          {
            id: 1,
            name: "Projet A",
            image: "../",
            description: "Notre projet A vise à construire une nouvelle application pour faciliter la vie quotidienne des gens."
          },
          {
            id: 2,
            name: "Projet B",
            image: "https://example.com/project-b.jpg",
            description: "Notre projet B vise à construire un nouveau produit écologique pour aider à protéger l'environnement."
          },
          {
            id: 3,
            name: "Projet C",
            image: '@/assets/youtube.png',
            description: "Notre projet C vise à construire un système de santé plus accessible pour les personnes défavorisées."
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  </style>
  