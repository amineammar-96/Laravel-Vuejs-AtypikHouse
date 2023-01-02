<template>
  <div>
       <div v-if="loading" class="loaderDivPage">
      <div class="loaderDiv" v-if="loading">
        <loadingPage />
      </div>
    </div>

    <div class="loaderDiv" v-if="!loading">

    <div class="parent clearfix">
      <div class="login">
        <div class="container">
          <h1 class="text-center">
            Connectez-vous pour accéder à votre compte
          </h1>

          <div class="login-form">
            <form @submit.prevent="login()">
                <label style="display:none;" for="email">Email</label>

              <input
                type="email"
                v-model="user.email"
                placeholder="E-mail"
                :class="hasError('email') ? 'is-invalid' : ''"
                required
                id="email"
              />

                              <label style="display:none;" for="mdp">mdp</label>


              <input
                :class="hasError('password') ? 'is-invalid' : ''"
                type="password"
                placeholder="Mot de passe"
                v-model="user.password"
                required
                id="mdp"
              />

              <div class="text-center">
                <button type="submit">Se connecter</button>
              </div>

              <div
                v-show="errors.email != ''"
                class="justify-content-left text-danger my-2"
              >
                {{ errors.email }}
              </div>

              <div
                v-show="errors.password != ''"
                class="justify-content-left text-danger my-2"
              >
                {{ errors.password }}
              </div>

              <div
                v-show="errors.login != ''"
                class="justify-content-left text-danger my-2"
              >
                {{ errors.login }}
              </div>

              <div class="forget-pass">
                <router-link
                    style="text-decoration: none"
                    to="/forgetPassword"
                    class="text-dark"
                    ><a>Mot de passe oublié ?</a></router-link>
              </div>
              <div class="noAccount">
                <a
                  ><router-link
                    style="text-decoration: none"
                    to="/inscription"
                    class="text-dark"
                    >Pas encore de compte chez AtypikHouse ?</router-link
                  ></a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import loadingPage from "../../loadingPage/loadingPage.vue";

export default {
    components: {
    loadingPage,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        token: "",
        id : "",
      },

      errors: {
        password: "",
        email: "",
        login: "",
      },

      profileInfoUpdatedAlready : false,
      loading: false,

    };
  },

  mounted() {
    if (localStorage.getItem("loggedIn") == "loggedIn") {
      this.$router.push({ path: "/" });
    }

  },

  methods: {

      getUserInfo(){
           let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };
      axios
        .post("/api/getUserInfo", this.user, config)
        .then((response) => {
          console.log("leeeength : ", response.data.userInfo.length);
          if (response.data.userInfo.length > 0) {
            this.profileInfoUpdatedAlready = true;
                      localStorage.setItem('profileInfoUpdatedAlready' , this.profileInfoUpdatedAlready);

                      localStorage.setItem('firstLogin' , false);

          }else{
            this.profileInfoUpdatedAlready = false;
                      localStorage.setItem('firstLogin' , true);

          }


        })
        .catch((err) => {
          console.log("err : ", err);
        });
      },
    login() {
      //   console.log(this.user);

      axios
        .post("/api/login", this.user)
        .then((result) => {
          this.errors.password = "";
          this.errors.email = "";
          console.log(result.data.status);

          if (result.data.status == "success") {
              this.loading=true;

            localStorage.setItem("token", result.data.token);
            localStorage.setItem("useremail", result.data.user[0].email);
            localStorage.setItem("userId", result.data.user[0].id);
            localStorage.setItem("userRole", result.data.user[0].role);

            localStorage.setItem("firstname", result.data.user[0].firstname);
            localStorage.setItem("lastname", result.data.user[0].lastname);

            localStorage.setItem("loggedIn", "loggedIn");


           this.user.id = result.data.user[0].id;

            this.getUserInfo();

                setTimeout(() => {
                    this.loading=false;
                    this.$router.push({ path: "/" });
                }, 1500);




          } else {


              this.loading=true;

                 setTimeout(() => {
                    this.loading=false;
                    this.errors.login =
              "Veuillez vérifier votre adresse email ou le mot de passe";

                }, 500);

             }
        })
        .catch((err) => {
          // console.log(err.response.data.errors.email[0] );
          if (err.response) {
            if ((err.response.data.status = "invalid")) {
              if (err.response.data.errors) {
                  this.errors.login =
              "Vérifier vos informations";



                // if (err.response.data.errors.email) {
                //   if (err.response.data.errors.email[0] != "") {
                //     this.errors.email = err.response.data.errors.email[0];
                //   }
                // } else {
                //   this.errors.email = "";
                // }
                // if (err.response.data.errors.password) {
                //   if (err.response.data.errors.password[0] != "") {
                //     this.errors.password = err.response.data.errors.password[0];
                //   }
                // } else {
                //   this.errors.password = "";
                // }
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


<style lang="scss">


.parent{



article,
aside,
details,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  text-decoration: none;
}

img {
  border: none;
}

*:focus {
  outline: none;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.login {
  max-height: 100vh;
  overflow-y: auto;
  float: left;
  margin: 0 auto;
  width: calc(100% - 1194px);
}
.login .container {
  width: 505px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
}
.login .container h1 {
  margin-top: 100px;
  font-size: 35px;
  font-weight: bolder;
}
.login .container .login-form {
  margin-top: 50px;
}
.login .container .login-form form {
  display: -ms-grid;
  display: grid;
}
.login .container .login-form form input {
  font-size: 16px;
  font-weight: normal;
  background: rgba(57, 57, 57, 0.07);
  margin: 12.5px 0;
  height: 68px;
  border: none;
  padding: 0 30px;
  border-radius: 10px;
}
.login .container .login-form form button[type="submit"] {
  background: -webkit-linear-gradient(110deg, #228de5 0%, #3e99e4 100%);
  background: -o-linear-gradient(110deg, #228de5 0%, #3e99e4 100%);
  background: linear-gradient(-20deg, #228de5 0%, #3e99e4 100%);
  border: none;
  margin-top: 54px;
  margin-bottom: 20px;
  width: 241px;
  height: 58px;
  text-transform: uppercase;
  color: white;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  font-weight: bold;
  font-size: 17px;
}
.login .container .login-form form button[type="submit"]:hover::after {
  opacity: 1;
}
.login .container .login-form form button[type="submit"]::after {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 10px;
  opacity: 0;
  top: 0;
  left: 0;
  -webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  right: 0;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#09203f),
    to(#537895)
  );
  background: -webkit-linear-gradient(bottom, #74acda 0%, #59b4ff 100%);
  background: -o-linear-gradient(bottom, #74acda 0%, #59b4ff 100%);
  background: linear-gradient(to top, #74acda 0%, #59b4ff 100%);
}
.login .container .remember-form {
  position: relative;
  margin-top: -30px;
}
.login .container .remember-form input[type="checkbox"] {
  margin-top: 9px;
}
.login .container .remember-form span {
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  top: 32px;
  color: #3b3b3b;
  margin-left: 15px;
}
.login .container .forget-pass {
  position: absolute;
  right: 0;
  margin-top: 189px;
}
.login .container .forget-pass a {
  font-size: 16px;
  position: relative;
  font-weight: normal;
  color: #1d1c1c;
  cursor: pointer;
}
.login .container .forget-pass a::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  border-radius: 100px;
  background: -webkit-linear-gradient(110deg, #228de5 0%, #6abcff 100%);
  background: -o-linear-gradient(110deg, #228de5 0%, #6abcff 100%);
  background: linear-gradient(-20deg, #228de5 0%, #6abcff 100%);
  bottom: -4px;
  left: 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  opacity: 0;
  right: 0;
}
.login .container .forget-pass a:hover::after {
  opacity: 1;
}

@media only screen and (min-width: 1024px) and (max-width: 1680px) {
  .login {
    width: 100%;
  }
}
/* Display 12", iPad PRO Portrait, iPad landscape */
@media only screen and (max-width: 1024px) {
  body {
    overflow-x: hidden;
  }

  @-webkit-keyframes slideIn {
    from {
      left: -100%;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      left: -100%;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }

  .login {
    float: none;
    margin: 0 auto;
    width: 100%;
  }
  .login .container {
    -webkit-animation: slideIn 0.8s ease-in-out forwards;
    animation: slideIn 0.8s ease-in-out forwards;
    width: 85%;
    float: none;
  }
  .login .container h1 {
    font-size: 25px;
    margin-top: 40px;
  }
  .login .container .login-form {
    margin-top: 30px;
  }
  .login .container .login-form form input {
    height: 45px;
  }
  .login .container .login-form form button[type="submit"] {
    height: 45px;
    margin-top: 40px;
  }
  .login .container .login-form .remember-form {
    position: relative;
    margin-top: -14px;
  }
  .login .container .login-form .remember-form span {
    font-size: 16px;
    margin-top: 22px;
    top: inherit;
  }

  .forget-pass {
    cursor: pointer;
  }
  .forget-pass a {
    font-size: 16px;
    position: relative;
    font-weight: normal;
    color: #918f8f;
    cursor: pointer;
  }
  .forget-pass a::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    border-radius: 100px;
    background: -webkit-linear-gradient(110deg, #f794a4 0%, #fdd6bd 100%);
    background: -o-linear-gradient(110deg, #f794a4 0%, #fdd6bd 100%);
    background: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);
    bottom: -4px;
    left: 0;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    opacity: 0;
    right: 0;
  }
  .forget-pass a:hover::after {
    opacity: 1;
  }
}
}
</style>
