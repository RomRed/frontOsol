<template>
  <div class="grid flex flex-row flex-wrap">
      <div class="col-12 md:col-2 colornav">
          <div class="test">
              <div class="burger-icon" @click="toggleNavbar">&#9776;</div>
              <img style="width: fit-content" class="images" src="../assets/img/download.svg" alt="" />
          </div>
          <Divider />
          <nav class="navbar">
              <ul class="list-none p-0 m-0  flex flex-wrap md:flex-col">
                  <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round ">
                          <i class="pi pi-th-large mr-2 color"></i>
                          <span @click="dashboard" class=" color">Dashboard</span>
                      </a>
                  </li>
                  <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round ">
                          <i class="pi pi-list mr-2 color"></i>
                          <span @click="organisations" class=" color">List of Organisations</span>
                      </a>
                  </li>
                  <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round ">
                          <i class="pi pi-server mr-2 color"></i>
                          <span @click="osolbase" class=" color">List of O'Sol Base</span>
                      </a>
                  </li>
                  <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round ">
                          <i class="pi pi-home mr-2 color"></i>
                          <span @click="osolpico" class=" color">List of O'Sol Pico</span>
                      </a>
                  </li>
                  <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round ">
                          <i class="pi pi-users mr-2 color"></i>
                          <span  @click="pageUser" class=" color">List of users</span>
                      </a>
                  </li>
                  <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round ">
                          <i class="pi pi-th-large mr-2 color"></i>
                          <span class=" color">Statisics</span>
                      </a>
                  </li>
                  <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 pr-7 border-round ">
                          <i class="pi pi-ticket mr-2 color"></i>
                          <span class=" color">Tickets</span>
                      </a>
                  </li>
                  <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round ">
                          <i class="pi pi-sign-out mr-2 color"></i>
                          <span @click="logout" class=" color">Log Out</span>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>

      <div class="lg:col-10  md:col-10 p-0 ">
          <div class=" mt-5 lg:ml-2 sm:ml-3 mr-3 ">

              <TabView v-model:activeIndex="active" class="h-full">
                  <TabPanel class="" header="General">
                  </TabPanel>
                  <TabPanel header="Advanced details">
                      <div class="card">
                          <DataTable :value="products" tableStyle="min-width: 50rem">
                              <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
                              </Column>
                          </DataTable>
                          <div class="flex justify-content-center">
                          <img src="../assets/img/63691183fc28b72ed629aa2b_frame-pico-min-p-500.webp" alt="" class="imagepico">
                        </div>
                        </div>
                  </TabPanel>
                  <TabPanel header="Firmware">

                  </TabPanel>
              </TabView>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';




const products = ref([]);
const columns = [
  { field: 'idPico', header: 'ID' },
  { field: 'alias', header: 'Alias' },
  { field: 'issues', header: 'Issues' },
  { field: 'version', header: 'Version' },
  { field: 'cell', header: 'Cell' },
  { field: 'temp', header: 'Temp' },
  { field: 'soh', header: 'SOH' },
  { field: 'soc', header: 'SOC' },
  { field: 'powerin', header: 'Power In' },
  { field: 'voltage', header: 'Voltage' },
  { field: 'voltagein', header: 'Voltage In' },
  { field: 'lenlog', header: 'Len Log' },
  { field: 'accelleromax', header: 'Accelleromax' },
  { field: 'available', header: 'Available' },
  { field: 'cable', header: 'Cable' },
  { field: 'locker', header: 'Locker' },
  { field: 'currentPico', header: 'Current Pico' },
  { field: 'balance', header: 'Balance' },
  { field: 'isunlockSlot', header: 'Is Unlock Slot' },
  { field: 'isactived', header: 'Is Actived' },
];

onMounted(async () => {
  try {
      // requête API pour obtenir les données pico
      const response = await axios.get('http://localhost:8000/api/pico');

      products.value = response.data;
  } catch (error) {
      console.error('Erreur lors de la récupération des données API :', error);
  }
});


const active = ref(0);
const tabs = ref([
  { title: 'Tab 1', content: 'Tab 1 Content' },
  { title: 'Tab 2', content: 'Tab 2 Content' },
  { title: 'Tab 3', content: 'Tab 3 Content' }
]);
const router = useRouter();

const dashboard = async () => {
  try {
      router.push('/dashboard');
  } catch (error) {
      console.error('Erreur de redirection :', error);
  }
}
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

const osolbase = async () => {
  try {
      router.push('/osolbase');
  } catch (error) {
      console.error('Erreur de redirection :', error);
  }
}

const osolpico = async () => {
  try {
      router.push('/osolpico');
  } catch (error) {
      console.error('Erreur de redirection :', error);
  }
}

const organisations = async () => {
  try {
      router.push('/organisations');
  } catch (error) {
      console.error('Erreur de redirection :', error);
  }
}

const pageUser = async () => {
  try {
      router.push('/liste_user');
  } catch (error) {
      console.error('Erreur de redirection :', error);
  }
}


const toggleNavbar = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar !== null) {
      navbar.classList.toggle('show');
  }
};

const isPageSpecific = document.querySelector('body');
isPageSpecific?.classList.toggle('bodyOsolbase')
</script>

<style>

.imagepico {
    width: 20%;
    height: 20%;
    opacity: 0.3;
  }

.colornav {
  background-color: #40454e;
  height: 80rem;
}

.images {
  padding: 0.8rem;
}

@media (min-width: 768px) {

  .burger-icon {
      display: none;
  }
}


@media (max-width: 767px) {
  .colornav {
      height: auto;
  }

  .test {
      display: flex;
      flex-direction: row;
  }

  .p-divider.p-divider-horizontal {
      display: none;
  }

  .navbar {
      flex-direction: column;
      display: none;
  }

  .navbar.show {
      display: flex;
  }

  .navbar li {
      margin-right: 0;
      width: 100%;
  }

  .burger-icon {
      cursor: pointer;
      color: white;
      font-size: 1.5rem;
      margin: 10px;
      align-items: center;
      display: flex;
      margin-top: 1rem;
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

.bodyOsolbase {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
  background-color: #bdbdbd;
}

.p-tabview-nav-content {
  background-color: white;
}

ul.p-tabview-nav {
  border: none;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  border: none;
}
</style>