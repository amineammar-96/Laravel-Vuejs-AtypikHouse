<template>
    <div>
        <div v-if="!hideFooter" class="footerFooterCompoent">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="single_footer">
                            <span>Services</span>
                            <ul>
                                <li><a ><router-link @click="scrollToTop" style="text-decoration:none;" to="/" > Accueil </router-link></a></li>
                                <li><a ><router-link  @click="scrollToTop" style="text-decoration:none;" to="/annoncesListPage">Nos hébergements</router-link></a></li>
                                <li><a ><router-link  @click="scrollToTop" style="text-decoration:none;" to="/qui-sommes-nous" >Qui sommes-nous ? </router-link></a></li>
                                <li><a ><router-link  @click="scrollToTop" style="text-decoration:none;" to="/contact">Contact</router-link></a></li>
                            </ul>
                        </div>
                    </div><!--- END COL -->
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <span>NOS ENGAGEMENTS</span>
                            <ul>
                                <li><i class="fas fa-credit-card" style="font-size:20px;color:#white ;padding:10px" ></i> Paiement sécurisé</li>
                                <li><i class="fas fa-mouse" style="font-size:20px;color:#white ;padding:10px"></i>Facilité de réservation</li>
                                <li><i class="far fa-comment-dots" style="font-size:20px;color:#white ;padding:10px"></i>Contact 7j/7</li>
                                <li><i class="far fa-handshake" style="font-size:20px;color:#white ;padding:10px"></i>Assurance vol et casse</li>
                            </ul>
                        </div>
                    </div><!--- END COL -->
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <span>Abonnez-vous à notre newsletter</span>
                            <div class="signup_form">
                                <form class="subscribe">
                                    <label for="newsletter" style="display:none">xxx</label>
                                    <input id="newsletter" type="text" class="subscribe__input" placeholder="Adresse email">
                                    <button           aria-label="newsletter" type="button" class="subscribe__btn"><i aria-hidden="true" class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="social_profile">
                            <ul>
                                <li><a href="www.facebook.com" aria-label="first link"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="www.tiwtter.com" aria-label="second link"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="www.instagram.com" aria-label="third link"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div><!--- END COL -->
                </div><!--- END ROW -->
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12" style="text-align: center;margin-top: 50px;border-top: 2px solid #2591cc;padding-top: 20px;">
                        <p class="copyright">Copyright © 2022 <a href="/">AtypikHouse</a></p>
                    </div><!--- END COL -->
                </div><!--- END ROW -->
            </div><!--- END CONTAINER -->
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            loggedIn:false,
            hideFooter:true,

    user: {
        id: "",
        token: "",
      },

        }
    },

    mounted(){

        this.getUserProfile();

        this.intervalid1 = setInterval(
      function () {
        this.user.token = localStorage.getItem("token");
        this.user.role = localStorage.getItem("userRole");

        if (localStorage.getItem("token") != "") {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }

        if(localStorage.getItem('firstLogin')=="true"){
            this.hideFooter=true
        }else{
        this.hideFooter=false
        }


      }.bind(this),
      200
    );


    },

    methods: {

getUserProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

       this.user.token = localStorage.getItem("token");
        this.user.id = localStorage.getItem("userId");

      axios
        .post("api/getUserInfo", this.user, config)
        .then((response) => {
          console.log("leeeength : ", response.data.userInfo.length);
          if (response.data.userInfo.length > 0) {
            this.hideFooter = false;
          } else {
            this.hideFooter = true;
          }
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    },

        scrollToTop() {
    window.scrollTo(0,0);
  }
    },
}
</script>
