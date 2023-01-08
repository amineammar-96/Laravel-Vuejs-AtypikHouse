<template>
  <div>



<div  v-if="loading" class="loaderDivPage">
         <div class="loaderDiv" v-if="loading">
         <loadingPage/>
     </div>
</div>

<div  v-if="!loading" class="loaderDivPage">
    <div class="allAnnoncesDiv">
      <div class="sideBarFilters"></div>

      <div>
        <div class="filtersDiv">
          <ul class="ulTopSideBar">
            <li>
              <label for="sortFilterByCat">Catégorie : </label>
              <select
                v-model="typeLogementCh"
                class="selectSortBy"
                name="sortFilter"
                id="sortFilterByCat"
                v-on:change="typeLogementChChanged()"
              >
                <option selected value="">
                  Tout <small>({{ typeLogementCount("") }})</small>
                </option>
                <option
                  v-for="(typeLogement, key) in typesLogement"
                  :key="key"
                  :value="typeLogement.name"
                >
                  {{ typeLogement.name }}
                  <small>({{ typeLogementCount(typeLogement.name) }})</small>
                </option>
              </select>
            </li>
            <!-- <li>
             <label for="sortFilter">Trier par :</label>
              <select
                v-on:change="orderByChanged()"
                v-model="sortValue"
                class="selectSortBy"
                name="sortFilter"
                id="sortFilter"
              >
                <option value="priceAsc">Prix : Ordre croissant</option>

                <option value="priceDesc">Prix : Ordre décroissant</option>

                <option value="comments">
                  Moyenne des commentaires client
                </option>

                <option value="news" selected>Nouveautés</option>

                <option value="anciens">Anciens</option>
              </select>
            </li> -->
            <li>
              <label for="countrySelectValue">Localisation : </label>
              <select
                v-model="countrySelectValue"
                class="selectSortBy"
                name="countrySelectValue"
                id="countrySelectValue"
              >
                <optgroup label="Pays">
                  <option selected value="">
                    UE ({{ countriesCount("") }})
                  </option>
                  <option value="France">
                    France ({{ countriesCount("France") }})
                  </option>
                  <option value="Belgique">
                    Belgique ({{ countriesCount("Belgique") }})
                  </option>
                  <option value="Bulgarie">
                    Bulgarie ({{ countriesCount("Bulgarie") }})
                  </option>
                  <option value="Croatie">
                    Croatie ({{ countriesCount("Croatie") }})
                  </option>
                  <option value="République tchèque">
                    République tchèque ({{
                      countriesCount("République tchèque")
                    }})
                  </option>
                  <option value="Danemark">
                    Danemark ({{ countriesCount("Danemark") }})
                  </option>
                  <option value="Estonie">
                    Estonie ({{ countriesCount("Estonie") }})
                  </option>
                  <option value="Finlande">
                    Finlande ({{ countriesCount("Finlande") }})
                  </option>

                  <option value="Allemagne">
                    Allemagne ({{ countriesCount("Allemagne") }})
                  </option>
                  <option value="Grèce">
                    Grèce ({{ countriesCount("Grèce") }})
                  </option>
                  <option value="Hongrie">
                    Hongrie ({{ countriesCount("Hongrie") }})
                  </option>
                  <option value="Islande">
                    Islande ({{ countriesCount("Islande") }})
                  </option>
                  <option value="Italie">
                    Italie ({{ countriesCount("Italie") }})
                  </option>
                  <option value="Latvia">
                    Latvia ({{ countriesCount("Latvia") }})
                  </option>
                  <option value="Luxembourg">
                    Luxembourg ({{ countriesCount("Luxembourg") }})
                  </option>
                  <option value="Monaco">
                    Monaco ({{ countriesCount("Monaco") }})
                  </option>
                  <option value="Pays-Bas">
                    Pays-Bas ({{ countriesCount("Pays-Bas") }})
                  </option>
                  <option value="Nouvelle-Zélande">
                    Nouvelle-Zélande ({{ countriesCount("Nouvelle-Zélande") }})
                  </option>
                  <option value="Pologne">
                    Pologne ({{ countriesCount("Pologne") }})
                  </option>
                  <option value="Portugal">
                    Portugal ({{ countriesCount("Portugal") }})
                  </option>
                  <option value="Roumanie">
                    Roumanie ({{ countriesCount("Roumanie") }})
                  </option>
                  <option value="Slovaquie">
                    Slovaquie ({{ countriesCount("Slovaquie") }})
                  </option>
                  <option value="Slovénie">
                    Slovénie ({{ countriesCount("Slovénie") }})
                  </option>
                  <option value="Espagne">
                    Espagne ({{ countriesCount("Espagne") }})
                  </option>
                  <option value="Suède">
                    Suède ({{ countriesCount("Suède") }})
                  </option>
                  <option value="Suisse">
                    Suisse ({{ countriesCount("Suisse") }})
                  </option>
                  <option value="Royaume-Uni">
                    Royaume-Uni ({{ countriesCount("Royaume-Uni") }})
                  </option>
                </optgroup>
              </select>
            </li>
          </ul>
        </div>

        <div class="noResultssvgDiv" v-show="sortedAnnonces.length == 0">
          <h1>Aucun résultat trouvé.</h1>
          <!-- <img
            @click="countrySelectValueReset"
            src="images/noResultssvg.svg"
            alt=""
          /> -->
        </div>

        <div v-show="sortedAnnonces" class="containerCards containerCardsAux">
          <div
            v-for="(annonce, key) in sortedAnnonces"
            :key="key"
            class="box boxAux"
          >
            <router-link
              style="text-decoration: none; width: 100%;"
              :to="'/annonce/?id=' + annonce.annonce.id"
              class="text-dark"
            >
              <div class="top" v-if="annonce.annonce.defaultImage">
                <img
                  v-if="annonce.annonce.defaultImage"
                  :src="
                    'storage/' +
                    annonce.annonce.defaultImage.path +
                    '/' +
                    annonce.annonce.defaultImage.image
                  "
                />
              </div>
              <div class="bottom">
                <h3>{{ annonce.annonce.title }}</h3>
                <div>
                  <div class="location">
                    <i
                      style="margin-right: 7px"
                      class="fas fa-map-marker-alt"
                    ></i
                    ><span> {{ annonce.annonce.city }} </span>
                  </div>
                </div>
                <div class="advants">
                  <div>
                    <span>Nbr de couchages </span>
                    <div>
                      <i class="fas fa-bed"></i
                      ><span> {{ annonce.annonce.numberOfBeds }} </span>
                    </div>
                  </div>
                  <div>
                    <span>Accueillement </span>
                    <div>
                      <i class="fas fa-users"></i
                      ><span>{{ annonce.annonce.capacity }}</span>
                    </div>
                  </div>
                  <div>
                    <span>Surface</span>
                    <div>
                      <i class="fas fa-vector-square"></i
                      ><span>{{ annonce.annonce.surface }}<span>Cm²</span></span>
                    </div>
                  </div>
                </div>
                <div class="price">
<span>
                    €{{ parseFloat(annonce.annonce.price).toFixed(2) }}
                    <small style="font-size: 16px">/nuit</small>
                  </span>
                </div>

                <div style="display: flex; justify-content: end">
                  <div
                    style="position: absolute; top: -44px; left: 15px"
                    class="price"
                  >
                    <star-rating

                      :padding="3"
                      :animate="true"
                      :star-size="25"
                      :show-rating="false"
                      :read-only="true"
                      :rating="annonce.annonce.rating"
                    ></star-rating>
                  </div>
                </div>
                <div class="typeLogement">
                  <span> {{ annonce.annonce.typeLogement }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="resultCount">
          <span>
            Affichage de {{ sortedAnnonces.length }} sur
            {{ favorites.length }} résultats
          </span>

          <button
            v-show="
              sortedAnnonces.length > 0 &&
              !limitCardsShowen == 1000 &&
              favorites.length > sortedAnnonces.length
            "
            @click="showMoreAction"
            class="btn btn-dark"
          >
            Voir plus
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";
  import loadingPage from '../loadingPage/loadingPage.vue'

export default {
  components: {
    StarRating,
    loadingPage
  },
  data() {
    return {
      loading:true,
    token: "",
      favorites: [],

      user: {
        email: "",
        lastname: "",
        firstname: "",
        token: "",
      },

      sortValue: "news",
      countrySelectValue: "",

      countriesArray: [],

      typeLogementArray: [],
      typeLogementCh: "",

      limitCardsShowen: 4,
      typesLogement: [],
    };
  },

  computed: {
    sortedAnnonces() {
      if (this.countrySelectValue != "") {
        if (this.typeLogementCh != "") {
          this.limitCardsShowen = 1000;
        }

        if (this.sortValue == "news") {
          return this.favorites
            .sort((a, b) => {
              return a.id < b.id;
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.country == this.countrySelectValue &&
                item.annonce.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "anciens") {
          return this.favorites
            .sort((a, b) => {
              return a.id > b.id;
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.country == this.countrySelectValue &&
                item.annonce.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "priceAsc") {
          return this.favorites
            .sort((a, b) => {
              return parseInt(a.price) > parseInt(b.price);
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.annonce.country == this.countrySelectValue &&
                item.annonce.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "priceDesc") {
          return this.favorites
            .sort((a, b) => {
              return parseInt(a.price) < parseInt(b.price);
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.annonce.country == this.countrySelectValue &&
                item.annonce.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else {
          return this.favorites.filter((item) => {
            return item.annonce.country == this.countrySelectValue;
          });
        }
      } else {
        this.limitCardsShowen = 1000;

        if (this.sortValue == "news") {
          return this.favorites
            .sort((a, b) => {
              return a.id < b.id;
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.annonce.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "anciens") {
          return this.favorites
            .sort((a, b) => {
              return a.id > b.id;
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.annonce.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "priceAsc") {
          return this.favorites
            .sort((a, b) => {
              return parseInt(a.price) > parseInt(b.price);
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.annonce.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "priceDesc") {
          return this.favorites
            .sort((a, b) => {
              return parseInt(a.price) < parseInt(b.price);
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.annonce.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else {
          return this.favorites.filter((item, index) => {
            return item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        }
      }
    },
  },
  mounted() {
    this.getTypeLogement();

    this.token = localStorage.getItem("token");

    if (localStorage.getItem("token") == "") {
      this.$router.push({ path: "/se-connecter" });
    }

    this.getLikesForUsers();
  },

  methods: {
    getTypeLogement() {
      this.typesLogement = [];
      axios
        .get("/api/getTypeLogement")
        .then((response) => {
          response.data.typesLogement.forEach((element) => {
              if(element.name!="Autre")
            this.typesLogement.push(element);
          });

 response.data.typesLogement.forEach((element) => {
              if(element.name=="Autre")
            this.typesLogement.push(element);
          });

                               this.loading=false;



        })
        .catch((err) => {});
    },
    getLikesForUsers() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      let userAux = {
        user_id: localStorage.getItem("userId"),
      };
      axios.post("api/getLikesForUsers", userAux, config).then((response) => {
        response.data.likes.forEach((element) => {
            console.log('element.annonce : ' , element.annonce)

            element.annonce.images.forEach(elementAux => {
                  if (elementAux.default=="true")
              element.annonce.defaultImage=(elementAux);

              });




          this.typesLogement.forEach((elementAux) => {
                console.log(' element.annonce.type_logement_id. element.annonce.type_logement_id ::  '  , elementAux.id, element.annonce.type_logement_id )


            if (elementAux.id == element.annonce.type_logement_id) {
              element.annonce.typeLogement = elementAux.name;
            }
          });

          this.favorites.push(element);
          this.countriesArray.push(element.annonce.country);
          this.typeLogementArray.push(element.annonce.typeLogement);

        });
                 console.log('hahhabannana ::  ' , this.favorites)

      });

    },

    showMoreAction() {
      this.limitCardsShowen += 4;
    },

    orderByChanged() {
      this.sortValue = this.sortValue;
    },

    typeLogementChChanged() {
      this.typeLogementCh = this.typeLogementCh;
    },

    typeLogementCount(ch) {
        // console.log('chhh : ' ,ch)
      let typeLogementCount = 0;

      if (ch != "") {
        this.typeLogementArray.forEach((element) => {
             console.log(this.typeLogementArray , ch);


          if (element == ch) {
            typeLogementCount++;
          }
        });

        return typeLogementCount;
      }
      if (ch == "") {
        return this.typeLogementArray.length;
      }
    },

    countriesCount(ch) {
      let countriesCount = 0;

      if (ch != "") {
        this.countriesArray.forEach((element) => {
          if (element == ch) {
            countriesCount++;
          }
        });

        return countriesCount;
      }
      if (ch == "") {
        return this.countriesArray.length;
      }
    },
  },
};
</script>

<style lang="scss">
</style>
