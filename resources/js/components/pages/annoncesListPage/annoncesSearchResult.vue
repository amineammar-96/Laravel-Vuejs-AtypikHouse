<template>
  <div>



<div  v-if="loading" class="loaderDivPage">
         <div class="loaderDiv" v-if="loading">
         <loadingPage/>
     </div>
</div>


    <div  v-if="!loading" class="">

    <div  class="allAnnoncesDiv">
      <div class="sideBarFilters">

       </div>

      <div>
        <div class="filtersDiv">
          <ul class="ulTopSideBar">
               <li>
              <label for="sortFilter">Catégorie : </label>
              <select

                v-model="typeLogementCh"
                class="selectSortBy"
                name="sortFilter"
                id="sortFilter"
                v-on:change="typeLogementChChanged()"

              >

                <option selected value="" >Tout <small>({{ typeLogementCount('') }})</small></option>
                    <option v-for="(typeLogement , key) in typesLogement" :key="key"  :value="typeLogement.name"  >{{ typeLogement.name }} <small>({{ typeLogementCount(typeLogement.name) }})</small></option>


               </select>
            </li>
            <li>
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
            </li>
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
          <h1>Aucun bien ne correspond à votre sélection.</h1>
          <!-- <img
            @click="countrySelectValueReset"
            src="/images/noResultssvg.svg"
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
                  :to="'/annonce/?id=' + annonce.id"
                  class="text-dark"
                >

            <div class="top">
              <img
              v-if="annonce.defaultImage"
                :src="
                  'storage/' +
                  annonce.defaultImage.path +
                  '/' +
                  annonce.defaultImage.image
                "
              />
            </div>
            <div class="bottom">
              <h3>{{ annonce.title }}</h3>
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

<div                    style="display: flex; justify-content: end">
              <div style="position: absolute; top: -44px; left: 15px;"  class="price">
                <star-rating
                v-if="annonce.rating>0"
                  :padding="3"
                  :animate="true"
                  :star-size="25"
                  :show-rating="false"
                  :read-only="false"
                  :rating="annonce.rating"
                ></star-rating>
              </div>
</div>
              <div class="typeLogement">
                <span> {{ annonce.typeLogement }}</span>
              </div>
            </div>
           </router-link>
          </div>
        </div>



        <div class="resultCount" >
          <h3> Affichage de {{ sortedAnnonces.length }} sur  {{ annonces.length }} résultats </h3>


            <button v-show="sortedAnnonces.length>0 && !limitCardsShowen==1000 && annonces.length>sortedAnnonces.length " @click="showMoreAction"  class="btn btn-dark">Voir plus</button>
        </div>



      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
.allAnnoncesDiv {


.resultCount{
    display: flex;
justify-content: space-between;
        padding: 50px;

    h3{
        padding: 0px;
        font-size: 25px;
    }
}


  .noResultssvgDiv {
    display: block;
    text-align: center;
    padding: 107px 0px;
    min-width: 100vw;
    img {
      width: 30vw;
      cursor: pointer;
      margin: 50px;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .selectSortBy {
    width: 50%;
    border: none;
    background-color: rgba(110, 110, 110, 0.09);
    text-align: center;
    border-radius: 5px;
    margin-left: 20px;
    cursor: pointer;
  }

  .ulTopSideBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    li {
      text-align: center;
      width: 100%;
    }
  }

  .containerCards {
    margin: 0;
    margin-top: 40px;
  }

  .containerCardsAux {
    width: 100vw;
    display: grid;
    padding: 51px;
    padding-top: 51px;
    padding-top: 0;
    grid-template-columns: 33% 33% 33%;
    margin: 22px auto;
  }

  @media screen and (max-width:1050px) {
.containerCardsAux {
    width: 100%;
    display: flex;
    padding: 51px;
    padding-top: 51px;
    padding-top: 0;
    flex-direction: column;
    margin: 22px auto;
    justify-content: center;
align-items: center;
  }
  }

  .sidebar {
    position: fixed;
    width: 25%;
    height: 100vh;
    background: #312450;
    font-size: 0.45em;
  }

  .boxAux {
    width: 90%;

    margin-bottom: 50px;
    .bottom{
        position: relative;
        min-height: 404px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
  }
}
.filtersDiv {
  margin: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.17);
}

</style>


<script>
import axios from "axios";

import StarRating from "vue-star-rating";
  import loadingPage from '../loadingPage/loadingPage.vue'

export default {
  components: {
    StarRating,
    loadingPage


  },
  name:"Hébergements",

//   metaInfo:{
//       title : "Hébergements typique",
//       meta:[{
//           name:"Hébergements pour les vacances",
//           content:"Trouvez un logement pour passer vos vacances en France et en Europe"
//       }]
//   },


  data() {
    return {
      loggedIn: false,
            loading: true,

      user: {
        email: "",
        lastname: "",
        firstname: "",
        token: "",
      },

      annonces: [],

      sortValue: "news",
      countrySelectValue: "",

      countriesArray: [],
           typeLogementArray: [],
           typeLogementCh:"",



    limitCardsShowen : 4,
      typesLogement:[],


    };
  },


  computed: {
    sortedAnnonces() {
      if (this.countrySelectValue != "" ) {




           if(this.typeLogementCh!=''){
                          this.limitCardsShowen=1000;
            }


if (this.sortValue == "news") {
          return this.annonces
            .sort((a, b) => {
              return a.id < b.id;
            })
            .filter((item,index) => {
              return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.typeLogement.includes(this.typeLogementCh);
            });
        }
        else if (this.sortValue == "anciens") {
          return this.annonces
            .sort((a, b) => {
              return a.id > b.id;
            })
            .filter((item,index) => {
              return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.typeLogement.includes(this.typeLogementCh);
            });
        } else if (this.sortValue == "priceAsc") {
          return this.annonces
            .sort((a, b) => {
              return parseInt(a.price) > parseInt(b.price);
            })
            .filter((item,index) => {
              return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.typeLogement.includes(this.typeLogementCh);
            });
        } else if (this.sortValue == "priceDesc") {
          return this.annonces
            .sort((a, b) => {
              return parseInt(a.price) < parseInt(b.price);
            })
            .filter((item,index) => {
              return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.typeLogement.includes(this.typeLogementCh);
            });
        } else {
          return this.annonces.filter((item) => {
            return item.country == this.countrySelectValue;
          });
        }
      } else {

             this.limitCardsShowen=1000;



        if (this.sortValue == "news") {

          return this.annonces.sort((a, b) => {
            return a.id < b.id;
          }).filter((item,index) => {
              return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
            });

        } else if (this.sortValue == "anciens") {
 return this.annonces.sort((a, b) => {
            return a.id > b.id;
          }).filter((item,index) => {
              return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
            });

        } else if (this.sortValue == "priceAsc") {

          return this.annonces.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price);
          }).filter((item,index) => {
              return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
            });

        } else if (this.sortValue == "priceDesc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) < parseInt(b.price);
          }).filter((item,index) => {
              return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
            });
        } else {

          return this.annonces.filter((item,index) => {
              return  item.typeLogement.includes(this.typeLogementCh);
            });
        }
      }
    },
  },

  mounted() {
          this.getTypeLogement();

    this.getAnnonces();
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


        })
        .catch((err) => {});
    },
      showMoreAction(){
          this.limitCardsShowen+=4;
      },

    getAnnonces() {
      axios
        .get("api/getAnnonces")
        .then((response) => {


          response.data.annonces.forEach((element) => {

              element.images.forEach(elementAux => {
                  if (elementAux.default=="true")
              element.defaultImage=(elementAux);

              });

               this.typesLogement.forEach(elementaux => {
                    if(elementaux.id == element.type_logement_id){


                                element.typeLogement = elementaux.name
}
                });

                console.log('elementelementelement:3' , element )

            this.annonces.push(element);

            this.countriesArray.push(element.country);
            this.typeLogementArray.push(element.typeLogement);

            // let typeLogementForAnnonce = this.typeLogementForAnnonce(element.type_logement_id);




          });


                     this.loading=false;

        });

    },

    orderByChanged(){
          this.sortValue=this.sortValue;

      },


    typeLogementChChanged(){
          this.typeLogementCh=this.typeLogementCh;
      },

    typeLogementCount(ch){
 let typeLogementCount = 0;



      if (ch != "") {
        this.typeLogementArray.forEach((element) => {
             console.log(element , ch);


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
