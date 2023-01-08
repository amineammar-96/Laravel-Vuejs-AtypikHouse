// import Home from '@/views/Home.vue';

import { createWebHashHistory, createRouter } from 'vue-router'

import home from './components/accueil.vue';
import aboutus from './components/pages/aboutus/aboutus.vue'
import contact from './components/pages/contact/contact.vue'

import signup from './components/pages/connection/signup/signup.vue'
import login from './components/pages/connection/login/login.vue'
import becomeOwner from './components/pages/connection/becomeOwner/becomeOwner.vue'
import dashboardClient from "./components/pages/clientConnectedPages/dashboard.vue"

import dashboardOwner from "./components/pages/ownerConnectedPages/dashboard.vue"
import createAnAnnonce from "./components/pages/ownerConnectedPages/createAnAnnonce.vue"


import profileAdmin from "./components/pages/profile/profile.vue"
import dashboardAdmin from "./components/pages/adminConnectedPages/dashboard.vue"


import dashboardModerateur from "./components/pages/moderateurConnectedPages/dashboard.vue"


import annoncePage from "./components/pages/annoncePage/annonce.vue"
import annoncesListPage from "./components/pages/annoncesListPage/annoncesSearchResult.vue"
import favoritesAnnoncesPage from "./components/pages/annoncesListPage/favoritesAnnoncesPage.vue"

import forgetPassword from "./components/pages/connection/forgetPassword/forgetPassword.vue"

import resetEmailSended from "./components/pages/connection/forgetPassword/resetEmailSended.vue"

import resetPasswordForm from "./components/pages/connection/forgetPassword/resetPasswordForm.vue"
import newClientAccount from "./components/pages/connection/signup/newClientAccount.vue"
import emailVerificationMessage from "./components/pages/connection/signup/emailVerificationMessage.vue"

import contactFormMailSent from "./components/pages/contact/contactFormMailSent.vue"


import updateAnnonce from "./components/pages/updateAnnoncePage/updateAnnonce.vue"

import disponibilityAnnonce from "./components/pages/ownerConnectedPages/disponibilityAnnoncePage.vue"


import successfulPayment from "./components/pages/annoncePage/successfulPayment.vue"


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path : "/" , component : home },
        {path : "/qui-sommes-nous" , component : aboutus },
        {path : "/contact" , component : contact },
        {path : "/se-connecter" , component : login },
        {path : "/inscription" , component : signup },
        {path : "/devenir-hote" , component : becomeOwner },
        {path : "/dashboardClient" , component : dashboardClient },
        {path : "/dashboardOwner" , component : dashboardOwner },
        {path : "/profileAdmin" , component : profileAdmin },
        {path : "/dashboardAdmin" , component : dashboardAdmin },
        {path : "/ajouter-annonce" , component : createAnAnnonce },
        {path : "/dashboardModerateur" , component : dashboardModerateur },
        {path : "/annonce" , component : annoncePage },
        {path : "/annoncesListPage" , component : annoncesListPage , name:"Hébergements" },
        {path : "/forgetPassword" , component : forgetPassword },
        {path : "/resetEmailSended" , component : resetEmailSended },
        {path : "/resetPasswordForm" , component : resetPasswordForm },
        {path : "/newClientAccount" , component : newClientAccount },
        {path : "/emailVerificationMessage" , component : emailVerificationMessage },
        {path : "/contactFormMailSent" , component : contactFormMailSent , name : "contactFormMailSentName" },
        {path : "/updateAnnonce" , component : updateAnnonce , name : "updateAnnonce" },
        {path : "/favoritesAnnonces" , component : favoritesAnnoncesPage , name : "favoritesAnnoncesPage" },
        {path : "/disponibilityAnnonce" , component : disponibilityAnnonce , name : "disponibilityAnnonce" },
        {path : "/successful-paypal-payment" , component : successfulPayment , name : "successfulPayment" },


    ],
    linkActiveClass: 'active'
  })

  export default router


