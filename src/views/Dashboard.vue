<template>
<div class="grid flex flex-row flex-wrap">
        <div class="col-12 md:col-2 colornav">
            <img style="width: fit-content" class="images" src="../assets/img/download.svg" alt="" />
            <Divider />
            <nav class="navbar">
                <ul class="list-none p-0 m-0 overflow-hidden flex flex-wrap md:flex-col">
                    <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round ">
                                <i class="pi pi-user mr-2 color"></i>
                                <span v-if="user" class="color">Bienvenue <strong class="capitalize">{{ user.prenom }}</strong></span>
                            </a>
                        </li>
                    <li>
                        <a v-ripple
                            class="flex align-items-center cursor-pointer p-3 border-round ">
                            <i class="pi pi-th-large mr-2 color"></i>
                            <span @click="dashboard" class=" color">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple
                            class="flex align-items-center cursor-pointer p-3 border-round ">
                            <i class="pi pi-list mr-2 color"></i>
                            <span class=" color">List of Organisations</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple
                            class="flex align-items-center cursor-pointer p-3 border-round ">
                            <i class="pi pi-server mr-2 color"></i>
                            <span @click="osolbase" class=" color">List of O'Sol Base</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple
                            class="flex align-items-center cursor-pointer p-3 border-round ">
                            <i class="pi pi-home mr-2 color"></i>
                            <span class=" color">List of O'Sol Pico</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple
                            class="flex align-items-center cursor-pointer p-3 border-round ">
                            <i class="pi pi-users mr-2 color"></i>
                            <span class=" color">List of users</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple
                            class="flex align-items-center cursor-pointer p-3 border-round ">
                            <i class="pi pi-th-large mr-2 color"></i>
                            <span class=" color">Statisics</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple
                            class="flex align-items-center cursor-pointer p-3 border-round ">
                            <i class="pi pi-ticket mr-2 color"></i>
                            <span class=" color">Tickets</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple
                            class="flex align-items-center cursor-pointer p-3 border-round ">
                            <i class="pi pi-sign-out mr-2 color"></i>
                            <span @click="logout" class=" color">Log Out</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="col-10 p-0">
            <div class="card mt-5 mx-2">

              
            </div>
        </div>
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
  const dashboard = async () => {
    try {
        router.push('/dashboard');
    } catch (error) {
        console.error('Erreur de redirection :', error);
    }
}
const osolbase = async () => {
    try {
        router.push('/osolbase');
    } catch (error) {
        console.error('Erreur de redirection :', error);
    }
}
  </script>
  
  <style scoped>
.grid1 {
    flex-direction: column;
}

.col-2 {
    background-color: #6182c0;
    height: 100%;
}

#app>header:nth-child(2)>div>div {
    padding: 0;
}

.images {
    padding: 0.8rem;
}

.colornav {
    background-color: #40454e;
    height: 80rem;
}

.images {
    padding: 0.8rem;
}


@media (max-width: 767px) {
    .colornav{
        height: auto;
    }
    .navbar {
        flex-direction: row;
        height: 10%;
    }

    .navbar li {
        margin-right: 10px;
    }
}
.color {
    color: white;
}

.navbar li a:hover {
  background-color: #f6ce54;
  transition-duration: 150ms;
  transition-property: background-color;
}
body{
    margin:0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
    background-color: 
#bdbdbd;
}
</style>