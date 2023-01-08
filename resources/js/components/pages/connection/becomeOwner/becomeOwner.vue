<template>
  <div>
    <div class="container">
      <div class="feat bg-gray pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <h1 style="    font-family: 'Kaushan Script', cursive;">
                <span>Pourquoi déposer vos annonces chez</span> AtypikHouse?
              </h1>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                <span class="icon feature_box_col_one"
                  ><i class="fa fa-globe"></i
                ></span>
                <h2>Service de qualité</h2>
                <p>
                  AtypikHouse met tout en oeuvre pour répondre à vos questions.
                  Notre support est à votre disposition par téléphone ou bien
                  par mail.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                <span class="icon feature_box_col_two"
                  ><i class="fa fa-eye"></i
                ></span>
                <h2>Forte visibilité</h2>
                <p>
                  Grâce à nos campagnes marketing ciblées et notre référencement
                  précis et pertinent, vous bénéficiez de notre visibilité et de
                  notre notoriété.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                <span class="icon feature_box_col_three"
                  ><i class="fa fa-calendar"></i
                ></span>
                <h2>Gestion de votre calendrier</h2>
                <p>
                  Vous êtes complétement libre de définir les dates de
                  disponibilité de votre hébergement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="p-5 text-center">Comment proposer vos annonces ?</h2>

      <ul class="process">
        <li class="process__item">
          <span class="process__number">1</span>
          <span class="process__subtitle"
            >Inscrivez-vous via le formulaire dédié aux propriétaires.</span
          >
        </li>

        <li class="process__item">
          <span class="process__number">2</span>
          <span class="process__subtitle"
            >Déposez votre première annonce sur AtypikHouse.</span
          >
        </li>

        <li class="process__item">
          <span class="process__number">3</span>
          <span class="process__subtitle"
            >Faites-vous certifier par l'équipe technique d'AtypikHouse (dans
            les meilleurs délais).</span
          >
        </li>
      </ul>

      <div class="formContent pt-5 pb-5">
        <h2 class="text-bold text-center pt-5">Faites votre demande !</h2>
        <h3 class="text-center pb-5">
          Entrez vos informations pour vous inscrire
        </h3>

        <section
          class=""
          style="height: 100%; background-color: #fafafa; border-radius: 25px"
        >
          <div class="container" style="height: 100%">
            <div
              class="row d-flex justify-content-center align-items-center h-100"
            >
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style="border-radius: 25px">
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div
                        class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                      >
                        <h3 class="text-center h1 w mb-5 mx-1 mx-md-4 mt-4">
                          Devenir propriétaire
                        </h3>

                        <form @submit.prevent="signup()" class="mx-1 mx-md-4">
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                v-model="user.lastname"
                                :class="
                                  hasError('lastname') ? 'is-invalid' : ''
                                "
                                class="form-control"
                                required
                              />
                              <label class="form-label" for="form3Example1c"
                                >Nom</label
                              >
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="name2"
                                v-model="user.firstname"
                                :class="
                                  hasError('firstname') ? 'is-invalid' : ''
                                "
                                required
                                class="form-control"
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
                                type="email"
                                id="form3Example3c"
                                v-model="user.email"
                                :class="hasError('email') ? 'is-invalid' : ''"
                                class="form-control"
                                required
                              />
                              <label class="form-label" for="form3Example3c"
                                >Adresse email</label
                              >
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                v-model="user.password"
                                :class="
                                  hasError('password') ? 'is-invalid' : ''
                                "
                                required
                              />
                              <label class="form-label" for="form3Example4c"
                                >Mot de passe</label
                              >
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                class="form-control"
                                v-model="user.password_confirmation"
                                :class="
                                  hasError('password') ? 'is-invalid' : ''
                                "
                                required
                              />
                              <label class="form-label" for="form3Example4cd"
                                >Repetez le mot de passe</label
                              >
                            </div>
                          </div>
                          <div
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
                            v-show="errors && errors.firstname"
                            class="
                              justify-content-left
                              text-danger
                              mx-4
                              mb-3 mb-lg-4
                            "
                          >
                            {{ errors.firstname }}
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
                            {{ errors.email }}
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
                           *Veuillez vérifier le mot de passe
                          </div>

                          <div
                            class="
                              d-flex
                              justify-content-center
                              mx-4
                              mb-3 mb-lg-4
                            "
                          ></div>

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
                                padding: 10px 25px;
                                border-radius: 35px;
                              "
                            >
                              S'inscrire
                            </button>
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
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          class="img-fluid"
                          alt="wallpaper become owner"
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
        role: "owner",
      },

      errors: {
        lastname: "",
        firstname: "",
        password: "",
        email: "",
      },
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
        .then((result) => {

            this.errors.firstname = "";
            this.errors.email = "";
            this.errors.password = "";
            this.errors.lastname = "";
            this.errors.password = "";

                  this.$router.push("/newClientAccount");

          console.log(result);

        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data.errors) {
                 console.log("invalid");

                 Swal.fire({
  icon: 'error',
  text: 'Vérifier vos informations',
      confirmButtonColor: "red",
          confirmButtonClass: " px-4 py-2 rounded-pill ",


})

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


<style lang="css">
h1,
h2,
h3,
h1,
h2,
h2 {

}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;

}

a,
a:active,
a:focus {
  color: #333;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
span,
a,
a:hover {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}
.section-head {
  margin-bottom: 60px;
}
.section-head h1 {
  position: relative;
  padding: 0;
  color: #3b91d6;
  line-height: 1;
  letter-spacing: 0.3px;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  text-transform: none;
  margin-bottom: 30px;
}
.section-head h1:before {
  content: "";
  width: 60px;
  height: 3px;
  background: #56aaee;
  position: absolute;
  left: 0px;
  bottom: -10px;
  right: 0;
  margin: 0 auto;
}
.section-head h1 span {
  font-weight: 700;
  padding-bottom: 5px;
  color: #2f2f2f;
}
p.service_text {
  color: #cccccc !important;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}
.section-head p,
p.awesome_line {
  color: #818181;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}

.extra-text {
  font-size: 34px;
  font-weight: 700;
  color: #2f2f2f;
  margin-bottom: 25px;
  position: relative;
  text-transform: none;
}
.extra-text::before {
  content: "";
  width: 60px;
  height: 3px;
  background: #56aaee;
  position: absolute;
  left: 0px;
  bottom: -10px;
  right: 0;
  margin: 0 auto;
}
.extra-text span {
  font-weight: 700;
  color: #56aaee;
}
.item {
    cursor: pointer;
  background: #fff;
  text-align: center;
  padding: 30px 25px;
  -webkit-box-shadow: 0 0px 25px rgba(0, 0, 0, 0.07);
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  border: 5px solid rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.2s ease 0;
  transition: all 0.2s ease 0s;
  height: 360px;
}
.item:hover {
  background: #56aaee;
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
}
.item:hover .item,
.item:hover span.icon {
  background: #fff;
  border-radius: 10px;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
}
.item:hover h2,
.item:hover p {
  color: #fff;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
}
.item .icon {
  font-size: 40px;
  margin-bottom: 25px;
  color: #56aaee;
  width: 90px;
  height: 90px;
  line-height: 96px;
  border-radius: 50px;
}
.item .feature_box_col_one {
  background: rgba(247, 198, 5, 0.2);
  color: #56aaee;
}
.item .feature_box_col_two {
  background: rgba(255, 77, 28, 0.15);
  color: #56aaee;
}
.item .feature_box_col_three {
  background: rgba(0, 147, 38, 0.15);
  color: #56aaee;
}
.item .feature_box_col_four {
  background: rgba(0, 108, 255, 0.15);
  color: #56aaee;
}
.item .feature_box_col_five {
  background: rgba(146, 39, 255, 0.15);
  color: #56aaee;
}
.item .feature_box_col_six {
  background: rgba(23, 39, 246, 0.15);
  color: #56aaee;
}
.item p {
  font-size: 15px;
  line-height: 26px;
}
.item h2 {
  margin-bottom: 20px;
  color: #2f2f2f;
}
.mission p {
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 28px;
  font-weight: 500;
}
.mission i {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #f91942;
  border-radius: 50%;
  color: #fff;
  font-size: 25px;
}
.mission .small-text {
  margin-left: 10px;
  font-size: 13px;
  color: rgb(107, 43, 91);
}
.skills {
  padding-top: 0px;
}
.skills .prog-item {
  margin-bottom: 25px;
}
.skills .prog-item:last-child {
  margin-bottom: 0;
}
.skills .prog-item p {
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
}
.skills .prog-item .skills-progress {
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 20px;
  position: relative;
}
.skills .prog-item .skills-progress span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #56aaee;
  width: 10%;
  border-radius: 10px;
  -webkit-transition: all 1s;
  transition: all 1s;
}
.skills .prog-item .skills-progress span:after {
  content: attr(data-value);
  position: absolute;
  top: -5px;
  right: 0;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  background: rgba(0, 0, 0, 0.9);
  padding: 3px 7px;
  border-radius: 30px;
}
</style>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,700&display=swap");

@import url("https://fonts.googleapis.com/css?family=Josefin+Slab&display=swap");

$primary-color: #003c71;
$secondary-color: #fff;

*,
*::before,
*::after {
  box-sizing: border-box;
}

.process {
  $bem-block: &;

  width: 100%;
  padding: 0 15px;
  text-align: center;

  &__item {
    user-select: none;
    text-align: center;
    position: relative;
    padding: 15px 35px;
    transition: 0.4s ease-in-out;

    &:hover {
      background: darken($secondary-color, 5%);
    }

    &:hover #{$bem-block}__number {
      transform: translateY(5px);
      color: $primary-color;
    }
  }

  &__number {
    font-size: 90px;
    -webkit-text-stroke: 1px $primary-color;
    display: block;
    color: transparent;
    font-family: "Roboto Condensed";
    font-weight: 700;
    transition: 0.4s ease-in-out;
  }

  &__title {
    display: block;
    font-family: "Roboto Condensed";
    font-weight: 700;
    letter-spacing: 1.5px;
    font-size: 35px;
    color: $primary-color;
    text-transform: uppercase;
    margin-top: 30px;
  }

  &__subtitle {
    display: block;
    font-family: "Josefin Slab";
    font-size: 20px;
    color: black;
    margin-top: 30px;
    line-height: 1.5;
    font-weight: bold;
  }
}

@media (min-width: 768px) {
  .process {
    display: inline-block;

    &__item {
      width: 49%;
      display: inline-block;
    }
  }
}

@media (min-width: 1200px) {
  .process {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__item {
      width: 100%;

      &:not(:last-of-type) {
        &::after {
          content: "";
          width: 1px;
          height: 75%;
          background: darken($secondary-color, 45%);
          position: absolute;
          right: 0;
          top: 50%;
          opacity: 0.2;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
