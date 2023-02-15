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
        @click="goToProject(project.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import DaisyCard from "../components/projects/DaisyCard.vue";
import companyImg from "@/assets/company.jpg";

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
          image: companyImg,
          description: "Notre projet A vise à construire une nouvelle application pour faciliter la vie quotidienne des gens.",
        },
        {
          id: 2,
          name: "Projet B",
          image: companyImg,
          description: "Notre projet B vise à construire un nouveau produit écologique pour aider à protéger l'environnement."
        },
        {
          id: 3,
          name: "Projet C",
          image: companyImg,
          description: "Notre projet C vise à construire un système de santé plus accessible pour les personnes défavorisées."
        },
        {
          id: 4,
          name: "Projet D",
          image: companyImg,
          description: "Notre projet D vise à construire un système de santé plus accessible pour les personnes défavorisées."
        }
      ],
    };
  },
  methods: {
    goToProject(id: number) {
      this.$router.push({ path: `/projects/${id}` });
    }
  }
};
</script>

<style>
</style>
