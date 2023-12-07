<template>
    <div>
      <h1  v-if="user">Vous etes Connecté en tant que {{ user.nom }} {{ user.prenom }}</h1>
      <button @click="logout">Déconnexion</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const user = ref<any>(null);

  // Récupère le token de l'utilisateur depuis le localStorage
  const getUserInfo = () => {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  };
  
  onMounted(() => {
    user.value = getUserInfo();
    console.log('User info:', user.value);
  });
  
  const logout = async () => {
    try {
      // Envoie une requête de déconnexion au backend 
      // Efface le token du localStorage
      localStorage.removeItem('token');
  
      // Redirige vers la page de connexion
      router.push('/login');
    } catch (error) {
      console.error('Erreur de déconnexion :', error);
    }
  };
  </script>
  