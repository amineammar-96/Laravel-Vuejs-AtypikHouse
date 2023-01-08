<template>
  <div>
    <h1 style="text-align: center">
      Gérez les disponibilités de votre logement
    </h1>

    <div class="container">
      <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-6 col-sm-offset-2 annonceCardInfo">
                      <div class="annonceCardInfoMain">
  <div class="annonceCardInfoCard">
    <img v-if="annonce.images" :src='"/storage/"+annonce.images[0].path+"/"+annonce.images[0].image'>

    <div class="annonceCardInfoCard-content">
      <div class="annonceCardInfoCard-content-row">
        <div class="annonceCardInfoCard-content-col">
          <b>#ATK000</b>{{ annonce.id }}
        </div>
        <div class="annonceCardInfoCard-content-col">
           {{ annonce.country }}
        </div>
      </div>
      <div class="annonceCardInfoCard-content-user-info">
    <img v-if="userAccount.user_avatar" :src='"/storage/"+userAccount.user_avatar.path+"/"+userAccount.user_avatar.name'>
        <div class="annonceCardInfoCard-content-user-contact">
          <h4> {{ annonce.title }}</h4>
          <p> {{ annonce.address }} <br>  {{ annonce.city }} </p>

        </div>
      </div>
    </div>
  </div>
</div>
                  </div>
        <div  style="display: flex;justify-content: center;align-items: center;" class=" formCardDispo col-sm-12 col-md-12 col-lg-6 col-sm-offset-2">
          <!-- Default form -->
          <div class="pad-bg">
            <h3 class="text-center">Ajouter une indisponibilité</h3>
            <div class="form-group">
              <label for="">Date :</label>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <Datepicker
                  range
                  :partial-range="false"
                  :enable-time-picker="false"
                  v-model="date"
                  :min-date="new Date()"
                  :format="format"
                  :disabled-dates="disabledDates"
                  light
                  :day-names="['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']"
cancel-text="Fermer"
select-text="Choisir"
locale="fr"
                ></Datepicker>
              </div>
            </div>

            <div class="form-group">
              <label for="">Motif :</label>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <input
                  style="width: 75%"
                  type="text"
                  placeholder="..."
                  v-model="user.motif"
                />
                <button
                  style="
                    height: 41px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #2490cc;
                  "
                  class="btn btn-primary btn-lg"
                  @click="addIndisponibility"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="disponibilitiesList">
      <h3>
      Votre logement sera non disponible durant ces périodes</h3>

<div class="gridTemplate">
      <div
        v-for="(indisponibility, key) in indisponibilitiesArray"
        :key="key"
        class="box box--list"
        @click="deleteIndisponibility(indisponibility.id)"
      >
        <div class="box--list__items">

          <div class="box--list__item">

            <h2 class="box--list__title">Période {{ key + 1 }}</h2>
            <p class="box--list__description">
              du {{ indisponibility.dateFrom }} jusqu'au
              {{ indisponibility.dateTo }}
            </p>

            <p class="box--list__description">
              <br />
              Motif : {{ indisponibility.motif }}
            </p>
          </div>

        </div>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import axios from "axios";
import Swal from "sweetalert2";

import { ref } from "vue";

export default {
  components: { Datepicker },

  data() {
    const format = (date) => {
      let dates = [];
      date.forEach((element) => {
        let day = element.getDate();
        let month = element.getMonth() + 1;
        const year = element.getFullYear();

        if (month < 10) {
          month = `0${month}`;
        }

        if (day < 10) {
          day = `0${day}`;
        }

        dates.push(`${day}/${month}/${year} `);
      });

      return dates;
    };

    const date = ref();
    return {
      date,
      format,
      disabledDates: [],
      user: {
        id: "",
        token: "",
        motif: "",
        annonceId: "",
      },
      loggedIn: false,
      indisponibilities: [],

      indisponibilitiesArray: [],


      annonce:{

      },

      userAccount:{}


    };
  },

  mounted() {
    if (localStorage.getItem("token") != "") {
      this.user.token = localStorage.getItem("token");
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.$router.push({ path: "/se-connecter" });
    }
    this.user.id = localStorage.getItem("userId");
    this.user.annonce_id = this.$route.query.annonce_id;

    this.getIndisponibilities();
        this.getAnnonce();
        this.getUser();

  },

  methods: {
    getDatesBetween(x, y) {

      x = new Date(x);
      y = new Date(y);


      // Strip hours minutes seconds etc.
      let currentDate = new Date(
        x.getFullYear(),
        x.getMonth(),
        x.getDate()
      );

      while (currentDate <= y) {

var currentDateAux = currentDate.getFullYear() + '/';
    if(currentDate.getMonth()+1<10){
            currentDateAux+= '0'+(currentDate.getMonth()+1)+'/'
    }else{
            currentDateAux+=currentDate.getMonth()+1+'/'

    }

     if(currentDate.getDate()<10){
            currentDateAux+= '0'+currentDate.getDate()+''
    }else{
            currentDateAux+=currentDate.getDate()+''

    }




        this.disabledDates.push(currentDateAux);

        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1 // Will increase month if over range
        );
      }

    },

    getIndisponibilities() {
        this.indisponibilitiesArray=[];
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

      let indisponibilitiesRequest = {
        annonce_id: this.user.annonce_id,
      };



      let startDate ='';
      let endDate='';

      axios
        .post(
          "/api/getIndisponibilitiesForAnnonce",
          indisponibilitiesRequest,
          config
        )
        .then((response) => {
          response.data.indisponibilities.forEach((element) => {
            this.indisponibilitiesArray.push(element);
          });

          console.log("indisponibilitiesArray : ", this.indisponibilitiesArray);

          this.indisponibilitiesArray.forEach((element) => {

       startDate ='';
       endDate='';

            for (let i = 6; i < element.dateFrom.length; i++) {
              startDate += element.dateFrom[i];
            }

            startDate += "/";

            for (let i = 3; i < 5; i++) {
              startDate += element.dateFrom[i];
            }

            startDate += "/";

            for (let i = 0; i < 2; i++) {
              startDate += element.dateFrom[i];
            }


            ////


            for (let i = 6; i < element.dateTo.length; i++) {
              endDate += element.dateTo[i];
            }

            endDate += "/";

            for (let i = 3; i < 5; i++) {
              endDate += element.dateTo[i];
            }

            endDate += "/";

            for (let i = 0; i < 2; i++) {
              endDate += element.dateTo[i];
            }



            this.getDatesBetween(startDate, endDate);


          });
        })
        .catch((err) => {});
    },

    addIndisponibility() {
      console.log("addIndisponibility daateee : ", this.format(this.date));

      this.format(this.date).forEach((element) => {
        this.indisponibilities.push(element);
      });
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

      let indisponibilitiesRequest = {
        dateFrom: new Date(this.date[0]),

        dateTo: new Date(this.date[1]),
        owner_id: this.user.id,
        annonce_id: this.user.annonce_id,
        motif: this.user.motif,
      };

      axios
        .post("/api/addIndisponibility", indisponibilitiesRequest, config)
        .then((resppnse) => {
                    this.user.motif='';
                    this.date="";

          this.getIndisponibilities();
          Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Disponibilité mis à jour',
  showConfirmButton: false,
  timer: 1500,
  footer : false,
})
        })
        .catch((err) => {});
    },

    getAnnonce(){
        let req = {
            id : this.$route.query.annonce_id,
        }
        axios
        .post("api/getAnnonceById", req)
        .then((response) => {
          this.annonce = response.data.userAnnonce[0];
           });
    },

    getUser(){

          let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

      this.userAccount= {
          id : this.user.id
      }


axios.post("/api/getUser", this.userAccount, config).then((response) => {
    console.log('response.data.users : ' , response.data.users)
    this.userAccount=response.data.users[0];
});

 console.log('thheiis ; ' , this.userAccount)



    },

    deleteIndisponibility(id){

        Swal.fire({
   text: "Voulez-vous vraiment supprimer cette indisponibility pour cette annonce",
              showDenyButton: true,
              showCancelButton: false,
              denyButtonText: `Non`,
              confirmButtonColor: "red",
              denyButtonColor: "#272a2c",
              icon: "info",

              confirmButtonText: "Oui",
              denyButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },

}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
      this.deleteIndispo(id);
    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Disponibilité mis à jour',
  showConfirmButton: false,
  timer: 1500,
  footer : false,
})
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})

    },

    deleteIndispo(id){
          let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };



      axios.delete('/api/deleteIndispo/'+id , config).then((response) => {

        this.getIndisponibilities();


      })
    }
  },
};
</script>

<style lang="scss">
@import "@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss";
.pad-bg {
  background: #f8f8f8;
  padding: 20px;
  border-radius: 5px;
  margin-top: 50px;
  margin-bottom: 50px;
  border: 1px solid #e5e5e5;
  width: 100%;
  h1 {
    padding-bottom: 20px;
    margin-top: 0;
    margin-bottom: 30px;
  }
}

.disponibilitiesList {
  $color-primary: #1a183e;
  $color-secondary: #2a46cc;
  $background-base: #f0f0f4;

  $base-font-weight-normal: 400;
  $base-font-weight-medium: 500;

  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3 {
    font-weight: $base-font-weight-medium;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &-more {
      width: 169px;
      height: 55px;
      color: #2a46cc;
      font-weight: $base-font-weight-medium;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #2a46cc;
      background-color: #fff;
      transition: background-color 250ms;

      &:hover {
        color: #fff;
        background-color: #2a46cc;
        transition: background-color 250ms;
      }
    }
  }

  .tag {
    display: inline-block;

    &-primary {
      padding: 5px 20px;
      color: #2a46cc;
      font-size: 14px;
      background-color: #f0f0f4;
      border-radius: 20px;
    }
  }

  .box--list {
    padding: 0px 60px 67px;
    width: 100%;
    margin-bottom: 60px;
    display: flex;

    @media (max-width: 870px) {
      margin-bottom: 0;
      padding-bottom: 0;
    }

    &__item {
      padding-top: 30px;
      margin-top: 30px;
      border-top: 1px solid #f0f0f4;

      &:first-child {
        border-top-width: 0;
      }
    }

    &__title {
      margin-bottom: 12px;
      font-size: 18px;
      color: #e81414;
    }

    &__description {
      font-size: 16px;
      line-height: 26px;
    }
  }

  .box {
      cursor: pointer;
    background-color: #fff;
    margin: {
      right: auto;
      left: auto;
    }

    @media (max-width: 870px) {
      border-radius: 0;
      max-width: 100%;
      box-shadow: none;
    }
  }


  .box:hover {
          background-color: rgb(251, 251, 251);

  }

  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100vw;
  background-color: rgb(240, 240, 240);
  flex-direction: column;
  h3 {
    padding: 49px 0;
  }
}


.disponibilitiesList{
    .gridTemplate{
        display: grid;
        grid-template-columns: 50% 50%;
        width:60%;
        @media (max-width: 570px) {
      display: flex;
      flex-direction: column;
    }
    }
}




.annonceCardInfo{
    .annonceCardInfoMain{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.annonceCardInfoCard{
  width: 400px;
  margin: 0 auto;
  position: relative;
  box-shadow:0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.caannonceCardInfoCard img{
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.annonceCardInfoCard-content{
  width: 100%;
  background: #fff;
  padding-top: 10px;
    padding-bottom: 40px;

  border-radius: 0 0 10px 10px;
}
.annonceCardInfoCard-content-row{
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #e2e8f0;
}
.annonceCardInfoCard-content-col{
  width: 50%;
  padding: 20px;
  font-family: 'Source Sans Pro', sans-serif;
}
.annonceCardInfoCard-content-col .fa{
  font-size: 25px;
  vertical-align: middle;
  margin-right: 10px;
  color: #718096;
}
.annonceCardInfoCard-content-user-info{
  width: 100%;
  padding: 10px;
  display: flex;
  background: #f7fafc;
  border-radius: 0 0 10px 10px;
}
.annonceCardInfoCard-content-user-info img{
  width: 60px;
  height: 60px;
  margin: 10px;
  border-radius: 50%;
  vertical-align: middle;
}
.annonceCardInfoCard-content-user-info h4{
  font-family: 'Roboto', sans-serif;
    word-break: break-all;

}
.annonceCardInfoCard-content-user-info p{
  font-family: 'Roboto', sans-serif;
}
.annonceCardInfoCard-content-user-info .annonceCardInfoCard-content-user-contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
}
}

.formCardDispo{
    width: 50%;
      @media (max-width: 990px) {
          width: 100%;

    }
}


.dp__theme_light {
   --dp-background-color: #ffffff;
   --dp-text-color: #212121;
   --dp-hover-color: #f3f3f3;
   --dp-hover-text-color: #212121;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #1976d2;
   --dp-primary-text-color: #f8f5f5;
   --dp-secondary-color: #ccc0c0;
   --dp-border-color: #ddd;
   --dp-menu-border-color: #ddd;
   --dp-border-color-hover: #aaaeb7;
   --dp-disabled-color: #5b2ea3;
   --dp-scroll-bar-background: #f3f3f3;
   --dp-scroll-bar-color: #959595;
   --dp-success-color: rgb(36, 144, 204);
   --dp-success-color-disabled: rgb(36, 144, 204);
   --dp-icon-color: rgb(36, 144, 204);
   --dp-danger-color: #ff6f60;
   --dp-highlight-color: rgba(25, 118, 210, 0.1);
}
</style>
