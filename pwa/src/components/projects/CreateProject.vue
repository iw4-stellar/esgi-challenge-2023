<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold my-6">Créer un nouveau projet</h1>
      <form @submit.prevent="createProject">
        <div class="my-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Nom du projet
          </label>
          <input
            class="form-input rounded-md shadow-sm mt-1 block w-full"
            id="name"
            type="text"
            v-model="project.name"
            required
          />
        </div>
  
        <div class="my-4">
          <label class="block text-gray-700 font-bold mb-2" for="description">
            Description du projet
          </label>
          <textarea
            class="form-input rounded-md shadow-sm mt-1 block w-full"
            id="description"
            v-model="project.description"
            required
          ></textarea>
        </div>
  
        <div class="my-4">
          <label class="block text-gray-700 font-bold mb-2" for="image">
            Image du projet
          </label>
          <input
            class="form-input rounded-md shadow-sm mt-1 block w-full"
            id="image"
            type="text"
            v-model="project.image"
            required
          />
        </div>
  
        <div class="my-4">
          <label class="block text-gray-700 font-bold mb-2" for="goal">
            Objectif de financement (en euros)
          </label>
          <input
            class="form-input rounded-md shadow-sm mt-1 block w-full"
            id="goal"
            type="number"
            v-model="project.goal"
            required
          />
        </div>
  
        <div class="my-4">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Créer
          </button>
        </div>
      </form>
    </div>
  </template>

<script lang="ts">
export default {
  data() {
    return {
      project: {
        name: "",
        description: "",
        image: "",
        goal: 0,
        amount: 0,
      },
    };
  },
  methods: {
    async createProject() {
      try {
        const response = await fetch("/api/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.project),
        });
        const project = await response.json();
        this.$router.push({ name: "ProjectDetails", params: { id: project.id } });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
