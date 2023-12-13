// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import Menubar from 'primevue/menubar';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Badge from 'primevue/badge';
import Card from 'primevue/card';
import '/node_modules/primeflex/primeflex.css';
import Menu from 'primevue/menu';
import Toast from 'primevue/toast';
import Sidebar from 'primevue/sidebar';
import Password from 'primevue/password';
import Button from "primevue/button"
import axios from 'axios';
import Divider from 'primevue/divider';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';                  
import InputSwitch from 'primevue/inputswitch';
import MultiSelect from 'primevue/multiselect';
import Checkbox from 'primevue/checkbox';
import Message from 'primevue/message';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Image from 'primevue/image';
import ScrollPanel from 'primevue/scrollpanel';
// import 'uikit/dist/css/uikit.min.css';
// import 'uikit/dist/js/uikit.min.js';
// import 'uikit/dist/js/uikit-icons.min.js';






const app = createApp(App);
app.use(PrimeVue);
app.component('ScrollPanel', ScrollPanel)
app.component('Image', Image)
app.component('ConfirmPopup', ConfirmPopup)
app.component('Checkbox', Checkbox)
app.component('Message', Message)
app.component('MultiSelect', MultiSelect)
app.component('InputSwitch', InputSwitch)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Password', Password)
app.component('Toast', Toast)
app.component('Sidebar', Sidebar)
app.component('Menu', Menu)
app.component('Card', Card)
app.component('Avatar', Avatar);
app.component('InputText', InputText);
app.component('Menubar' , Menubar);
app.component('Button', Button);
app.component('Badge', Badge);
app.component('Tag', Tag);
app.component('Login', Login)
app.component('Dashboard', Dashboard)
app.component('Home', Home)
app.component('Divider', Divider)
app.use(router)
app.use(ConfirmationService);
app.use(ToastService);
app.config.globalProperties.$axios = axios;
app.mount('#app')
