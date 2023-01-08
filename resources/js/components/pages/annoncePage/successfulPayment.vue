<template>
  <div>
    <div class="successfulPaymentPageContainer">
      <div class="payment-success">
        <div class="header">
          <i class="ion-close-round close"></i>
        </div>
        <div class="body">
            <div class="logoTitlePaypal">


          <h2 class="title">Le paiement effectué avec succès</h2>
          <img
            class="main-img"
            src="https://res.cloudinary.com/dw1zug8d6/image/upload/v1542777688/group-3_3x.png"
            alt=""
          />
           </div>

           <div class="headerButtons">

          <button class="btn btn-primary">
            Consulter l'historique des réservations
          </button>
          <button class="btn btn-dark">
            Consulter l'historique des paiements
          </button>
        </div>
     </div>
      </div>

      <div v-if="reservationInfo" class="invoice">
    <table class="wrapper all-font-sans" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td align="center" style="padding: 24px;" width="100%">
<table class="sm-w-full" width="80%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td colspan="2" class="sm-inline-block" style="display: none;">
<img :src="'/storage/'+reservationInfo.images[0].path+'/'+reservationInfo.images[0].image"  style="border: 0; line-height: 100%; vertical-align: middle; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);">
</td>
</tr>
<tr>
<td class="sm-hidden" style="padding-top: 40px; padding-bottom: 40px;" width="190">
<img  :src="'/storage/'+reservationInfo.images[0].path+'/'+reservationInfo.images[0].image"  style=" height: 450px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px; border: 0; line-height: 100%; vertical-align: middle; border-top-left-radius: 4px; border-bottom-left-radius: 4px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);" width="190">
</td>
<td align="left" class="sm-p-20 sm-dui17-b-t" style="border-radius: 2px; padding: 40px; position: relative; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05); vertical-align: top; z-index: 50;" bgcolor="#ffffff" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td width="80%">
<h1 class="sm-text-lg all-font-roboto" style="font-weight: 700; line-height: 100%; margin: 0; margin-bottom: 4px; font-size: 24px; padding:30px;">Réservation</h1>
<p class="sm-text-xs" style="margin: 0; color: #a0aec0; font-size: 14px;">Votre réservation est mainetenant confirmée</p>
</td>
<td class="logoInvoiceImg" style="text-align: right;" width="20%" align="right">
<img class="logoInvoiceImg" src="../../../../../public/images/AtypikHouseLogo.png" >

</td>
</tr>
</table>
<div style="line-height: 32px;">&zwnj;</div>
<table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td class="sm-inline-block" style="color: #718096;" width="50%">{{ reservationInfo.user.lastname }} {{ reservationInfo.user.firstname }}</td>
<td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">{{ reservationInfo.annonce.title }}</td>
</tr>
<tr>
<td class="sm-inline-block" style="color: #718096;" width="50%"></td>
<td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">{{ reservationInfo.annonce.address }}</td>
</tr>
<tr>
<td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%"></td>
<td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">{{ reservationInfo.annonce.city }} , {{ reservationInfo.annonce.postalCode }} {{ reservationInfo.annonce.country }}</td>
</tr>
</table>
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td style="padding-top: 24px; padding-bottom: 24px;">
<div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
</td>
</tr>
</table>
<table style="font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td class="sm-w-full sm-inline-block sm-text-center" width="40%">
<p class="all-font-roboto" style="font-weight: 600; margin: 0; color: #000000;">Du {{ dateFormat(reservationInfo.checkIn) }}</p>
</td>
<td class="sm-w-full sm-inline-block sm-py-12" style="font-family: Menlo, Consolas, monospace; font-weight: 600; text-align: center; color: #cbd5e0; font-size: 18px; letter-spacing: -1px;" width="20%" align="center">

<i style="
    color: black;
    font-size: 35px;
" class="fas fa-arrow-circle-right  desktopArrawIcon"></i>

<i style="
    color: black;
    font-size: 35px;" class="fas fa-arrow-circle-down mobileArrawIcon"></i>

</td>
<td class="sm-w-full sm-inline-block sm-text-center" style="text-align: right;" width="40%" align="right">
<p class="all-font-roboto" style="font-weight: 600; margin: 0; color: #000000;">Jusqu'au {{ dateFormat(reservationInfo.checkOut) }}</p>
</td>
</tr>
</table>
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td style="padding-top: 24px; padding-bottom: 24px;">
<div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
</td>
</tr>
</table>
<table style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td style="color: #718096;" width="50%">TVA 20%</td>
<td style="font-weight: 600; text-align: right;" width="50%" align="right">€{{  (Number(reservationInfo.amount)*0.2).toFixed(2) }}</td>
</tr>
<tr>
<td style="color: #718096;" width="50%">Hors TVA</td>
<td style="font-weight: 600; text-align: right;" width="50%" align="right">€{{  (Number(reservationInfo.amount)*0.8).toFixed(2) }}</td>
</tr>

<tr>
<td style="font-weight: 600; padding-top: 32px; color: #000000; font-size: 20px;" width="50%">Total</td>
<td style="font-weight: 600; padding-top: 32px; text-align: right; color: #0e87c9; font-size: 20px;" width="50%" align="right">€ {{ Number(reservationInfo.amount).toFixed(2) }} </td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>


      </div>
    </div>
  </div>
</template>


<script type="application/javascript">
import axios from "axios";
import moment from "moment";
import 'moment/locale/fr'  // without this line it didn't work


export default {
  data() {
    return {
      user: {
        email: "",
        id: "",
        token: "",
      },

      reservationIdToShow:1,

      config: {},
      loggedIn: "",


      reservationInfo:null




    };
  },

  mounted() {
      window.scrollTo(0, 0);

    this.user.token = localStorage.getItem("token");
    this.user.email = localStorage.getItem("useremail");
    this.reservationIdToShow=localStorage.getItem('reservationIdToShow')


    if (localStorage.getItem("token") != "") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.$router.push({ path: "/" });
    }

     this.config={
            headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
          };

    this.getReservationById();
  },
  methods: {

      dateFormat(value){
          moment.locale('fr')
      return moment(String(value)).format("DD-MM-YYYY");
      },
      getReservationById(){

          let req={
              id : this.reservationIdToShow
          }

          axios.post('/api/getReservationById' , req , this.config).then((response) => {
              console.log(response.data);
              this.reservationInfo=response.data.reservation[0];

              console.log('treterzt : ' , this.reservationInfo);
          }).catch((err) => {

          });

      },
  },
};
</script>


<style lang="scss">
.successfulPaymentPageContainer {
  $primBlue: #0073ff;
  $white: #fff;
  $blueGray: #607d8b;
  $slate: #54617a;

  @import url(https://fonts.googleapis.com/css?family=Roboto);
  @font-face {
    font-family: "bariolregular";
    src: url("https://res.cloudinary.com/dw1zug8d6/raw/upload/v1541747126/fonts/bariol/bariol_regular-webfont.eot"),
      url("https://res.cloudinary.com/dw1zug8d6/raw/upload/v1541747224/fonts/bariol/bariol_regular-webfont.woff2")
        format("woff2"),
      url("https://res.cloudinary.com/dw1zug8d6/raw/upload/v1541747128/fonts/bariol/bariol_regular-webfont.woff")
        format("woff"),
      url("https://res.cloudinary.com/dw1zug8d6/raw/upload/v1541747127/fonts/bariol/bariol_regular-webfont.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  $bariol: "bariolregular";
  $roboto: "Roboto", sans-serif;


.headerButtons{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
}

  .payment-success {
    width: 100%;
    box-shadow: 0 13px 45px 0 rgb(51 59 69 / 10%);
    margin: auto;
    border-radius: 10px;
    text-align: center;
    position: relative;
    display: flex;
    font-family: "Roboto", sans-serif;
    justify-content: center;
        background-color: #cfebff;


    .header {
      position: relative;
      height: 7px;
    }
    .body {
     padding: 0 50px;
    width: 100%;
    padding-bottom: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
     @media screen and (max-width:850px) {
                padding: 0;
    flex-direction: column;

      }

    }

    .close {
      position: absolute;
      color: $primBlue;
      font-size: 20px;
      right: 15px;
      top: 11px;
      cursor: pointer;
    }
    .title {
      font-family: $bariol;
      font-size: 32px;
      color: $slate;
      font-weight: normal;
      margin-bottom: 10px;
      @media screen and (max-width:850px) {
                font-size: 30px;

      }
    }
    .main-img {
      width: 33%;
       @media screen and (max-width:850px) {
      width: 50%;

      }
    }
    p {
      font-size: 13px;
      color: $blueGray;
    }
    .btn {
      border: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
      outline: none;
      cursor: pointer;
      position: relative;
       &.btn-dark {
                     border-radius: 0;

           width: 80%;
                     font-size: 14px;

 @media screen and (max-width:1210px) {
        width: 50%;
        font-size: 12px;
              border-radius:0px;
              padding: 10px 25px;
                  height: 60px;



      }
       }
      &.btn-primary {
          border-radius: 0;
          font-size: 14px;
        background: #1c8bc8;
        color: #fff;
           width: 80%;
          @media screen and (max-width:1210px) {
        width: 50%;
         border-radius:0px;
              padding: 10px 25px;
                  height: 60px;
        font-size: 12px;


      }
      }
    }
    .cancel {
      text-decoration: none;
      font-size: 14px;
      color: $blueGray;
    }
  }

  .invoice {
      @media screen {
img {
max-width: 100%;
}
td,
th {
box-sizing: border-box;
}
u~div .wrapper {
min-width: 100vw;
}
a[x-apple-data-detectors] {
color: inherit;
text-decoration: none;
}
.all-font-roboto {
font-family: Roboto, -apple-system, "Segoe UI", sans-serif !important;
}
.all-font-sans {
font-family: -apple-system, "Segoe UI", sans-serif !important;
}
}
@media (max-width: 740px) {
.sm-inline-block {
display: inline-block !important;
}
.sm-hidden {
display: none !important;
}
.sm-leading-32 {
line-height: 32px !important;
}
.sm-p-20 {
padding: 20px !important;
}
.sm-py-12 {
padding-top: 12px !important;
padding-bottom: 12px !important;
}
.sm-text-center {
text-align: center !important;
}
.sm-text-xs {
font-size: 12px !important;
}
.sm-text-lg {
font-size: 18px !important;
}
.sm-w-1-4 {
width: 25% !important;
}
.sm-w-3-4 {
width: 75% !important;
}
.sm-w-full {
width: 100% !important;
}
}

.mobileArrawIcon{
    display: none;
}

.logoInvoiceImg{
border: 0; line-height: 100%;     width: 100%; vertical-align: middle; font-size: 12px;
display: block;
}

@media (max-width: 740px) {

.logoInvoiceImg{
display: none;
}
.sm-dui17-b-t {
border: solid #4299e1;
border-width: 4px 0 0;
}

.desktopArrawIcon{
    display: none;
}
.mobileArrawIcon{
    display: block;
}
}
  }


  .logoTitlePaypal{
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width:850px) {
                padding: 0;
    flex-direction: column;

      }
  }
}
</style>
