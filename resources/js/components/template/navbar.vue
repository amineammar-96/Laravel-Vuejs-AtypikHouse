<template>
  <div>
    <div v-show="loggedIn == true" class="">
      <li
        class="text-danger text-right p-0"
        style="list-style-type: none; text-align: end; margin-right: 20px"
      >
        <span style="font-size: 90%"> {{ user.email }}</span>
      </li>
    </div>

    <nav class="navbar navbar-expand-xl p-0 navbar-dark bg-white">
      <div class="containerAux m-0 p-3 pt-0" style="flex-direction: row">
        <a class="navbar-brand" href="#">
          <router-link


            style="text-decoration: none"
            to="/"
            class="text-secondary"
            @click="scrollToTop"

          >
            <img
              src="../../../../public/images/atypikHouseLogo.png"
              alt="LogoOfAtypikHouseAgence"
              style="margin-top: 10px"
              class="img-fluid"

            />
          </router-link>
        </a>
        <button

          class="navbar-toggler navbar-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span aria-hidden="true" class="navbar-toggler-icon text-dark"
            ><img
                          alt="icon"

              src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"
          /></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li  class="nav-item">
              <a class="nav-link text-secondary"
                ><router-link
                  @click="scrollToTop"
                  style="text-decoration: none"
                  to="/"
                  class="text-secondary"

                >
                  Accueil
                </router-link></a
              >
            </li>

             <li  v-if="!hideNavbar || !loggedIn " class="nav-item">
              <a class="nav-link text-secondary"
                ><router-link
                  @click="scrollToTop"
                  style="text-decoration: none"
                  to="/annoncesListPage"
                  class="text-secondary"
                >
                 Hébergements
                </router-link></a
              >
            </li>

             <li  v-if="!hideNavbar && loggedIn " class="nav-item">
              <a class="nav-link text-secondary"
                ><router-link
                  @click="scrollToTop"
                  style="text-decoration: none"
                  to="/favoritesAnnonces"
                  class="text-secondary"
                >
                 Favoris
                </router-link></a
              >
            </li>

            <!-- <li class="nav-item dropdown dropdownNavbar">
              <a
                class="nav-link dropdown-toggle text-secondary"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nos hébergements
              </a>
              <ul
                class="dropdown-menu dropdownNavbar-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <router-link
                    @click="scrollToTop"
                    style="text-decoration: none"
                    to="/annoncesListPage"
                    class="text-secondary"
                    ><a class="dropdown-item"
                      >– Tous les hébergements –</a
                    ></router-link
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/cabanes"
                      class="text-secondary"
                      >Cabanes</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/bulles"
                      class="text-secondary"
                      >Bulles</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/maisons-de-hobbit"
                      class="text-secondary"
                      >Maison de Hobbit</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/chalets"
                      class="text-secondary"
                      >Chalet</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/yourtes"
                      class="text-secondary"
                      >Yourtes</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/autres-annonces"
                      class="text-secondary"
                      >Autres</router-link
                    ></a
                  >
                </li>
              </ul>
            </li> -->

            <li class="nav-item">
              <a class="nav-link text-secondary"
                ><router-link
                  @click="scrollToTop"
                  style="text-decoration: none"
                  to="/qui-sommes-nous"
                  class="text-secondary"
                  >Qui sommes-nous ?
                </router-link></a
              >
            </li>
            <li  v-if="!hideNavbar || !loggedIn " class="nav-item">
              <a class="nav-link text-secondary"
                ><router-link
                  @click="scrollToTop"
                  style="text-decoration: none"
                  to="/contact"
                  class="text-secondary"
                  >Contact</router-link
                ></a
              >
            </li>

            <li
              v-show="user.role == 'owner' && loggedIn==true && !hideNavbar"
              class="nav-item"
            >
              <a class="nav-link text-secondary"
                ><router-link
                  @click="scrollToTop"
                  style="
                    text-decoration: none;
                    display: flex;
                    justify-content: ;
                    align-items: end;
                  "
                  to="/ajouter-annonce"
                >
                  <div>
                    <img
                    alt='icon'
                      src="https://img.icons8.com/ios-glyphs/25/1A1A1A/bungalow.png"
                      style="margin: 0px 5px"
                    />
                    <!-- <img
                      src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/25/22C3E6/external-house-interface-kiranshastry-solid-kiranshastry.png"
                      style="margin: 0px 10px"
                    /> -->
                  </div>
                  <div>Proposer un logement</div>
                </router-link></a
              >
            </li>
          </ul>
          <div class="d-flex">
            <div class="dropdown" v-show="!loggedIn">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                alt="icon"
                  src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"
                />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item">
                    <router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/se-connecter"
                      class="text-dark"
                      >Se connecter</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/inscription"
                      class="text-dark"
                      >Inscription</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/devenir-hote"
                      class="text-dark"
                      >Devenir hôte</router-link
                    ></a
                  >
                </li>
              </ul>
            </div>

            <div class="dropdown" v-show="loggedIn">
              <button
                class="btn btn-light shadow-none dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <!-- <img
                alt='icon'
                  src="https://img.icons8.com/material-outlined/24/000000/dashboard-layout.png"
                /> -->

                                <i class="fas fa-bars"></i>

              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li  v-if="user.role == 'client'" v-show="!hideNavbar">
                  <a class="dropdown-item">
                    <router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/dashboardClient"
                      class="text-dark"
                      >Dashboard</router-link
                    ></a
                  >
                </li>
                <!-- <li v-if="user.role == 'client'">
                  <a class="dropdown-item"
                    ><router-link
                      style="text-decoration: none"
                      to="/profileClient"
                      class="text-dark"
                      >Profil</router-link
                    ></a
                  >
                </li> -->
                <li v-if="user.role == 'owner'" v-show="!hideNavbar">
                  <a class="dropdown-item">
                    <router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/dashboardOwner"
                      class="text-dark"
                      >Dashboard</router-link
                    ></a
                  >
                </li>
                <!-- <li v-if="user.role == 'owner'">
                  <a class="dropdown-item"
                    ><router-link
                      style="text-decoration: none"
                      to="/profileOwner"
                      class="text-dark"
                      >Profil</router-link
                    ></a
                  >
                </li> -->
                <li v-if="user.role == 'admin' " v-show="!hideNavbar">
                  <a class="dropdown-item">
                    <router-link
                      @click="scrollToTop && windowStepReset"
                      style="text-decoration: none"
                      to="/dashboardAdmin"
                      class="text-dark"
                      >Dashboard</router-link
                    ></a
                  >
                </li>
                <li v-if="user.role == 'moderateur'">
                  <a class="dropdown-item">
                    <router-link
                      @click="scrollToTop && windowStepReset"
                      style="text-decoration: none"
                      to="/dashboardModerateur"
                      class="text-dark"
                      >Dashboard</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link
                      @click="scrollToTop"
                      style="text-decoration: none"
                      to="/profileAdmin"
                      class="text-dark"
                      >Profil</router-link
                    ></a
                  >
                </li>

                <li>
                  <a class="dropdown-item text-danger" @click="logOut()"
                    >Se déconnecter</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      loggedIn: false,

      user: {
        id: "",
        token: "",
      },



      hideNavbar:true,

    };
  },

  mounted() {
    this.user.firstname = localStorage.getItem("firstname");
    this.user.lastname = localStorage.getItem("lastname");
    this.user.id = localStorage.getItem("userId");




    this.intervalid1 = setInterval(
      function () {
        this.user.token = localStorage.getItem("token");
        this.user.role = localStorage.getItem("userRole");
    this.user.email = localStorage.getItem("useremail");

        if (localStorage.getItem("token") != "") {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }

       if(localStorage.getItem('firstLogin')=="true"){
            this.hideNavbar=true
        }else{
            this.hideNavbar=false
        }

      }.bind(this),
      200
    );




  },

  methods: {
        scrollToTop() {
    window.scrollTo(0,0);
  },
    logOut() {
      localStorage.setItem("token", "");
      localStorage.setItem("useremail", "");
      localStorage.setItem("id", "");
      localStorage.setItem("loggedIn", "");
      localStorage.setItem("firstname", "");
      localStorage.setItem("lastname", "");
      localStorage.setItem("userRole", "");
      localStorage.setItem("userId", "");

      this.$router.push({ path: "/se-connecter" });
      window.scrollTo(0, 0);
    },

    windowStepReset() {
      localStorage.setItem("windowStep", 1);
      window.scrollTo(0, 0);

      //window.location.reload()
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>


<style lang="scss">
 .containerAux{
            flex-direction: row;
    display: flex;
    justify-content: space-between;
    width: 92%;
        }
    @media screen and (max-width:1200px) {
        .containerAux{
          display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    width: 100%;
        }
    }
</style>
