<template>
  <div>
    <section class="contact_us">
      <div class="container p-0 containerDivContact">
        <div
          class="row rowDivContact"
          style="display: flex; justify-content: center"
        >
          <div class="contactCardDiv">
            <div class="contact_inner">
              <div class="row">
                <div class="col-md-10">
                  <div class="contact_form_inner">
                    <div class="contact_field">
                      <h1>Nous contacter</h1>
                      <p>
                        Utilisez notre formulaire de contact pour toute demande
                        d'information ou contactez-nous directement en utilisant
                        nos coordonnées.
                      </p>
                      <form action="">
                          <label for="nomComplet" style="display:none">xxxx</label>
                        <input
                          required
                          type="text"
                          class="form-control form-group"
                          placeholder="Nom complet"
                          v-model="message.nomComplet"
                          id="nomComplet"
                        />
                                                  <label for="email" style="display:none">xxxx</label>
                        <input
                          required
                          type="email"
                          class="form-control form-group"
                          placeholder="Email"
                          v-model="message.email"
                                                    id="email"

                        />
                                                  <label for="subject" style="display:none">xxxx</label>

                        <input
                          required
                          type="text"
                          class="form-control form-group"
                          placeholder="Objet"
                          v-model="message.subject"
                                                    id="subject"

                        />
                                                  <label for="textMessage" style="display:none">xxxx</label>

                        <textarea
                          required
                          class="form-control form-group"
                          placeholder="Message"
                          v-model="message.textMessage"
                                                    id="textMessage"

                        ></textarea>
                        <button @click="contactFormSend" type="botton" class="contact_form_submit">
                          Envoyer
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="right_conatct_social_icon d-flex align-items-end">
                    <div class="socil_item_inner d-flex">
                      <li>
                        <a  aria-label="first link" href="www.facebook.com"><i class="fab fa-facebook-square"></i></a>
                      </li>
                      <li>
                        <a  aria-label="second link" href="www.instagram.com"><i class="fab fa-instagram"></i></a>
                      </li>
                      <li>
                        <a  aria-label="third link" href="www.twitter.com"><i class="fab fa-twitter"></i></a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contact_info_sec">
                <span style="color:white;">Nos coordonnées</span>
                <div class="d-flex info_single align-items-center">
                  <i class="fas fa-headset"></i>
                  <span>+33 01 56 34 67 87</span>
                </div>
                <div class="d-flex info_single align-items-center">
                  <i class="fas fa-envelope-open-text"></i>
                  <span>atypikhouse-agence@gmail.com</span>
                </div>
                <div class="d-flex info_single align-items-center">
                  <i class="fas fa-map-marked-alt"></i>
                  <span>8-9 Quai du Châtelier, 93450 Saint-Ouen, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="map_sec">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="map_inner">
              <h4>Trouvez-nous sur Google Maps</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quo beatae quasi assumenda, expedita aliquam minima
                tenetur maiores neque incidunt repellat aut voluptas hic dolorem
                sequi ab porro, quia error.
              </p>
              <div class="map_bind">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5770622945297!2d2.3291480156293907!3d48.92344970407776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ed9169b9a2d%3A0xbe32deae0c0ecd1b!2s8%2F9%20Quai%20du%20Ch%C3%A2telier%2C%2093450%20L&#39;%C3%8Ele-Saint-Denis%2C%20France!5e0!3m2!1sfr!2stn!4v1660652060103!5m2!1sfr!2stn"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: {
        nomComplet: "",
        email: "",
        subject: "",
        textMessage: "",
      },
    };
  },
  mounted() {

    //   if(localStorage.getItem("loggedIn") == "loggedIn"){
    //        this.message.email=localStorage.getItem('useremail')
    //   this.message.nomComplet =  localStorage.getItem("lastname") +' '+ localStorage.getItem('first').getItem

    //   }



  },
  methods: {

      contactFormSend(){
            axios.post('api/contactFormMailTo' , this.message).then((result) => {

                this.$router.push({ name: 'contactFormMailSentName' });
                // this.$router.push('/contactFormMailSent/');
                //             this.$router.push({ path: "/contactFormMailSent/" });

    }).catch((err) => {

                    console.log(err);
            });
      }
  },
};
</script>


<style lang="css">
.right_conatct_social_icon {
  /* background: linear-gradient(to top right, #1325e8 -5%, #8f10b7 100%); */
  background: #e0eafc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f89ca, #2592cc);


background: linear-gradient(to right, #0f89ca, #2592cc);

  }
.contact_us {
  background-color: #f1f1f1;
  padding: 120px 0px;
}

.contact_inner {
  background-color: #fff;
  position: relative;
  box-shadow: 20px 22px 44px #cccc;
  border-radius: 25px;
}
.contact_field {
  padding: 60px 340px 90px 100px;
}
.right_conatct_social_icon {
  height: 100%;
}

.contact_field h3 {
  color: #000;
  font-size: 40px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
}
.contact_field p {
  color: #000;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 35px;
}
.contact_field .form-control {
  border-radius: 0px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 50px 0;
}
.contact_field .form-control:focus {
  box-shadow: none;
  outline: none;
  border-bottom: 2px solid #acc8f0;
}
.contact_field .form-control::placeholder {
  font-size: 13px;
  letter-spacing: 1px;
}

.contact_info_sec {
  position: absolute;
  background-color: #2d2d2d;
  right: 1px;
  top: 18%;
  height: 340px;
  width: 370px;
  padding: 40px;
  border-radius: 25px 0 0 25px;
}
.contact_info_sec h4 {
  letter-spacing: 1px;
  padding-bottom: 15px;
  color: white;
}

.info_single {
  margin: 30px 0px;
}
.info_single i {
  margin-right: 15px;
  color: white;
}
.info_single span {
  font-size: 14px;
  letter-spacing: 1px;
  color: white;
}

button.contact_form_submit {

 background: -webkit-linear-gradient(to right, #0f89ca, #2592cc);

 background: linear-gradient(to right, #0f89ca, #2592cc);

  border: none;
  color: #fff;
  padding: 10px 15px;
  width: 100%;
  margin-top: 25px;
  border-radius: 35px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
}

button.contact_form_submit:hover {
  background: -webkit-linear-gradient(

    to right, #007de4, #1185e4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(

    to right, #007de4, #1185e4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.socil_item_inner li {
  list-style: none;
}
.socil_item_inner li a {
  color: #2d2d2d;
  margin: 0px 15px;
  font-size: 14px;
}
.socil_item_inner {
  padding-bottom: 10px;
}

.map_sec {
  padding: 50px 0px;
}
.map_inner h4,
.map_inner p {
  color: #000;
  text-align: center;
}
.map_inner p {
  font-size: 13px;
}
.map_bind {
  margin-top: 50px;
  border-radius: 30px;
  overflow: hidden;
}

@media (max-width: 991px) {
  .containerDivContact {
    margin: 0;
  }
  .contact_us {
    padding: 50px 0px;
  }

  .rowDivContact {
    width: 98vw;
    margin: 0 1vw;
  }
}

@media (max-width: 920px) {
  .contact_info_sec {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 3px;
    height: 100%;
  }
  .contact_field {
    padding: 50px;
  }
}
</style>
