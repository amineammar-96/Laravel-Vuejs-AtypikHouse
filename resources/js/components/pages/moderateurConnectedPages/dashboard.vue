<template>
  <div>
    <div class="content">
      <div class="dashboardContainer">
        <div class="leftSideBarDashboard">
          <ul class="leftSideBarUl">
            <li
              @click="windowStepFunction(1)"
              :class="windowStep == 1 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-tachometer-alt sideBarLinkIcon"></i>

              <span>Dashboard</span>
            </li>

            <li
              @click="windowStepFunction(2) && changeNotificationReadingState()"
              :class="windowStep == 2 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-bell sideBarLinkIcon"></i>
              <span>Notifications</span><span v-if="newNotificationsCheck" class="red statusRed"></span>
            </li>

            <li
              @click="windowStepFunction(3)"
              :class="windowStep == 3 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-digital-tachograph sideBarLinkIcon"></i>

              <span>Annonces</span>
            </li>

            <li
              @click="windowStepFunction(4)"
              :class="windowStep == 4 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-clock sideBarLinkIcon"></i>

              <span>Historiques</span>
            </li>
          </ul>
        </div>

        <div class="leftSideBarDashboardMobile">
          <div class="expand-collapse">
            <img
              src="https://img.icons8.com/material-sharp/40/FFFFFF/circled-menu.png"
            />
            <div>
              <ul class="leftSideBarUl">
                <li
                  @click="windowStepFunction(1)"
                  :class="windowStep == 1 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-tachometer-alt sideBarLinkIcon"></i>

                  <span>Dashboard</span>
                </li>
                <li
                  @click="windowStepFunction(2)"
                  :class="windowStep == 2 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-bell sideBarLinkIcon"></i>

                  <span>Notifications</span><span v-if="newNotificationsCheck" class="red statusRed"></span>
                </li>
                <li
                  @click="windowStepFunction(3)"
                  :class="windowStep == 3 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-digital-tachograph sideBarLinkIcon"></i>

                  <span>Annonces</span>
                </li>
                <li
                  @click="windowStepFunction(4)"
                  :class="windowStep == 4 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-clock sideBarLinkIcon"></i>

                  <span>Historiques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rightSideDashboard">
          <!-- Dashboard  -->
          <div v-if="windowStep == 1" class="dashboardStep">
            <section>
              <dl>
                <dt>Visiteurs</dt>
                <dd>69</dd>
              </dl>
              <dl>
                <dt>Annonces</dt>
                <dd>96</dd>
              </dl>
              <dl>
                <dt>Réservations</dt>
                <dd>66</dd>
              </dl>
              <dl>
                <dt>Bénéfice</dt>
                <dd>99</dd>
              </dl>
            </section>
          </div>

          <div v-if="windowStep == 2">
            <div
              v-if="notifications.length > 0"
              class="rowNotification notification-container"
            >
              <p class="dismiss text-right">
                <a id="dismiss-all">Notifications</a>
               <a>Vous avez {{ newNotificationsCheckCount }} nouvelle(s) notification(s) </a>

              </p>
              <div
                v-for="(notification, key) in notifications"
                :key="key"
                class="card notification-card"
                                :class=" !notification.read_at ? 'cardReadStateTrue' : 'cardReadStateFalse'"

              >
                <div class="card-body">
                  <table>
                    <tr>
                      <td style="width: 100%">
                        <div class="card-title">
                            <img class="avatarNotification" :src="'/storage/'+notification.avatar.path+'/'+notification.avatar.name" alt="">


                           <div>
                        <b>{{ notification.from_users[0].lastname }} {{ notification.from_users[0].firstname }}</b><br> {{ notification.content }}<br> <span>{{ notification.created_at }}</span>
                            </div>

                             <div v-if="!notification.read_at">
                                 <i  class="fas fa-exclamation-circle notificationDashboardDesign "  :class="!notification.read_at ? 'notificationDashboardReadingStateFalse' : ''"></i>
                            </div>

                        </div>
                      </td>
                      <td
                        style="
                          width: 10%;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        "
                      >
                        <a
                          class="dismiss-notification"
                          @click="deleteNotification(notification.id)"
                        >
                          <i class="fas fa-trash"></i>
                        </a>

                         <router-link  :to="notification.link">

                           <a class="link-notification"
                          >
<i class="fas fa-link"></i>
                          </a>
                          </router-link>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div style="
    display: flex;
    justify-content: center;
    align-items: center;
        flex-direction: column;
        height:600px;
" v-else>

<h3>0 Notifications</h3>
                <img style="
    width: 30%;
" src="../../../../../public/images/noNotification.svg" alt="">
            </div>
          </div>

          <!-- OwnersManagement -->

          <!-- annonces -->
          <div v-if="windowStep == 3" class="annoncesStep">
          <div class="topBarAnnoncesFilter">
                 <div class="filtersDiv">
          <ul class="ulTopSideBar">
              <li>
                  <label for=""></label>

<div class="form-search" method="get" action="#">
            <input v-model="titreChFiltre" type="search" name="search" placeholder="Filtrer par titre">



        </div>
              </li>
               <li>
              <label for="sortFilter">Catégorie : </label>
              <select

                v-model="typeLogementCh"
                class="selectSortBy"
                name="sortFilter"
                id="sortFilter"

              >
 <option selected value="">
                  Tout <small>({{ typeLogementCount("") }})</small>
                </option>
                <option
                  v-for="(typeLogement, key) in typesLogement"
                  :key="key"
                  :value="typeLogement.name"
                >
                  {{ typeLogement.name }}
                  <small>({{ typeLogementCount(typeLogement.name) }})</small>
                </option>

               </select>
            </li>
            <li>
              <label for="sortFilter">Trier par :</label>
              <select
                v-on:change="orderByChanged()"
                v-model="sortValue"
                class="selectSortBy"
                name="sortFilter"
                id="sortFilter"
              >
                <option value="priceAsc">Prix : Ordre croissant</option>

                <option value="priceDesc">Prix : Ordre décroissant</option>

                <option value="comments">
                  Moyenne des commentaires client
                </option>

                <option value="news" selected>Nouveautés</option>
                <option value="anciens" selected>Anciens</option>

              </select>
            </li>

          </ul>
        </div>
            </div>
           <main class="gridCardsMain">



                    <!-- <section v-for="(userAnnonce , key) in userAnnonces" :key="key" class="cardSection pt-0">
                        <figure class="figureCard">
                        <img  class="imgCardAnnonce"  v-for="(userAnnonceImage,key) in userAnnonce.images " v-show="userAnnonceImage.default=='true'" :key="key" :src="'storage/'+userAnnonceImage.path+'/'+userAnnonceImage.image">
                        </figure>
                        <article class="articleCard">
                            <div class="cardContent">
                            <div class="topDivCardAnnonce">
                                <div><span class="spanAnnonceCard">{{ userAnnonce.typeLogement }}</span></div>
                                <div><p class="spanAnnonceCard"> #{{ userAnnonce.id }}</p></div>
                            </div>

                        <div class="contentCardAnnonce">

                        <h1 class="cardAnnonceTitle">{{ userAnnonce.title }}</h1>

                        <ul>
                            <li><p class="paraghAnnonce">{{ userAnnonce.address }}   </p></li>
                            <li><p class="paraghAnnonce" v-if="userAnnonce.compAddress">{{ userAnnonce.compAddress }} </p></li>
                            <li><p class="paraghAnnonce">{{ userAnnonce.city }} , {{ userAnnonce.postalCode }} </p></li>
                            <li><p class="paraghAnnonce">{{ userAnnonce.country }}</p></li>

                        </ul>

                       </div>
                        <div class="bottomDivCardAnnonce">
                                                    <p class="bottomDivCardAnnonceP">{{ userAnnonce.priceDashboard }} €</p><br>
                        </div>

                        </div>
                        </article>

                    </section> -->



<div v-for="(userAnnonce , key) in sortedAnnonces" :key="key" id="containerAnnonce">

	<div class="product-details">

	<h1>
        {{ userAnnonce.title }}
    </h1>
	<h5>Localisation : </h5>

<ul>
    <li><p class="information">{{userAnnonce.address}}</p></li>
    <li v-if="userAnnonce.compAddress"><p class="information">{{userAnnonce.compAddress}}</p></li>
    <li><p class="information">{{userAnnonce.city}}</p></li>
        <li><p class="information">{{userAnnonce.postalCode}}</p></li>
        <li><p class="information">{{ userAnnonce.country }}</p></li>

</ul>


<div>
    <router-link

    :to="'/updateAnnonce/?annonce_id='+userAnnonce.id"
    ><i  class="fas fa-edit annoncesDashboardIcons annoncesDashboardIconsEdit"></i></router-link>



     <i @click="deleteAnnonce(userAnnonce.id)" class="fas fa-trash annoncesDashboardIcons annoncesDashboardIconsDelete"></i>

</div>

<div class="control">




    <router-link
        
            style="text-decoration: none"
            :to="'/annonce/?id='+userAnnonce.id"
            class="text-secondary"
          @click="scrollToTop "
          >
    <button class="btnAnnonce">
    <span class="priceDashboard">€ {{ userAnnonce.price }}</span>
   <span class="buy">Consulter</span>
 </button>
    </router-link>


</div>

</div>





<div class="product-image">

	<img v-for="(userAnnonceImage,key) in userAnnonce.images " v-show="userAnnonceImage.default=='true'" :key="key" :src="'storage/'+userAnnonceImage.path+'/'+userAnnonceImage.image">

<div class="infoDiv">
	<ul>
		<li><strong>Surface: </strong>{{userAnnonce.surface}} cm²</li>
		<li><strong>Nombre de couchages: </strong>{{userAnnonce. numberOfBeds}}</li>
		<li><strong>Capacité d'accueillement : </strong>{{userAnnonce.capacity}}</li>
		<li><strong> Animaux autorisés : </strong>{{userAnnonce.animaux }}</li>
	</ul>
</div>
</div>


</div>





 <div class="resultCount" >
          <h3> Affichage de {{ sortedAnnonces.length }} sur  {{ annonces.length }} résultats </h3>


            <button v-show="sortedAnnonces.length>0 && annonces.length>sortedAnnonces.length " @click="showMoreAction"  class="btn btn-dark">Voir plus</button>
        </div>



                </main>
          </div>

          <!-- statistiques -->

          <!-- rapports -->
          <div v-if="windowStep == 5" class="historiqueReservations">
            historiqueReservations
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
import $ from "jquery";

export default {
  data() {
    return {
        loggedIn:false,
        annonces : [],
      userRole: "",

      windowStep: 1,

      token: "",

      connectedUser: {
        email: "",
      },

      notifications: [],
      notificationsAvatars: [],
      from_users: [],

            newNotificationsCheck:false,
      newNotificationsCheckCount:0,


      limitCardsShowen : 4,

    titreChFiltre:'',
    typeLogementCh:"",
                                   sortValue: "news",
                                   typeLogementArray:[],

      typesLogement:[],





    };
  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.connectedUser.email = localStorage.getItem("useremail");

    console.log(this.token);

    //localStorage.setItem('windowStep' , 1);
    this.windowStep = localStorage.getItem("windowStep");

    this.userRole = localStorage.getItem("userRole");
    if (localStorage.getItem("token") != "") {
                this.loggedIn = true;

    } else if ( this.userRole=="owner" || this.userRole=="admin" ||
    this.userRole=="client" || localStorage.getItem("token") == "") {
                  this.loggedIn = false;

      this.$router.push({ path: "/" });
    }

    this.getTypeLogement();
    this.getUserNotifications();
    this.getAnnonces();
  },

  computed: {

    sortedAnnonces() {
        if (this.titreChFiltre!='') {
        this.limitCardsShowen = 10000;
        this.sortValue="news"
        return this.annonces.filter((item , index) => {
          return this.titreChFiltre
            .toLowerCase()
            .split(" ")
            .every((v) => {
              if (this.typeLogementCh != "") {

                return (
                  item.typeLogement.includes(this.typeLogementCh) &&
                  item.title.toLowerCase().includes(v)
                );

              }
              else{

                  return item.title.toLowerCase().includes(v)
              }
            });
        }).sort(this.orderBy);
      }else{

        if (this.sortValue == "news") {
          return this.annonces
            .sort((a, b) => {
              return a.id < b.id;
            })
            .filter((item,index) => {
              return index < this.limitCardsShowen  && item.typeLogement.includes(this.typeLogementCh);
            });


        }else if (this.sortValue == "anciens") {
          return this.annonces
            .sort((a, b) => {
                            return a.id > b.id;

            })
            .filter((item,index) => {
              return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
            });
        }
        else if (this.sortValue == "priceAsc") {
          return this.annonces
            .sort((a, b) => {
              return parseInt(a.price) > parseInt(b.price);
            })
            .filter((item,index) => {
              return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
            });
        } else if (this.sortValue == "priceDesc") {
          return this.annonces
            .sort((a, b) => {
              return parseInt(a.price) < parseInt(b.price);
            })
            .filter((item,index) => {
              return index < this.limitCardsShowen  && item.typeLogement.includes(this.typeLogementCh);
            });
        } else {
          return this.annonces;
           }

      }


    },
},

  methods: {
 getTypeLogement(){
          this.typesLogement=[];
          axios.get('/api/getTypeLogement').then((response) => {
                console.log('')
              response.data.typesLogement.forEach(element => {
                  this.typesLogement.push(element)
              });
          }).catch((err) => {

          });
      },



showMoreAction(){
          this.limitCardsShowen+=4;
      },
    typeLogementCount(ch) {
      let typeLogementCount = 0;

      if (ch != "") {
        this.annonces.forEach((element) => {
          if (element.typeLogement== ch) {
            typeLogementCount++;
          }
        });


        return typeLogementCount;
      }
      if (ch == "") {
        return this.annonces.length;
      }
    },
 orderByChanged(){
          this.sortValue=this.sortValue;
          this.typeLogementCh=''
          this.titreChFiltre=''
      },
getAnnonces(){
    this.annonces=[];
    axios
        .get("api/getAnnonces")
        .then((response) => {
          response.data.annoncesOrdered.forEach((element) => {
               this.typesLogement.forEach(elementaux => {
                        console.log('elementaux: ' , element)

                    if(elementaux.id == element.type_logement_id){


                                element.typeLogement = elementaux.name
}

                });
            this.annonces.push(element);
            this.typeLogementArray.push(element.typeLogement)

          });
        });
},

deleteAnnonce(id) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer cette annonce ?",

        text: "Cette action ne peut pas être annulée.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",

        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteAnnonceAux(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Annonce à été bien suprimée",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

deleteAnnonceAux(id){
    let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      axios
        .delete("api/deleteAnnonce/"+id , config).then((result) => {
            this.getAnnonces();

        }).catch((err) => {

        });

},

    deleteNotificationAux(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      console.log('id ::   ' , id);

      axios.delete("api/deleteNotification/" + id, config).then((result) => {
        this.getUserNotifications();
      });
    },

    deleteNotification(id) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer cette notification ?",

        text: "Cette action ne peut pas être annulée.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",

        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteNotificationAux(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Notification à été bien suprimée",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    changeNotificationReadingState() {
      console.log("noooootttttiiiiii");

      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let aux = {
        id: localStorage.getItem("userId"),
      };

      axios
        .post("api/changeNotificationReadAt", aux, config)
        .then((response) => {})
        .catch((err) => {});
    },

    getUserNotifications() {

        this.notifications=[];
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let user = { id: localStorage.getItem("userId") };

      axios.post("/api/getUserNotifications", user, config).then((response) => {
        if (response.data.notifications.length > 0) {
          response.data.notifications.forEach((element) => {


 response.data.avatars.forEach((elAux) => {
                console.log('avatarsavatarsavatars :   ' , element, elAux)
                if(elAux.user_id==element.from_id){
              element.avatar=elAux;
              }
            });
            this.notifications.push(element);

            if(element.read_at ==null){
                    this.newNotificationsCheckCount++;
                        this.newNotificationsCheck=true;
                    }
          });
        }
        console.log("notifications  dfdfdf:   ", this.notifications);



        if (response.data.from_users.length > 0) {
          response.data.from_users.forEach((element, key) => {
            console.log("hahaha");
            this.notifications[key].from_users = element;
          });
        }

        console.log("element :: ", this.notificationsAvatars.length);
      });
    },
    windowStepFunction(x) {
      let windowWidth = window.innerWidth;
      if (windowWidth < 820) {
        this.$router.go();
      }
      this.windowStep = x;
      localStorage.setItem("windowStep", x);

      if (x == 2) {
        this.changeNotificationReadingState();
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>




<style lang="css">
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
</style>


<style lang="scss">
</style>
