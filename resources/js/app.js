

import {createApp} from 'vue'

import App from './App.vue'
let app=createApp(App);

import VueSweetalert2 from 'vue-sweetalert2';

// Do not import this file if you want to use custom style
import 'sweetalert2/dist/sweetalert2.min.css';

app.use(VueSweetalert2);


import router from './routes'
app.use(router);

import VueCreditCardValidation from 'vue-credit-card-validation';
app.use(VueCreditCardValidation);

app.mount('#app')
