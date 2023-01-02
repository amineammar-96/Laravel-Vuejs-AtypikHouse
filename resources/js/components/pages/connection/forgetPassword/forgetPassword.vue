<template>
  <div class="forgotpasswordDiv">
    <h1>Mot de passe oublié?</h1>

    <h2>
      Ne vous inquiétez pas <br />
      Entrez votre adresse e-mail pour réinitialiser votre mot de passe
    </h2>

    <form>
      <label for="mail"
        >Entrez simplement votre adresse e-mail ci-dessous et nous vous
        enverrons un e-mail d'instructions pour la récupération.</label
      >
      <input
        v-model="userInfo.email"
        type="email"
        id="mail"
        name="mail"
        placeholder="Email"
        required
      />

      <div class="submitButton">
        <button type="button" @click="submitForm()">Réinitialiser</button>
      </div>

    </form>
  </div>
</template>


<style lang="scss">
.forgotpasswordDiv {
  .submitButton {
    text-align: center;
  }

  span {
    color: red;
  }
  label {
    padding-top: 15px;
    font-weight: bold;
  }

  body {
    font-size: 13px;
    font-family: "Nunito", sans-serif;
    color: #384047;
  }

  form {
    font-size: 16px;
    max-width: 80vw;
    margin: 20px auto;
    padding: 10px 20px;
    background: #f4f7f8;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  }

  h1 {
    padding-top: 2em;
    font-size: 32px;
    margin: 0 0 30px 0;
    text-align: center;
  }

  h2 {
    padding-top: 1em;
    font-size: 20px;
    margin: 0 0 30px 0;
    text-align: center;
  }

  input[type="text"],
  input[type="password"],
  input[type="date"],
  input[type="datetime"],
  input[type="email"],
  input[type="number"],
  input[type="search"],
  input[type="tel"],
  input[type="time"],
  input[type="url"],
  textarea,
  select {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    background-color: #e8eeef;
    color: #8a97a0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 30px;
  }

  button {
    padding: 12px 39px 13px 39px;
    color: #fff;
    background-color: #343a40;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    border: 1px solid #343a40;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-width: 1px 1px 3px;
    margin-bottom: 10px;
    overflow: hidden;
    width: 20vw;
    border-radius: 10px;
  }
  button:hover {
    background-color: #1f2022;
    border: 1px solid #1f2022;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-width: 1px 1px 3px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }
}

@media screen and (min-width: 480px) {
  .forgotpasswordDiv {
    form {
      max-width: 80vw;
    }
  }
}
</style>


<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      userInfo: {
        email: "",
      },
    };
  },

  mounted() {},

  methods: {
    submitForm() {
      console.log("emallll :: " + this.userInfo.email);
      axios
        .post("api/forgotPasswordEmailStatus", this.userInfo)
        .then((response) => {
          if (response.data.message == "invalid") {
            if (response.data.error.email[1]) {
              console.log(response.data.error.email[1]);

              this.error = response.data.error.email[1];
              Swal.fire({
                icon: "info",
                title: "Le champ email est obligatoire.",

                timer: 5000,
                confirmButtonColor: "#228de5",
                confirmButtonColor: "#0370c8",
                confirmButtonText: "Compris",
                cancelButtonClass: " px-4 py-2 rounded-pill ",
                confirmButtonClass: " px-4 py-2 rounded-pill ",
                customClass: { popup: "swal2-border-radius" },
              });
            } else {
              this.error = response.data.error.email[0];
              console.log(response.data.error.email[0]);
              Swal.fire({
                icon: "info",
                title: "L'e-mail doit être une adresse e-mail valide.",

                timer: 5000,
                confirmButtonColor: "#228de5",
                confirmButtonText: "Compris",
                cancelButtonClass: " px-4 py-2 rounded-pill ",
                confirmButtonClass: " px-4 py-2 rounded-pill ",
                customClass: { popup: "swal2-border-radius" },
              });
            }
          } else if (response.data.message == "not founded") {
            console.log(response.data.message);
            this.error = response.data.message;

            Swal.fire({
              icon: "info",
              title: response.data.text,
              timer: 5000,
              confirmButtonColor: "#228de5",
              confirmButtonText: "Compris",
              cancelButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            });
          } else if (response.data.message == "founded") {
            console.log(response.data.message);
            this.error = response.data.message;
            let timerInterval;
            Swal.fire({
              title: "Chargement...",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft();
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {

                  console.log(response.data.message);

            localStorage.setItem("resetPasswordEmail", this.userInfo.email);
            localStorage.setItem("passwordChangedSuccessMessage", true);
            this.$router.push("/resetEmailSended");





              }
            });
          }
        });
    },
  },
};
</script>
