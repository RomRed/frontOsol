<template>
        <div class="grid h-full">
            <div class="col-2">
                <img style="width: fit-content" class="images" src="../assets/img/logoosol.png" alt="" />
                <Divider />
                <nav class="navbar">
                    <ul class="list-none p-0 m-0 overflow-hidden">
                      <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-user mr-2"></i>
                                <span v-if="user" class="font-medium">Bienvenue <strong class="capitalize">{{ user.prenom }}</strong></span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-th-large mr-2"></i>
                                <span  @click="dashboard" class="font-medium">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-list mr-2"></i>
                                <span class="font-medium">List of Organisations</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-server mr-2"></i>
                                <span  @click="osolbase" class="font-medium">List of O'Sol Base</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-home mr-2"></i>
                                <span class="font-medium">List of O'Sol Pico</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-users mr-2"></i>
                                <span class="font-medium">List of users</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-th-large mr-2"></i>
                                <span class="font-medium">Statisics</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-ticket mr-2"></i>
                                <span class="font-medium">Tickets</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple
                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-sign-out mr-2"></i>
                                <span @click="logout" class="font-medium">Log Out</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-10 p-0">
              <div>
                
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
  
  <style>
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

body{
    margin: 0;
}

</style>