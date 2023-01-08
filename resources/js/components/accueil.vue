<template>
  <div>
    <div id="body">
      <!-- <div class="jumbotron jumbotron-fluid h-100">
            <img src="/images/wallpaper2.jpg" alt="Logo" class="img-fluid" id="backGroundImage" />
        </div> -->

      <main role="main" id="mainHomePage">
        <h1 class="visually-hidden">AtypikHouse</h1>
        <div class="group">
          <transition appear appear-active-class="heading-enter-active">
            <h2>
              AtypikHouse <br />
              Retrouver tous nos biens en <span>Europe</span>
            </h2>
          </transition>
        </div>

        <div></div>

        <div class="main-search-input">
          <div class="main-search-input-item">
              <label style="display:none;" for="Localisation"> xxx </label>
            <input type="text" placeholder="Localisation" id="Localisation" value="" />
          </div>
          <div class="main-search-input-item catSelect">
                            <label style="display:none;" for="catSelect"> xxx </label>

            <select data-placeholder="All Categories" class="chosen-select" id="catSelect">
              <option>Categorie</option>
              <option>Cabanes</option>
              <option>Bulles</option>
              <option>Maison hobbit</option>
              <option>Chalet</option>
              <option>Yourtes</option>
              <option>Autres</option>
            </select>
          </div>
          <div class="main-search-input-item">
              <label style="display:none;" for="checkIn"> xxx </label>
            <input
              type="text"
              placeholder="Check in"
              onfocus="(this.type='date')"
              onblur="(this.type='date')"
              id="checkIn"
            />
          </div>
          <div class="main-search-input-item location lastOfTypeDate">
                          <label style="display:none;" for="checkOut"> xxx </label>

            <input
              type="text"
              placeholder="Check out"
              onfocus="(this.type='date')"
              onblur="(this.type='date')"
              id="checkOut"
            />
          </div>

          <button class="button">Chercher</button>
        </div>
      </main>
    </div>

    <div class="headerCarousel">
      <div class="titleCarousel">
        <h1 class="BigTitleCarousel">Découvrez nos hébergements insolites</h1>
        <br>
        <p class="SmallTitleCarousel">
          AtypikHouse ne propose qu’une sélection de lieux premium testés et
          approuvés par nos soins, afin de vous éviter au maximum les mauvaises
          surprises lors de votre arrivée
        </p>
      </div>
      <div class="containerCards">
        <div v-for="(annonce, key) in annonces" :key="key" class="box">
          <router-link
            style="text-decoration: none;width: 100%;"
            :to="'/annonce/?id=' + annonce.id"
            class="text-dark"
          >
            <div class="top">
              <img
                v-if="annonce.images.length > 0"
                :src="
                  'storage/' +
                  annonce.images[0].path +
                  '/' +
                  annonce.images[0].image
                "
                :alt="annonce.id"
              />
            </div>
            <div class="bottom">
              <span class="titleCard">{{ annonce.title }}</span>
              <div>
                <div class="location">
                  <i style="margin-right: 7px" class="fas fa-map-marker-alt"></i
                  ><span> {{ annonce.city }} </span>
                </div>
              </div>
              <div class="advants">
                <div>
                  <span>Nbr de couchages </span>
                  <div>
                    <i class="fas fa-bed"></i
                    ><span> {{ annonce.numberOfBeds }} </span>
                  </div>
                </div>
                <div>
                  <span>Accueillement </span>
                  <div>
                    <i class="fas fa-users"></i
                    ><span>{{ annonce.capacity }}</span>
                  </div>
                </div>
                <div>
                  <span>Surface</span>
                  <div>
                    <i class="fas fa-vector-square"></i
                    ><span>{{ annonce.surface }}<span>Cm²</span></span>
                  </div>
                </div>
              </div>
              <div class="price">
                <span>
                  €{{ parseFloat(annonce.price).toFixed(2) }}
                  <small style="font-size: 16px">/nuit</small>
                </span>
              </div>

              <div
                style="position: absolute; top: -40px; left: 15px"
                class="price"
              >

                <star-rating
                v-if="annonce.rating>1"
                  :padding="2"
                  :animate="false"
                  :star-size="25"
                  :show-rating="false"
                  :read-only="true"
                  :rating="annonce.rating"
                ></star-rating>
              </div>

              <div class="typeLogement">
                <span> {{ annonce.typeLogement }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div>
        <section class="section-three" style="padding: 0; padding-bottom: 30px">
          <p class="BigTitleCarousel">
            Vivez l'expérience d'un séjour atypique.<br />découvrez nos
            hébergements insolites
          </p>
        </section>

        <!-- Section Four -->
        <section class="section-four">
          <div class="flex-group">
            <div>
              <img
                class="homePagePartImg"
                src="../../../public/images/cabane.webp"
                alt="image1"
              />
            </div>

            <div class="content-container">
              <div><span class="acceuilSpansTitle">Cabane</span></div>
              <p>
                La Cabane flottante vous accueille et vous offre détente et
                tranquillité au bord de l'eau. Sur pilotis, vous profiterez de
                sa terrasse et rêverez face à ce panorama unique qui dévoile la
                beauté de la nature environnante se reflétant dans les eaux
                calmes d'un étang privé. Vous emprunterez un petit pont sécurisé
                pour accéder à votre nid flottant avec mezzanine et découvrirez
                un intérieur pensé, imaginé et créé pour votre confort.
              </p>
            </div>
          </div>
        </section>

        <!-- Section Five -->
        <section class="section-five">
          <div class="flex-group section-five-flex-group">
            <div>
              <img
                class="homePagePartImg"
                src="../../../public/images/yourte.jpg"
                alt="photo2"
              />
            </div>
            <div class="content-container">
                              <div><span class="acceuilSpansTitle">Yourte</span></div>

              <p>
                La yourte - appelée Ger par les Mongols - est l'habitation
                traditionnelle des familles nomades de Mongolie. Elle est
                composée de plusieurs murs en treillage orange, tous de la même
                dimension et incurvés. Ce cercle de bois est relié aux murs par
                toute une série de lattes de bois, toujours de couleur orange,
                qui restent visible à l'intérieur de la yourte, formant le
                plafond. Cette structure de bois, formée par l'ensemble des murs
                en treillage, des poteaux centraux, du cercle et des lattes du
                plafond, est recouverte d'une couche de feutre dont l'épaisseur
                varie en fonction de la saison.
              </p>
            </div>
          </div>
        </section>

        <!-- Section six -->
        <section class="section-six">
          <div class="flex-group">
            <div>
              <img
                class="homePagePartImg"
                src="../../../public/images/bulle.jpg"
                alt="picture3"
              />
            </div>
            <div class="content-container">
                                            <div><span class="acceuilSpansTitle">Bulle</span></div>

              <p>
                La notion de bulle spéculative a souvent été observée au niveau
                du marché de titres. À première vue, l'immobilier serait un
                actif moins sensible à une telle dynamique spéculative, du fait
                de plusieurs caractéristiques intrinsèques. En effet, les coûts
                de transaction sont très importants et représentent une part
                souvent non négligeable du bien et pourrait limiter le caractère
                spéculatif. Ensuite, le marché immobilier est souvent
                caractérisé par rapport aux marchés financiers comme peu
                liquide.
              </p>
            </div>
          </div>
        </section>

        <!-- Section Seven -->
      </div>

      <div>
        <div class="testimonials">
          <div class="inner">
            <h1>Des expériences pour tous les aventuriers</h1>
            <div class="border"></div>

            <div class="row rowComments">
              <div class="col colComments">
                <div class="testimonial">
                  <img alt="x"  class="" src="../../../public/images/cabane.webp" />
                  <div class="name">Full name</div>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <div class="col colComments">
                <div class="testimonial">
                  <img alt="x"  class="" src="../../../public/images/cabane.webp" />
                  <div class="name">Full name</div>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <div class="col colComments">
                <div class="testimonial">
                  <img alt="x"  class="" src="../../../public/images/cabane.webp" />
                  <div class="name">Full name</div>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  data() {
    return {
      loggedIn: false,
      user: {
        email: "",
        lastname: "",
        firstname: "",
        token: "",
        id: "",
      },

      annonces: [],

      typesLogement: [],
    };
  },

  mounted() {
    this.getTypeLogement();
    this.getAnnonces();

    this.user.token = localStorage.getItem("token");
    this.user.role = localStorage.getItem("userRole");
    this.user.id = localStorage.getItem("userId");


    this.getUserProfile();
  },

  methods: {
    getUserProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

      this.user.id = localStorage.getItem("userId");

      axios
        .post("api/getUserInfo", this.user, config)
        .then((response) => {
          console.log(
            "ggg : ",
            response.data.userInfo.length == 0 && this.loggedIn
          );
          if (
            response.data.userInfo.length == 0 &&
            localStorage.getItem("token") != ""
          ) {
            this.$router.push({ path: "/profileAdmin" });
          }
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    },

    getTypeLogement() {
      this.typesLogement = [];
      axios
        .get("/api/getTypeLogement")
        .then((response) => {
          console.log("");
          response.data.typesLogement.forEach((element) => {
            this.typesLogement.push(element);
          });
        })
        .catch((err) => {});
    },

    getAnnonces() {
      axios
        .get("api/getAnnonces")
        .then((response) => {
          response.data.onlyThreeAnnonce.forEach((element) => {
                          let req = {
                id : element.id,
            }
            axios.post('api/getAverageRatingForCommentsByAnnonce' , req ).then((response) => {
                element.ratingAverageValue=response.data.average;
            });

            this.typesLogement.forEach((elementaux) => {
              console.log("elementaux: ", element);


              if (elementaux.id == element.type_logement_id) {
                element.typeLogement = elementaux.name;
              }
            });



console.log(' this.annonces : ' ,  this.annonces[0]);
            this.annonces.push(element);


          });
        })
        .catch((err) => {
          console.log(err);
        });


    },
  },
};
</script>


<style lang="scss">
.testimonials {
  padding: 40px 0;
  background: #f1f1f1;
  color: #434343;
  text-align: center;
}
.inner {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}

.border {
  width: 160px;
  height: 5px;
  background: #228de5;
  margin: 26px auto;
}

.rowComments {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.colComments {
  flex: 33.33%;
  max-width: 33.33%;
  box-sizing: border-box;
}
.testimonial {
  background: #fff;
  padding: 30px;
}
.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name {
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px 0;
}
.stars {
  color: #fad613;
  margin-bottom: 20px;
}
.stars i {
  padding: 2px;
}

@media screen and (max-width: 960px) {
  .colComments {
    flex: 100%;
    max-width: 100%;
    margin: 23px 0;
  }
  .rowComments {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.containerCards {
  width: 100%;
  margin: 100px auto;
  display: flex;
  justify-content: space-evenly;
  padding: 51px;
  padding-top: 0;


}

.containerCards .box {
  width: calc((100% / 3) - 20px);
  background-color: rgba(245, 245, 245, 0.829);
  position: relative;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 13px -3px #00000046;
  box-shadow: 0px 0px 13px -3px #00000046;
}

.box {
  cursor: pointer;
}

.titleCarousel {
  padding: 30px;
  padding-bottom: 0;
}

.titleCarousel,
.SmallTitleCarousel {
  padding-top: 50px;
}

.SmallTitleCarousel {
  font-weight: normal;
  font-size: 18px;

}

.BigTitleCarousel , .acceuilSpansTitle{
 font-weight: bold;
  font-size: 28px;
}

.titleCarousel h1 {
  color: #000000;
  font-size: 4vw;
}

.titleCarousel h5 {
  color: #000000;
}

.headerCarousel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.containerCards .box .top {
  position: relative;
  background-color: rgba(255, 0, 0, 0);
}

.containerCards .box .top:before {
  content: "";
  width: 100%;
  height: 102%;
  background-color: rgba(0, 0, 0, 0.829);
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
  opacity: 0;
}

.containerCards .box .top:hover:before {
  opacity: 1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.containerCards .box .top:after {
  content: "Consulter";
  color: white;
  font-size: 14px;
  padding: 10px;
  border: 1px solid white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
}

.containerCards .box .top:hover:after {
  opacity: 1;
}

.containerCards .box .top img {
  width: 100%;
  margin-bottom: -4px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  height: 20vw;
}

.containerCards .box .top span {
  position: absolute;
  right: 20px;
  bottom: 15px;
  color: white;
  font-size: 20px;
}

.containerCards .box .top span i {
  margin-left: 5px;
}

.containerCards .box .bottom {
  padding: 20px 15px;
  position: relative;
  padding-top: 70px;
  text-align: center;
  position: relative;
  display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 410px;
}

.containerCards .box .bottom h3 {
  font-size: 23px;
  color: black;
}

.containerCards .box .bottom > p {
  margin: 15px 0;
  font-size: 13px;
  line-height: 1.4;
  color: #777;
}


.containerCards .box .bottom .advants {
  display: flex;
  margin: 20px 0;
  justify-content: space-evenly;
}

.containerCards .box .bottom .advants > div {
  margin-right: 15px;
}

.containerCards .box .bottom .advants > div > span {
  font-weight: bold;
  font-size: 12px;
}

.containerCards .box .bottom .advants > div > div {
  margin-top: 10px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.containerCards .box .bottom .advants > div > div i {
  color: #777;
  font-size: 22px;
}

.containerCards .box .bottom .advants > div > div > span {
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
}

.containerCards .box .bottom .advants > div > div > span > span {
  color: #777;
  font-weight: normal;
  margin-left: 5px;
}

.containerCards .box .bottom .price {
  margin-top: 20px;
}

.containerCards .box .bottom .price span:first-of-type {
  display: block;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #228de5;
}

.containerCards .box .bottom .price span:last-of-type {
  color: #000000;
  font-size: 36px;
  font-weight: bold;
}

@media only screen and (max-width: 450px) {
  .containerCards .box .bottom .price span:first-of-type {
    font-size: 17px;
  }
  .containerCards .box .bottom .price span:last-of-type {
    font-size: 26px;
  }
}

.price {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 93px;
}

.containerCards .box .bottom .priceWithLikes {
  margin-top: 20px;
}

.containerCards .box .bottom .priceWithLikes span:first-of-type {
  display: block;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #228de5;
}

.containerCards .box .bottom .priceWithLikes span:last-of-type {
  color: #000000;
  font-size: 36px;
  font-weight: bold;
}

@media only screen and (max-width: 450px) {
  .containerCards .box .bottom .priceWithLikes span:first-of-type {
    font-size: 17px;
  }
  .containerCards .box .bottom .priceWithLikes span:last-of-type {
    font-size: 26px;
  }
}

.priceWithLikes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 93px;
  width: 100%;
}

.main-search-input {
  margin: 150px auto;
  border-radius: 50px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 9px;
  max-height: 68px;
  max-width: 90vw;
}

.main-search-input-item {
  flex: 1;
  border-right: 1px solid #e9e9e9;
  margin-top: 3px;
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
}

.main-search-input .main-search-input-item:nth-last-child(2) {
  border-right: 0;
  padding-left: 15px;
}

.main-search-input input,
.main-search-input input:focus {
  font-size: 16px;
  border: 0;
  background: #fff;
  margin: 0;
  padding: 0;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  max-width: 100%;
  width: 100%;
  font-family: "Raleway", sans-serif;
  outline: none !important;
}

.main-search-input select {
  border: 0;
  padding-top: 2px;
  padding-bottom: 0;
  height: 44px;
  box-shadow: none;
  max-width: 100%;
  font-size: 16px;
  width: 100%;
  font-family: "Raleway", sans-serif;
  outline: none !important;
  background-color: transparent;
}

.main-search-input button.button {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 0 40px;
  margin-right: 1px;
  height: 50px;
  outline: 0;
  background-color: #040a0f;
  color: #fff;
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 50px;
}

@media only screen and (max-width: 990px) {
  .main-search-input {
    margin: 150px auto;
    border-radius: 10px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: unset;
    padding: 29px;
    max-height: 498px;
    max-width: 61vw;
    justify-content: center;
    text-align: -moz-left;
  }

  .main-search-input button.button {
    margin-top: 20px;
  }
  .lastOfTypeDate {
    margin-left: 12px;
  }

  .catSelect {
    margin-left: -6px;
  }

  .containerCards .box {
    width: 78vw;
    margin-bottom: 40px;
  }

  .containerCards {
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    padding: 51px;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }

  .containerCards .box .top:hover:after {
    opacity: 0;
  }

  .containerCards .box .top:after {
    display: none;
  }

  .containerCards .box .top:before {
    content: "";
    width: 100%;
    height: 102%;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
    opacity: 0;
  }

  .box {
    cursor: pointer;
  }

  #mainHomePage {
    padding-top: 0;
    justify-content: flex-start;
  }
}

.group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap");

#body {
  background: #eee;
  margin: 0;
  background-image: url("https://images.pexels.com/photos/2527556/pexels-photo-2527556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
  font: 800 100% system-ui;
  min-height: 500px;
}

#mainHomePage {
  display: flex;
  align-items: flex-start;
  padding: 110px 0px;
  position: relative;
  margin: 0;
  height: 100vh;
  justify-content: flex-start;
  text-align: center;
  flex-direction: column;
}

#mainHomePage::after {
  position: absolute;
  background-image: linear-gradient(
    to bottom right,
    black 30%,
    transparent 100%
  );
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  content: "";
}

.group {
  transform: translateY(40%);
  /* overflow: hidden; */

h2 {
  font-family: "Merriweather", serif;
  font-size: 4rem;
  color: rgb(0, 0, 0);
  max-width: 20ch;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: 32pt;
    margin-top: -50px;
}

h1 span {
  color: #2c3949;
}

p {
  color: #f2f2f3;
  max-width: 50ch;
  font-weight: 300;
  margin-top: 1.5rem;
  line-height: 1.5;
  font-size: 1.2rem;
}
}


.btn-group {
  margin-top: 2rem;
  display: flex;
  align-items: center;
}

.btn-group button {
  border: none;
  padding: 14px 25px;
  background: #f2f2f3;
  color: #172fd5;
  border-radius: 4px;
  font-weight: bold;
  letter-spacing: 1.2;
  font-size: 0.7em;
  margin-left: 1rem;
}

.btn-group button:first-of-type {
  background: #172fd5;
  color: #f2f2f3;
  margin-left: 0;
}

.list {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
}

.list-item img {
  width: 100px;
  margin: 20px auto;
  filter: grayscale(100%);
}

.heading-enter-active {
  animation: fade 1s ease-in-out;
}

.p-enter-active {
  animation: show 3s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .heading-enter-active,
  .p-enter-active {
    animation: none;
  }
}

.fade-enter-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translate(-100%, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}

.typeLogement {
  display: flex;
  position: absolute;

  right: 0px;
  top: 4px;
}

.typeLogement span {
  color: #ffffff;
  background-color: #1370bd;
  padding: 7px 24px;
  font-size: 13px;
  font-weight: bold;
}
.location {
  color: #f00;
}

.section-three h3 {
  margin: 0 auto;
  width: 100%;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  font-size: 4vw;
}

/* Section Four */

.flex-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.section-four p {
  margin-bottom: 2rem;
}

.section-four {
  padding: 60px 20px;
}

/* Section Five */

.section-five-flex-group {
  flex-direction: row-reverse;
}

.section-five p {
  margin-bottom: 2rem;
}

/* Section Six */

.section-six p {
  margin-bottom: 2rem;
}

/* Flex Group Mobile */

@media (max-width: 800px) {
  .flex-group {
    flex-direction: column;
  }
}

/* Section Seven */

.section-seven h3 {
  margin: 0 auto;
  width: 80%;
  max-width: 700px;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
}

.section-seven-btn {
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  width: 7.5rem;
}

/* Section Eight */

.section-eight h4 {
  margin: 1rem 0;
  font-size: 1.25rem;
}

.section-eight p {
  line-height: 1.5rem;
}

.section-eight img {
}

.flex-group-eight {
  display: flex;
  gap: 2rem;
}

@media (max-width: 800px) {
  .flex-group-eight {
    flex-direction: column;
  }
}

/* Section Nine */

.section-nine {
  margin-top: 15rem;
}

.logo-container {
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  width: 70%;
  max-width: 700px;
  margin: 0 auto;
}

.section-nine svg {
  fill: white;
  height: 50px;
  cursor: pointer;
  transition: ease-in-out 250ms;
}

.section-nine svg:hover {
  transform: translateY(-10px);
  fill: #ffa98e;
}

/* Section Ten */

.section-ten h3 {
  margin: 15rem auto 2rem;
  width: 80%;
  max-width: 700px;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
}

.section-ten-btn {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 7.5rem;
}

.homePagePartImg {
  display: block;
  width: 100%;
  max-width: 1500px;
}
</style>

<style lang="scss">


@media screen and (max-width: 990px) {
  .containerCards .box .top img {
    height: 50vw;
  }
}


.titleCard{
      font-size: 28px;
      font-weight: bold;
  }
</style>
