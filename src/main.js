import Vue from 'vue';
import VueSweetAlert2 from 'vue-sweetalert2';
import { ClientTable } from 'vue-tables-2';

// Global settings
Vue.config.productionTip = false;

// Pull in third party libraries
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@/Services/Firebase';

// Register Plugins
Vue.use(VueSweetAlert2);
Vue.use(ClientTable, null, false, 'bootstrap4');

import App from './App.vue';
import router from './router';

// Initialize App
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
