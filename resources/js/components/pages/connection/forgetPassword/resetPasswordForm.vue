<template>

<div class="mainDiv">
  <div class="cardStyle">

      <img src="" id="signupLogo"/>

      <div class="titleCardForm">
      <h2 class="formTitle">
        Réinitialiser votre mot de passe
      </h2>
</div>
    <div class="inputDiv">
      <label class="inputLabel" for="password">Mot de passe</label>
      <input v-if="!showPassword" v-model="user.password"  type="password"  class="form-control mt-2 input" :class="hasError('password') ? 'is-invalid' : ''"  />
        <input v-else v-model="user.password" type="text"   class="form-control mt-2 input" :class="hasError('password') ? 'is-invalid' : ''"  />

 <button style="display: flex; justify-content: end;margin-top: 8px;" class="button" @click="toggleShow"><span class="icon is-small is-right">
            <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
          </span>
  </button>
    </div>

    <div class="inputDiv">
      <label class="inputLabel" for="confirmPassword">Confirmer mot de passe</label>
 <input v-if="!showPassword" v-model="user.password_confirmation"  type="password"  class="form-control mt-2 input" :class="hasError('password') ? 'is-invalid' : ''"  />
        <input v-else v-model="user.password_confirmation" type="text"   class="form-control mt-2 input" :class="hasError('password') ? 'is-invalid' : ''"  />
    </div>

    <div v-show="errors.password" :class="errors.password ? '' : 'mt-3'" class="inputDiv col-12">
              <div class="alert text-danger p-0 my-1 alert-transparent">
               <span v-if="errors.password!='' ">*</span> Veuillez vérifier le mot de passe.


              </div>
            </div>

    <div class="buttonWrapper">
      <button type="botton" id="submitButton" @click="UpdatePassword()" class="submitButtonAux pure-button pure-button-primary">
        <span>Continuer</span>
      </button>
    </div>

  </div>
</div>



</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
              showPassword: false,

      user: {
        email: "",
        password: "",
        token : 'xx'
      },
      errors: {
        password: "",
      },
    };
  },
  mounted() {
      this.user.email=this.$route.query.email;
      this.user.token=this.$route.query.token;

      axios.post('api/verifyResetToken' , this.user).then((response) => {
          if(response.data.status=='not found'){
              this.$router.push('/');
          }else if (response.data.status== 'found'){

          }
      });

      if(localStorage.getItem('token').length > 0){
        this.$router.push("/")
        }

    this.user.email=localStorage.getItem('resetPasswordEmail');
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods: {


    UpdatePassword(){
        axios.post('api/resetPassword' , this.user ).then((response) => {
            console.log(response);
            if(response.data.message =='invalid'){
                this.errors.password = response.data.error.password[0];
                console.log('this : ' , response.data.error.password)
            }else {
            this.errors.password = "";
            localStorage.setItem('passwordChangedSuccessMessage' , false)
            this.$router.push('/resetEmailSended');

            }
        }).catch((err) => {

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


     toggleShow() {
      this.showPassword = !this.showPassword;
    }


  },
};
</script>

<style lang="css">

.titleCardForm{
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .mainDiv {
    display: flex;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    font-family: 'Open Sans', sans-serif;
  }
 .cardStyle {
    width: 500px;
    border-color: white;
    background: #fff;
    padding: 36px 0;
    border-radius: 4px;
    margin: 30px 0;
    box-shadow: 0px 0 2px 0 rgba(0,0,0,0.25);
  }
#signupLogo {
  max-height: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.formTitle{
  font-weight: 600;
  margin-top: 20px;
  color: #2F2D3B;
  text-align: center;
}
.inputLabel {
  font-size: 15px;
color: #555;
margin-bottom: 6px;
margin-top: 24px;
font-weight: bold;
}
  .inputDiv {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
input {
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  border: solid 1px #ccc;
  padding: 0 11px;
}
input:disabled {
  cursor: not-allowed;
  border: solid 1px #eee;
}
.buttonWrapper {
  margin-top: 40px;
}
  .submitButtonAux {
width: 50%;
    height: 100%;
    margin: auto;
    display: block;
    color: #fff;
    border-color: #1f2022;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.035);
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
        background-color: #1f2022;
        padding: 20px 10px;

  }
.submitButton:disabled,
button[disabled] {
  border: 1px solid #cccccc;
  background-color: #cccccc;
  color: #666666;
}



</style>
