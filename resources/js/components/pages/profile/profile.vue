<template>
  <div>
    <div class="container rounded bg-white mt-5 mb-5">
        <h1>Profile</h1>
      <div class="row">
        <div
          :class="userInfoSavedAlready ? 'col-md-3' : 'col-md-6'"
          class="border-right"
        >
          <div
            class="
              d-flex
              flex-column
              align-items-center
              text-center
              p-3
              py-5
              pt-0
              userInfoPartOne
            "
            style="height: 100%; justify-content: center"
          >
            <!-- <img
              class="rounded-circle img-fluid mt-5"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            /> -->

            <div class="personal-image">
              <label for="images" class="label">
                <input
                  type="file"
                  v-on:change="uploadAvatar"
                  accept="image/*"
                  id="images"
                />
                <figure class="personal-figure">
                  <img
                    v-if="userAvatar == ''"
                    src="../../../../../public/images/avatar.png"
                    class="personal-avatar"
                    alt="avatar"
                  />

                  <img
                    v-if="userAvatar != ''"
                    :src="
                      '/storage/' + userAvatar[0].path + '' + userAvatar[0].name
                    "
                    class="personal-avatar"
                    alt="avatar"
                  />

                  <figcaption class="personal-figcaption">
                    <img
                      src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"
                    />
                  </figcaption>
                </figure>
              </label>
            </div>

            <span class="font-weight-bold">
              {{ user.lastname }} {{ user.firstname }} </span
            ><span class="text-black-50">{{ user.email }}</span
            >
            <span v-if="user.email_verified_at!=null" class="emailVerifyDivVerified ">Compte vérifié</span
            >

             <span @click="mailVertificationRequest" style="color: red;font-size: 12px;" v-if="user.email_verified_at==null"  class="">Compte non vérifié</span
            >             <span @click="mailVertificationRequest" v-if="user.email_verified_at==null"  class="emailVerifyDiv">Vérifier mainetenant</span>

          </div>
        </div>

        <div
          :class="userInfoSavedAlready ? 'col-md-5' : 'col-md-6'"
          class="border-right"
        >
          <div class="p-3 py-5 pt-0">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 v-if="userInfoSavedAlready" class="text-right">Informations</h2>
              <h2 v-if="!userInfoSavedAlready" class="text-right">
                Créer votre profile
              </h2>
            </div>
            <form @submit.prevent="saveUserProfile()">
            <div class="row mt-2">
              <div class="col-md-6">
                <label for="name" class="labels">Nom</label
                ><input
                  v-model="user.lastname"
                  type="text"
                  class="form-control form-controlProfile"
                  placeholder="Nom"
                  :class="checkforErrors('lastname') ? 'is-invalid' : ''"
                  required
                  id="name"
                />
              </div>
              <div class="col-md-6">
                <label for="lastname" class="labels">Prénom</label
                ><input
                  v-model="user.firstname"
                  type="text"
                  class="form-control form-controlProfile"
                  placeholder="Prénom"
                  :class="checkforErrors('firstname') ? 'is-invalid' : ''"
                  required
                  id="lastname"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label for="phoneNumber" class="labels">Téléphone</label
                ><input
                  v-model="user.phoneNumber"
                  type="text"
                  class="form-control form-controlProfile"
                  placeholder="Numéro de téléphone"
                  :class="checkforErrors('phoneNumber') ? 'is-invalid' : ''"
                  required
                  id="phoneNumber"
                />
              </div>
              <div class="col-md-12">
                <label for="address" class="labels">Adresse</label
                ><input
                  v-model="user.address"
                  type="text"
                  class="form-control form-controlProfile"
                  placeholder="Adresse"
                  :class="checkforErrors('address') ? 'is-invalid' : ''"
                  required
                  id="address"
                />
              </div>
              <div class="col-md-12">
                <label for='compAddress' class="labels">Complément d'adresse</label
                ><input
                  v-model="user.compAddress"
                  type="text"
                  class="form-control form-controlProfile"
                  placeholder="Complément d'adresse"
                  :class="checkforErrors('compAddress') ? 'is-invalid' : ''"
                    id="compAddress"
                />
              </div>
              <div class="col-md-12">
                <label  for="postalCode" class="labels">Code postal</label
                ><input
                  v-model="user.postalCode"
                  type="text"
                  class="form-control form-controlProfile"
                  placeholder="Code postal"
                  :class="checkforErrors('postalCode') ? 'is-invalid' : ''"
                  required
                  id="postalCode"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label for="city" class="labels">Ville</label
                ><input
                  v-model="user.city"
                  type="text"
                  class="form-control form-controlProfile"
                  placeholder="Ville"
                  :class="checkforErrors('city') ? 'is-invalid' : ''"
                  required
                  id="city"
                />
              </div>
              <div class="col-md-6">
                <label for="country" class="labels">Pays</label>

                <div class="input-box">
                  <select
                    v-model="user.country"
                    style="background-color: white"
                    required
                    id="country"
                  >
                    <option value="Belgique">Belgique</option>
                    <option value="Bulgarie">Bulgarie</option>
                    <option value="Croatie">Croatie</option>
                    <option value="République tchèque">
                      République tchèque
                    </option>
                    <option value="Danemark">Danemark</option>
                    <option value="Estonie">Estonie</option>
                    <option value="Finlande">Finlande</option>
                    <option value="France" selected>France</option>
                    <option value="Allemagne">Allemagne</option>
                    <option value="Grèce">Grèce</option>
                    <option value="Hongrie">Hongrie</option>
                    <option value="Islande">Islande</option>
                    <option value="Italie">Italie</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Pays-Bas">Pays-Bas</option>
                    <option value="Nouvelle-Zélande">Nouvelle-Zélande</option>
                    <option value="Pologne">Pologne</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Roumanie">Roumanie</option>
                    <option value="Slovaquie">Slovaquie</option>
                    <option value="Slovénie">Slovénie</option>
                    <option value="Espagne">Espagne</option>
                    <option value="Suède">Suède</option>
                    <option value="Suisse">Suisse</option>
                    <option value="Royaume-Uni">Royaume-Uni</option>
                  </select>
                </div>
              </div>

            </div>

            <div class="mt-5 text-center">
              <button
                v-if="userInfoSavedAlready"
                class="btn profile-button"
                type="submit"
              >
                Enregistrer les modifications
              </button>
              <button
                v-else

                class="btn profile-button"
                type="submit"
              >
                Enregistrer
              </button>
            </div>
             </form>
          </div>
        </div>

        <div v-if="userInfoSavedAlready" class="col-md-4">
          <div class="p-3 py-5 pt-0">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                experience
              "
            >
              <h2 class="pb-0 mb-0">Modification de mot de passe</h2>
            </div>
            <br />
            <div class="col-md-12">
              <label for="mdp1" class="labels">Nouveau mot de passe</label
              ><input
                type="password"
                class="form-control form-controlProfile"
                v-model="user.password"
                placeholder="..."
                id="mdp1"
              />
            </div>
            <br />
            <div class="col-md-12">
              <label for="mdp2" class="labels">Repetez le mot de passe</label
              ><input
                type="password"
                class="form-control form-controlProfile"
                v-model="user.password_confirmation"
                placeholder="..."
                id="mdp2"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button
              class="btn btn-primary profile-button"
              type="button"
              @click="updatePassword()"
            >
              Modifier le mot de passe
            </button>
          </div>
        </div>
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
      userRole: "",
      user: {
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        address: "",
        compAddress: "",
        postalCode: "",
        city: "",
        country: "France",
        token: "",
        email_verified_at:'',
      },

      errors: {},

      user: {
        id: "",
        password: "",
        password_confirmation: "",
      },

      userInfoSavedAlready: false,

      avatar: "",
      avatarForm: new FormData(),
      avatarUrl: "",

      userAvatar: "",
    };
  },

  mounted() {
    this.user.lastname = localStorage.getItem("lastname");
    this.user.firstname = localStorage.getItem("firstname");

    this.user.email = localStorage.getItem("useremail");
    this.user.id = localStorage.getItem("userId");
    this.user.token = localStorage.getItem("token");

    this.userRole = localStorage.getItem("userRole");
    if (localStorage.getItem("token") == "") {
      this.$router.push({ path: "/se-connecter" });
    }

    this.getUserProfile();

    this.getAvatarByUserId();


  },

  methods: {


      mailVertificationRequest(){
           let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };
      axios
        .post("api/mailVertificationRequest", this.user, config)
        .then((response) => {
          let timerInterval
Swal.fire({
  title: 'E-mail de vérification envoyé',
  html: '</p>Vous allez recevoir un email veuillez consulter vos emails.</p>',
  timer: 3000,
  timerProgressBar: false,

  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
        })
        .catch((err) => {});
      },
    getAvatarByUserId() {
        this.userAvatar = "";
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };
      axios
        .post("api/getAvatarByUserId", this.user, config)
        .then((response) => {
          if (response.data.userAvatar.length > 0) {
            this.userAvatar = response.data.userAvatar;
          } else {
            this.userAvatar = "";
          }

          console.log("avvvvv = ", this.userAvatar);
        })
        .catch((err) => {});
    },

    uploadAvatar(e) {
      this.avatar = e.target.files[0];

      this.avatarForm.append("avatar", this.avatar);
      this.avatarForm.append("user_id", this.user.id);

      console.log("fooooorm", this.avatarForm);

      this.user.token = localStorage.getItem("token");

      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
          "content-type": "multipart/form-data",
        },
      };

      axios
        .post("api/uploadAvatar", this.avatarForm, config)
        .then((response) => {
          console.log("response");

        //   this.getAvatarByUserId();
        //   this.getAvatarByUserId();

           this.$router.go()

        })
        .catch((error) => {
          console.log(error);
        });

    },
    updatePassword() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };
      this.user.id = localStorage.getItem("userId");
      axios
        .post("api/updatePasswordUser", this.user, config)
        .then((response) => {
          console.log("res: ", response);
          Swal.fire({
            icon: "success",
            text: "Mot de passe a été bien modifier",
            showConfirmButton: false,
            timer: 2000,
          });
          this.user.password = "";
          this.user.password_confirmation = "";
        })
        .catch((err) => {
          console.log("err ; ", err.response.data.errors.password[0]);
          if (
            err.response.data.errors.password[0] ==
            "The password field is required."
          ) {
            Swal.fire({
              icon: "error",
              text: "Veuillez remplir le nouveau mot de passe ",
              buttonsStyling: true,

               confirmButtonText: "D'accord",

                        confirmButtonColor: "rgb(0, 0, 0)",


          confirmButtonClass: " px-4 py-2 rounded-pill ",

            });
          } else if (
            err.response.data.errors.password[0] ==
            "The password confirmation does not match."
          ) {
            Swal.fire({
              icon: "error",
              text: "Veuillez confirmer le nouveau mot de passe  ",
              buttonsStyling: false,
              customClass: {
                confirmButton: "confirmButtonSwal", //insert class here
              },
            });
          } else {
            Swal.fire({
              icon: "error",
              text: "Veuillez vérifier le nouveau mot de passe (minimum 8 charactéres) ",
              buttonsStyling: false,
              customClass: {
                confirmButton: "confirmButtonSwal", //insert class here
              },
            });
          }
        });
    },

    getUserProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };
      axios
        .post("api/getUserInfo", this.user, config)
        .then((response) => {

          if(response.data.user.length>0){
            this.user.email_verified_at = response.data.user[0].email_verified_at;
          }


          if (response.data.userInfo.length > 0) {
            this.user.address = response.data.userInfo[0].address;
            this.user.compAddress = response.data.userInfo[0].addressComp;
            this.user.phoneNumber = response.data.userInfo[0].phone;
            this.user.postalCode = response.data.userInfo[0].postalCode;
            this.user.city = response.data.userInfo[0].city;
            this.user.country = response.data.userInfo[0].country;

            this.user.lastname = response.data.user[0].lastname;
            this.user.firstname = response.data.user[0].firstname;
            localStorage.setItem("firstLogin", "false");
            this.userInfoSavedAlready = true;
          } else {
            this.userInfoSavedAlready = false;
            localStorage.setItem("firstLogin", "true");
          }

          if (!this.userInfoSavedAlready) {
            Swal.fire({
              title: "Votre profile n'est pas encore crée ",
              text: "Veuillez saisir vos informations",
              icon: "info",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonColor: "#0370c8",
            });
          }
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    },

    checkforErrors(key) {
      if (Object.keys(this.errors).includes(key)) {
        return true;
      } else {
        return false;
      }
    },

    saveUserProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };
      axios
        .post("api/saveUserInfo", this.user, config)
        .then((response) => {
          console.log(response);
          this.errors = {};

          Swal.fire({
            position: "center",
            icon: "success",
            text: "Profile a été bien modifier",
            showConfirmButton: false,
            timer: 2000,
          });

          this.$router.go();
        })
        .catch((err) => {
          Swal.fire({
            title: "Veuillez bien remplire votre profile",
            icon: "error",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonColor: "#0370c8",
          });
          console.log("err : ", err);

          this.errors = err.response.data.errors;
          console.log("Errors table :   ", this.errors);
        });
    },
  },
};
</script>


<style lang="css">
.form-controlProfile:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  background: -webkit-linear-gradient(to right, #323232, #181818);
  background: linear-gradient(to right, #323232, #181818);
  box-shadow: none;
  border: none;
  color: white;

  border-radius: 30px;
  padding: 15px 30px;
}

.profile-button:hover {
  background: -webkit-linear-gradient(to right, #474747, #080808);
  background: linear-gradient(to right, #474747, #474747);
  color: white;
}

.profile-button:focus {
   background: -webkit-linear-gradient(to right, #575757, #292929);
  background: linear-gradient(to right, #575757, #292929);
  box-shadow: none;
}

.profile-button:active {
   background: -webkit-linear-gradient(to right, #575757, #292929);
  background: linear-gradient(to right, #575757, #292929);
  box-shadow: none;
}

.back:hover {
  background: -webkit-linear-gradient(to right, #2b8fe0, #409ae4);
  background: linear-gradient(to right, #2b8fe0, #409ae4);
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}
</style>


<style lang="scss">
.userInfoPartOne {
  .personal-image {
    text-align: center;
  }
  .personal-image input[type="file"] {
    display: none;
  }
  .personal-figure {
    position: relative;
    width: 200px;
    height: 200px;
  }
  .personal-avatar {
    cursor: pointer;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border-radius: 100%;
    border: 2px solid transparent;
    // box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.3s;
  }
  .personal-avatar:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  }

  .emailVerifyDivVerified{

          &:hover{
                background-color: #198754;

          }
  padding: 10px 20px;
  background-color: #198754;
  border-radius: 50px;
  margin: 31px 0;
  color: white;
  font-weight: bold;
  cursor: pointer;

  }
  .emailVerifyDiv {
          &:hover{
                background-color: #fb1c49;

          }
  padding: 10px 20px;
  background-color: #f8385f;
  border-radius: 50px;
  margin: 31px 0;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
  .personal-figcaption {
    cursor: pointer;
    position: absolute;
    top: 0px;
    width: inherit;
    height: inherit;
    border-radius: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: all ease-in-out 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .personal-figcaption:hover {
    opacity: 1;
background-color: rgba(255, 255, 255, 0.37);
  }
  .personal-figcaption > img {
    width: 60px;
    height: 60px;
  }
}
</style>
