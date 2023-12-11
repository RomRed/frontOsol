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
                            <i class="pi pi-th-large mr-2"></i>
                            <span @click="dashboard" class="font-medium">Dashboard</span>
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
                            <span @click="osolbase" class="font-medium">List of O'Sol Base</span>
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
            <div class="card mt-5 mx-2">

                <TabView v-model:activeIndex="active">
                    <TabPanel header="General">
                        <InputGroup>
                            <form @submit.prevent="submitForm">
                                <!-- Description -->
                                <div class="mb-3">
                                    <label for="description" class="form-label">Description:</label>
                                    <InputText type="text" class="form-control" v-model="base.description" required />
                                </div>

                                <!-- Short Alias -->
                                <div class="mb-3">
                                    <label for="shortAlias" class="form-label">Short Alias:</label>
                                    <InputText type="text" class="form-control" v-model="base.shortAlias" required />
                                </div>

                                <!-- Long Alias -->
                                <div class="mb-3">
                                    <label for="longAlias" class="form-label">Long Alias:</label>
                                    <InputText type="text" class="form-control" v-model="base.longAlias" />
                                </div>

                                <!-- Localisation Installation -->
                                <div class="mb-3">
                                    <label for="localisationInstallation" class="form-label">Localisation
                                        Installation:</label>
                                    <InputText type="text" class="form-control" v-model="base.localisationInstallation" />
                                </div>

                                <!-- Latitude Base -->
                                <div class="mb-3">
                                    <label for="latitudeBase" class="form-label">Latitude Base:</label>
                                    <InputText type="text" class="form-control" v-model="base.latitudeBase" />
                                </div>

                                <!-- Longitude Base -->
                                <div class="mb-3">
                                    <label for="longitudeBase" class="form-label">Longitude Base:</label>
                                    <InputText type="text" class="form-control" v-model="base.longitudeBase" />
                                </div>

                                <!-- Mac Wifi -->
                                <div class="mb-3">
                                    <label for="macWifi" class="form-label">Mac Wifi:</label>
                                    <InputText type="text" class="form-control" v-model="base.macWifi" />
                                </div>

                                <!-- Mac Ethernet -->
                                <div class="mb-3">
                                    <label for="macEthernet" class="form-label">Mac Ethernet:</label>
                                    <InputText type="text" class="form-control" v-model="base.macEthernet" />
                                </div>

                                <!-- Adresse IP -->
                                <div class="mb-3">
                                    <label for="adresseIp" class="form-label">Adresse IP:</label>
                                    <InputText type="text" class="form-control" v-model="base.adresseIp" />
                                </div>


                                <!-- QR Code -->
                                <div class="mb-3">
                                    <label for="qrCode" class="form-label">QR Code:</label>
                                    <InputText type="text" class="form-control" v-model="base.qrCode" />
                                    <button @click="generateQRCode()">Generate QR Code</button>
                                    <div class="qr-code-container">
                                        <img :src="qrCodeImageSrc" alt="QR Code" v-if="qrCodeImageSrc">
                                    </div>
                                    <button @click="downloadQRCode">Télécharger QR Code</button>
                                </div>

                                <!-- Is Enable Auth Local -->
                                <div class="mb-3 form-check">
                                    <InputSwitch type="checkbox" class="form-check-input" id="isenableAuthLocal"
                                        v-model="base.isenableAuthLocal" />
                                    <label class="form-check-label" for="isenableAuthLocal">Is Enable Auth Local</label>
                                </div>

                                <!-- Is Actived Maintenance Mode -->
                                <div class="mb-3 form-check">
                                    <InputSwitch type="checkbox" class="form-check-input" id="isactivedMaintenanceMode"
                                        v-model="base.isactivedMaintenanceMode" />
                                    <label class="form-check-label" for="isactivedMaintenanceMode">Is Actived Maintenance
                                        Mode</label>
                                </div>

                                <!-- Is Actived Status -->
                                <div class="mb-3 form-check">
                                    <InputSwitch type="checkbox" class="form-check-input" id="isactivedStatus"
                                        v-model="base.isactivedStatus" />
                                    <label class="form-check-label" for="isactivedStatus">Is Actived Status</label>
                                </div>
                                <div class="mb-3">
                                    <label for="idModeCharge" class="form-label">Mode Charge:</label>
                                    <select class="form-select" v-model="base.idModeCharge">
                                        <option v-for="modeChargeOption in modeChargeOptions"
                                            :key="modeChargeOption.idModeCharge" :value="modeChargeOption.idModeCharge">
                                            {{ modeChargeOption.idModeCharge }}
                                        </option>
                                    </select>
                                    <p>Selected Firmware ID: {{ base.idModeCharge }}</p>
                                </div>

                                <!-- Dropdown for id_firmware -->
                                <div class="mb-3">
                                    <label for="idFirmware" class="form-label">Firmware:</label>
                                    <select class="form-select" v-model="base.idFirmware">
                                        <option v-for="firmwareOption in firmwareOptions" :key="firmwareOption.idFirmware"
                                            :value="firmwareOption.idFirmware">
                                            {{ firmwareOption.idFirmware }}
                                        </option>
                                    </select>
                                    <p>Selected Firmware ID: {{ base.idFirmware }}</p>
                                </div>
                                <!-- Dropdown for id_organisation -->
                                <div class="mb-3">
                                    <label for="idOrganisation" class="form-label">Organisation:</label>
                                    <select class="form-select" v-model="base.idOrganisation">
                                        <option v-for="organisationOption in organisationOptions"
                                            :key="organisationOption.idOrganisation"
                                            :value="organisationOption.idOrganisation">
                                            {{ organisationOption.idOrganisation }}
                                        </option>
                                    </select>
                                    <p>Selected Firmware ID: {{ base.idOrganisation }}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="idAcMode" class="form-label">Ac mode:</label>
                                    <select class="form-select" v-model="base.idAcMode">
                                        <option v-for="AcModeOption in AcModeOptions" :key="AcModeOption.idAcMode"
                                            :value="AcModeOption.idAcMode">
                                            {{ AcModeOption.idAcMode }}
                                        </option>
                                    </select>
                                    <p>Selected Firmware ID: {{ base.idAcMode }}</p>
                                </div>
                                <button type="submit" class="btn btn-primary">Add Base</button>
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
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti
                            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique
                            sunt in culpa qui
                            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
                            est et
                            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus.
                        </p>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
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
        // console.log('Data to be sent:', base.value);

        const response = await axios.post('http://localhost:8000/api/bases', base.value);

        console.log('Base ajoutée avec succès:', response.data);

        // ...
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la base:', error);

        // ...
    }
};

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


import { ref, onMounted } from 'vue';

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


const qrCodeImageSrc = ref('');

const generateQRCode = async () => {
    try {
        const response = await axios.get('https://api.qrserver.com/v1/create-qr-code/', {
            params: {
                data: base.value.qrCode,
                size: '200x200',
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
</script>
  
<style>
.grid1 {
    flex-direction: column;
}

.col-2 {
    background-color: #6182c0;
    height: 710px;
}

#app>header:nth-child(2)>div>div {
    padding: 0;
}

.images {
    padding: 0.8rem;
}

/* .alone {
    margin-top: 70%;
} */
body {
    margin: 0;
}
</style>