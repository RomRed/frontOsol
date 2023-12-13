
<template>
    <Toast />
    <ConfirmPopup></ConfirmPopup>
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
                            <span @click="pageUser" class=" color">List of users</span>
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

        <div class="lg:col-10  md:col-10 p-0 testsize">
            <div class=" mt-5 lg:ml-2 sm:ml-3 mr-3 ">

                <TabView v-model:activeIndex="active" class="h-full">
                    <TabPanel class="" header="General">
                        <InputGroup class="">
                            <form @submit.prevent="submitForm" class="">
                                <div class=" grid">
                                    <!-- Première colonne -->
                                    <!-- Description -->
                                    <div class="col-6">
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="description" class="form-label">Description:</label>
                                            <InputText type="text" class="form-control w-full" v-model="base.description"
                                                required />
                                        </div>

                                        <!-- Short Alias -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="shortAlias" class="form-label">Short Alias:</label>
                                            <InputText type="text" class="form-control w-full" v-model="base.shortAlias"
                                                required />
                                        </div>

                                        <!-- Long Alias -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="longAlias" class="form-label">Long Alias:</label>
                                            <InputText type="text" class="form-control w-full" v-model="base.longAlias" />
                                        </div>

                                        <!-- Localisation Installation -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="localisationInstallation" class="form-label">Localisation
                                                Installation:</label>
                                            <InputText type="text" class="form-control w-full"
                                                v-model="base.localisationInstallation" />
                                        </div>

                                        <!-- Latitude Base -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="latitudeBase" class="form-label">Latitude Base:</label>
                                            <InputText type="text" class="form-control w-full"
                                                v-model="base.latitudeBase" />
                                        </div>

                                        <!-- Longitude Base -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="longitudeBase" class="form-label">Longitude Base:</label>
                                            <InputText type="text" class="form-control w-full"
                                                v-model="base.longitudeBase" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <!-- Deuxième colonne -->
                                        <!-- Mac Wifi -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="macWifi" class="form-label">Mac Wifi:</label>
                                            <InputText type="text" class="form-control w-full" v-model="base.macWifi" />
                                        </div>

                                        <!-- Mac Ethernet -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="macEthernet" class="form-label">Mac Ethernet:</label>
                                            <InputText type="text" class="form-control w-full" v-model="base.macEthernet" />
                                        </div>

                                        <!-- Adresse IP -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="adresseIp" class="form-label">Adresse IP:</label>
                                            <InputText type="text" class="form-control w-full" v-model="base.adresseIp" />
                                        </div>

                                        <!-- QR Code -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="qrCode" class="form-label">QR Code:</label>
                                            <InputText type="text" class="form-control w-full" v-model="base.qrCode" />
                                            <button @click="generateQRCode()">Générer QR Code</button>
                                            <div class="qr-code-container">
                                                <img :src="qrCodeImageSrc" alt="QR Code" v-if="qrCodeImageSrc" />
                                            </div>
                                            <button @click="downloadQRCode">Télécharger QR Code</button>
                                        </div>

                                        <!-- Is Enable Auth Local -->
                                        <div class="mb-3 form-check field col-12 md:col-6 w-full">
                                            <InputSwitch type="checkbox" class="form-check-input" id="isenableAuthLocal"
                                                v-model="base.isenableAuthLocal" />
                                            <label class="form-check-label" for="isenableAuthLocal"> Is Enable Auth
                                                Local</label>
                                        </div>

                                        <!-- Is Actived Maintenance Mode -->
                                        <div class="mb-3 form-check field col-12 md:col-6 w-full">
                                            <InputSwitch type="checkbox" class="form-check-input"
                                                id="isactivedMaintenanceMode" v-model="base.isactivedMaintenanceMode" />
                                            <label class="form-check-label" for="isactivedMaintenanceMode"> Is Actived
                                                Maintenance Mode</label>
                                        </div>

                                        <!-- Is Actived Status -->
                                        <div class="mb-3 form-check field col-12 md:col-6 w-full">
                                            <InputSwitch type="checkbox" class="form-check-input" id="isactivedStatus"
                                                v-model="base.isactivedStatus" />
                                            <label class="form-check-label" for="isactivedStatus"> Is Actived Status</label>
                                        </div>

                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="idModeCharge" class="form-label">Mode Charge:</label>
                                            <select class="form-select" v-model="base.idModeCharge">
                                                <option v-for="modeChargeOption in modeChargeOptions"
                                                    :key="modeChargeOption.idModeCharge"
                                                    :value="modeChargeOption.idModeCharge">
                                                    {{ modeChargeOption.idModeCharge }}
                                                </option>
                                            </select>
                                        </div>

                                        <!-- Dropdown for id_firmware -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="idFirmware" class="form-label">Firmware:</label>
                                            <select class="form-select" v-model="base.idFirmware">
                                                <option v-for="firmwareOption in firmwareOptions"
                                                    :key="firmwareOption.idFirmware" :value="firmwareOption.idFirmware">
                                                    {{ firmwareOption.idFirmware }}
                                                </option>
                                            </select>
                                        </div>

                                        <!-- Dropdown for id_organisation -->
                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="idOrganisation" class="form-label">Organisation:</label>
                                            <select class="form-select" v-model="base.idOrganisation">
                                                <option v-for="organisationOption in organisationOptions"
                                                    :key="organisationOption.idOrganisation"
                                                    :value="organisationOption.idOrganisation">
                                                    {{ organisationOption.idOrganisation }}
                                                </option>
                                            </select>
                                        </div>

                                        <div class="mb-3 field col-12 md:col-6 w-full">
                                            <label for="idAcMode" class="form-label">Ac mode:</label>
                                            <select class="form-select" v-model="base.idAcMode">
                                                <option v-for="AcModeOption in AcModeOptions" :key="AcModeOption.idAcMode"
                                                    :value="AcModeOption.idAcMode">
                                                    {{ AcModeOption.idAcMode }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- Bouton Add Base -->
                                <div class="p-col-12 flex justify-content-center">
                                    <Button type="submit" severity="secondary">Save Base info</Button>
                                </div>

                            </form>
                        </InputGroup>

                    </TabPanel>
                    <TabPanel header="Advanced details">
                        <div class="card">
                            <DataTable :value="products" tableStyle="min-width: 50rem">
                                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
                                </Column>
                            </DataTable>
                        </div>
                    </TabPanel>
                    <TabPanel header="Firmware">

                    </TabPanel>
                    <TabPanel header="Liste des Bases">
                        <div class="card">

                            <Button @click="confirm1($event)" severity="secondary">Supprimer base(s)</Button>
                            <DataTable :value="basesListe" tableStyle="min-width: 50rem">
                                <Column v-for="col of basesColumns" :key="col.field" :field="col.field"
                                    :header="col.header">
                                </Column>
                                <Column :field="'selected'" :header="''" :style="{ width: '3em' }">
                                    <template #body="{ data }">
                                        <Checkbox v-model="data.selected" @change="handleCheckboxChange(data)" :binary="true" />
                                    </template>
                                </Column>
                            </DataTable>
                            <div class="flex justify-content-center">
                            <img src="../assets/img/63690c09288ce5ac9ebccdc3_frame-dock-min-p-1080.webp" alt=""
                                class="imagebase">
                            </div>
                        </div>
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


const handleCheckboxChange = (data) => {
    console.log('Checkbox changed:', data.selected);
};
const checked = ref(true);
const modeChargeOptions = ref([]);
const firmwareOptions = ref([]);
const organisationOptions = ref([]);
const AcModeOptions = ref([]);

onMounted(async () => {
    try {
        // Récupération des options depuis l'API
        const modeChargeResponse = await axios.get('http://localhost:8000/api/mode_charges');
        const firmwareResponse = await axios.get('http://localhost:8000/api/firmwares');
        const organisationResponse = await axios.get('http://localhost:8000/api/organisations');
        const AcModeResponse = await axios.get('http://localhost:8000/api/ac_mode');

        // Affectation des options aux variables
        modeChargeOptions.value = modeChargeResponse.data;
        firmwareOptions.value = firmwareResponse.data;
        organisationOptions.value = organisationResponse.data;
        AcModeOptions.value = AcModeResponse.data;

    } catch (error) {
        console.error('Erreur lors de la récupération des options:', error);
    }
});

const base = ref({
    description: '',
    shortAlias: '',
    longAlias: '',
    localisationInstallation: '',
    latitudeBase: '',
    longitudeBase: '',
    macWifi: '',
    macEthernet: '',
    adresseIp: '',
    qrCode: '',
    isenableAuthLocal: false,
    isactivedMaintenanceMode: false,
    isactivedStatus: false,
    idModeCharge: 0,
    idFirmware: 0,
    idOrganisation: 0,
    idAcMode: 0,
});

const submitForm = async () => {
    try {

        const response = await axios.post('http://localhost:8000/api/bases', base.value);

        console.log('Base ajoutée avec succès:', response.data);

        // ...
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la base:', error);

        // ...
    }
};

const products = ref([]);
const columns = [
    { field: 'selected', header: '', checkbox: true },
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
    { title: 'Tab 3', content: 'Tab 3 Content' },
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


const qrCodeImageSrc = ref('');

const generateQRCode = async () => {
    try {
        const response = await axios.get('https://api.qrserver.com/v1/create-qr-code/', {
            params: {
                data: base.value.qrCode,
                size: '120x120',
                margin: '0'
            },
            responseType: 'arraybuffer'
        });

        const imageSrc = URL.createObjectURL(new Blob([response.data]));
        qrCodeImageSrc.value = imageSrc;
    } catch (error) {
        console.error('Erreur lors de la génération du QR code:', error);
    }
};


const downloadQRCode = () => {
    if (qrCodeImageSrc.value) {
        const link = document.createElement('a');
        link.href = qrCodeImageSrc.value;
        link.download = 'qrcode.png';
        link.click();
    }
};



const basesListe = ref([]);
const basesColumns = [
    { field: 'id_base', header: 'ID' },
    { field: 'description', header: 'Description' },
    { field: 'short_alias', header: 'Short Alias' },
    { field: 'long_alias', header: 'Long Alias' },
    { field: 'localisation_installation', header: 'Localisation Installation' },
    { field: 'latitude_base', header: 'Latitude Base' },
    { field: 'longitude_base', header: 'Longitude Base' },
    { field: 'mac_wifi', header: 'MAC Wifi' },
    { field: 'mac_ethernet', header: 'MAC Ethernet' },
    { field: 'adresse_ip', header: 'Adresse IP' },
    { field: 'qr_code', header: 'QR Code' },
    { field: 'isenable_auth_local', header: 'Is Enable Auth Local' },
    { field: 'isactived_maintenance_mode', header: 'Is Actived Maintenance Mode' },
    { field: 'isactived_status', header: 'Is Actived Status' },
];


onMounted(async () => {
    try {

        const response = await axios.get('http://localhost:8000/api/basesliste');

        basesListe.value = response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données API :', error);
    }
});

const toggleNavbar = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar !== null) {
    navbar.classList.toggle('show');
  }

  const listNoneElements = document.querySelectorAll('.list-none');
  listNoneElements.forEach(element => {
    element.classList.toggle('list-none-active');
  });
};

const isPageSpecific = document.querySelector('body');
isPageSpecific?.classList.toggle('bodyOsolbase')

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


import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';

const toast = useToast();
const confirm = useConfirm();



const confirm1 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'etes vous sur de vouloir supprimer les bases selectionnées ?',
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {
            try {
                const selectedBaseIds = basesListe.value.filter((base) => base.selected).map((base) => base.id_base);
                if (selectedBaseIds.length === 0) {
                    toast.add({
                        severity: 'warn',
                        summary: 'Aucune base sélectionnée',
                        detail: 'Veuillez sélectionner des bases à supprimer',
                        life: 3000,
                    });
                    return;
                }
                toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Base(s) supprimée(s) avec succè(s)', life: 3000 });
                const response = await axios.delete('http://localhost:8000/api/baseDelete', { data: { ids: selectedBaseIds } });

                if (response && response.data) {
                    console.log('Bases supprimées avec succès', response.data);

                } else {
                    console.error('La réponse de suppression est indéfinie ou ne contient pas de données');
                }
            } catch (error) {
                console.error('Erreur lors de la suppression des bases', error.response ? error.response.data : error.message);
            }


        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'vous avez annulé la suppression', life: 3000 });
        }
    });
};
</script>
  
<style>
.imagebase {
    width: 50%;
    height: 50%;
    opacity: 0.3;
}

.list-none.list-none-active {
  font-size: small;
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

@media (min-width: 768px) and (max-width: 890px) {
.list-none {
    font-size: x-small;
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

    .imagebase {
        width: 80%;
        height: 80%;
    }

    .md\:col-10 {
    padding: 0.5rem;
    width: 83.3333%;
    margin-left: 3rem;
}
.p-tabview-title {
    white-space: nowrap;
    font-size:x-small ;
}

ul.p-tabview-nav {
    border: none;
    display: flex;
    justify-content: center;
}
.list-none {
    list-style: none !important;
    font-size: x-small;
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

@media screen and (min-width: 200px){

.md\:col-10 {
    /* flex: 0 0 auto; */
    padding: 0.5rem;
    width: 83.3333%;
}
}

</style>