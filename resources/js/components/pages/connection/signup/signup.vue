<template>
  <div>
    <div class="formContent">
      <section class="" style="height: 100%; background-color: #f3f3f3">
               <h1>Rejoignez l'équipe AtypikHouse</h1>

       <div class="container" style="height: 100%">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <h3 class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Inscription
                      </h3>

                      <form @submit.prevent="signup()" class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              :class="hasError('lastname') ? 'is-invalid' : ''"
                              v-model="user.lastname"
                              type="text"
                              id="name"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="name"
                              >Nom</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              :class="hasError('firstname') ? 'is-invalid' : ''"
                              v-model="user.firstname"
                              type="text"
                              id="name2"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="name2"
                              >Prénom</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              :class="hasError('email') ? 'is-invalid' : ''"
                              v-model="user.email"
                              type="email"
                              id="email"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="email"
                              >Adresse email</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              :class="hasError('password') ? 'is-invalid' : ''"
                              v-model="user.password"
                              type="password"
                              id="mdp"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="mdp"
                              >Mot de passe</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              :class="hasError('password') ? 'is-invalid' : ''"
                              v-model="user.password_confirmation"
                              type="password"
                              id="mdp2"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="mdp2"
                              >Repetez le mot de passe</label
                            >
                          </div>
                        </div>

                        <div
                          v-show="errors && errors.email"
                          class="
                            justify-content-left
                            text-danger
                            mx-4
                            mb-3 mb-lg-4
                          "
                        >
                          *Veuillez saisir une adresse email valide
                        </div>

                        <div
                          v-show="errors && errors.password"
                          class="
                            justify-content-left
                            text-danger
                            mx-4
                            mb-3 mb-lg-4
                          "
                        >
                          *Veuillez vérifier le mot de passe saisi (minimum 8
                          caractéres )
                        </div>
                        <!-- <div
                          v-show="errors.lastname != ''"
                          class="
                            justify-content-left
                            text-danger
                            mx-4
                            mb-3 mb-lg-4
                          "
                        >
                          {{ errors.lastname }}
                        </div>

                        <div
                          v-show="errors && errors.password"
                          class="
                            justify-content-left
                            text-danger
                            mx-4
                            mb-3 mb-lg-4
                          "
                        >
                          {{ errors.password }}
                        </div> -->

                        <div
                          class="
                            d-flex
                            justify-content-center
                            mx-4
                            mb-3 mb-lg-4
                          "
                        >
                          <button
                            type="submit"
                            class="btn signupBtnForm"
                            style="
                              color: white;
                              padding: 10px 40px;
                              border-radius: 30px;
                              text-transform: uppercase;
                              font-weight: bold;
                              font-size: 17px;
                            "
                          >
                            S'inscrire
                          </button>
                        </div>

                        <div
                          class="form-check d-flex justify-content-center mb-5"
                        >
                            <router-link
                              style="text-decoration: none"
                              to="/se-connecter"
                              class="text-dark"
                              >Déjà un compte chez nous ?</router-link
                            >
                        </div>
                      </form>
                    </div>
                    <div
                      class="
                        col-md-10 col-lg-6 col-xl-7
                        d-flex
                        align-items-center
                        order-1 order-lg-2
                      "
                    >
                      <img
                        src="https://blog.toploc.com/wp-content/uploads/2016/02/Cabane-en-bois-%C2%A9escapehomes.us_.png"
                        class="img-fluid"
                        alt="wallpaper atypikhouse "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      user: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "client",
      },

      errors: {
        lastname: "",
        firstname: "",
        password: "",
        email: "",
      },

      errorsArray: [],
    };
  },

  mounted() {
    if (localStorage.getItem("loggedIn") == "loggedIn") {
      this.$router.push({ path: "/profile" });
    }
  },

  methods: {
    signup() {
      axios
        .post("/api/signupClient", this.user)
        .then((response) => {
            console.log('result : ' + response)
         this.$router.push("/newClientAccount");

          if (response.data.status != "invalid") {
            this.errors.firstname = "";
            this.errors.email = "";
            this.errors.password = "";
            this.errors.lastname = "";

          } else if (response.data.status == "true") {
              this.$router.push("/newClientAccount");
              this.user= {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "client",
      },
            console.log("valideeeeee");
            this.errors.firstname = "";
            this.errors.email = "";
            this.errors.password = "";
            this.errors.lastname = "";
          }else {
              this.user= {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "client",
      },
            console.log("valideeeeee");
            this.errors.firstname = "";
            this.errors.email = "";
            this.errors.password = "";
            this.errors.lastname = "";
          }


        })
        .catch((error) => {
            Swal.fire({
                        confirmButtonText: "D'accord",

                        confirmButtonColor: "rgb(255, 0, 0)",
 confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
                icon: "info",

                text: "Adresse e-mail déja utilisée" ,
              });
          if (error.response) {
            if (error.response.data.errors) {

              if (error.response.data.errors.firstname) {
                this.errors.firstname =
                  error.response.data.errors.firstname[0] ?? "";
              } else {
                this.errors.firstname = "";
              }
              if (error.response.data.errors.email) {
                this.errors.email = error.response.data.errors.email[0] ?? "";
              } else {
                this.errors.email = "";
              }

              if (error.response.data.errors.password) {
                this.errors.password =
                  error.response.data.errors.password[0] ?? "";
              } else {
                this.errors.password = "";
              }

              if (error.response.data.errors.lastname) {
                this.errors.lastname =
                  error.response.data.errors.lastname[0] ?? "";
              } else {
                this.errors.lastname = "";
              }


              this.errorsArray = [];

              if (this.errors.firstname) {
                this.errors.firstname = "Veuillez saisir un nom complet";
                this.errorsArray.push(this.errors.firstname);
              }

              if (this.errors.lastname) {
                this.errors.lastname = "Veuillez saisir un nom complet";

                this.errorsArray.push(this.errors.lastname);
              }

              if (this.errors.email) {
                this.errors.email = "Veuillez saisir une adresse e-mail valide";

                this.errorsArray.push(this.errors.email);
              }

              if (this.errors.password) {
                                  this.errors.password = "Veuillez bien saisir votre mot de passe";

                this.errorsArray.push(this.errors.password);
              }

              console.log("hahahahb: " + this.errorsArray);

              Swal.fire({
                icon: "error",
                confirmButtonText: "D'accord",

                        confirmButtonColor: "rgb(255, 0, 0)",
 confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },

                text: this.errorsArray[0] ,
              });
            }
            }



        });

    },

    hasError(item) {
      // console.log(this.errors[item]);
      if (this.errors[item] != "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
