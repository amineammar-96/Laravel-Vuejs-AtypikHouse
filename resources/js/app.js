

import {createApp} from 'vue'

import App from './App.vue'
let app=createApp(App);



import vue3StarRatings from "vue3-star-ratings";

import router from './routes'
app.use(router);

import VueCreditCardValidation from 'vue-credit-card-validation';
app.use(VueCreditCardValidation);

app.mount('#app')
