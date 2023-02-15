<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold my-6">{{ project.name }}</h1>
    <div class="flex">
      <img :src="project.image" class="w-32 h-32 rounded-full mr-6"/>
      <div>
        <p>{{ project.description }}</p>
        <p class="font-bold my-6">Argent collecté : {{ project.amount }}€</p>
        <daisy-progress :percentage="project.amount/1000 * 100"></daisy-progress>
        <button @click="fundProject" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Financer</button>
      </div>
    </div>

    <div class="my-6">
      <h2 class="text-xl font-bold mb-2">Commentaires</h2>
      <div v-for="comment in comments" :key="comment.id" class="flex items-start mb-4">
        <img :src="comment.user.avatar" class="w-12 h-12 rounded-full mr-4">
        <div class="flex-grow">
          <div class="flex justify-between">
            <p class="font-bold">{{ comment.user.name }}</p>
            <button class="text-red-500 hover:text-red-700" @click="reportComment(comment.id)">Signaler</button>
          </div>
          <p class="text-gray-600">{{ comment.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import companyImg from "@/assets/company.jpg";

export default {
  data() {
    return {
      project: {
        id: 1,
        name: "Projet A",
        image: companyImg,
        description:
          "Notre projet A vise à construire une nouvelle application pour faciliter la vie quotidienne des gens.",
        amount: 500
      },
      comments: [
        {
          id: 1,
          user: {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
          },
          content: "Super projet, j'ai hâte de voir le résultat!"
        },
        {
          id: 2,
          user: {
            name: "Jane Doe",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg"
          },
          content: "Bonne chance pour ce projet, j'espère qu'il sera un grand succès!"
        }
      ]
    };
  },
  methods: {
    reportComment(id: number) {
      // Ici, vous pouvez implémenter la logique pour signaler un commentaire
      alert(`Commentaire ${id} signalé`);
    },
    fundProject() {
      // Ici, vous pouvez implémenter la logique pour financer un projet
      alert(`Projet financé`);
    },
  created() {
    // Ici, vous pouvez appeler une API pour récupérer les détails du projet en fonction de l'ID
    // Ce peut être une fonction asynchrone
    // Exemple :
    // const id = this.$route.params.id;
    // this.project = await fetch(`/api/projects/${id}`).then(res => res.json());

    // Ici, vous pouvez appeler une API pour récupérer les commentaires en fonction de l'ID du projet
    // Ce peut être une fonction asynchrone
    // Exemple :
    // const id = this.$route.params.id;
    // this.comments = await fetch(`/api/projects/${id}/comments`).then(res => res.json());
 

  }
}};
</script>

<style>
</style>
