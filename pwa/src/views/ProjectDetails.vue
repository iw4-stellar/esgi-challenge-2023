<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold my-6">{{ project.name }}</h1>
    <div class="flex">
      <img :src="project.image" class="w-32 h-32 rounded-full mr-6"/>
      <div>
        <p>{{ project.description }}</p>
        <p class="font-bold my-6">Argent collecté : {{ project.amount }}€</p>
        <daisy-progress :percentage="project.amount/1000 * 100"></daisy-progress>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DaisyProgress } from 'daisyui';
import companyImg from "@/assets/company.jpg";

export default {
  components: {
    DaisyProgress
  },
  data() {
    return {
      project: {
        id: 1,
        name: "Projet A",
        image: companyImg,
        description:
          "Notre projet A vise à construire une nouvelle application pour faciliter la vie quotidienne des gens.",
        amount: 500
      }
    };
  },
  created() {
    // Ici, vous pouvez appeler une API pour récupérer les détails du projet en fonction de l'ID
    // Ce peut être une fonction asynchrone
    // Exemple :
    // const id = this.$route.params.id;
    // this.project = await fetch(`/api/projects/${id}`).then(res => res.json());
  }
};
</script>

<style>
</style>
