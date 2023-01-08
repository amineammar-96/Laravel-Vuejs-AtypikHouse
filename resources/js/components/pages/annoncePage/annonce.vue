<template>
  <div>
    <div v-if="loading" class="loaderDivPage">
      <div class="loaderDiv" v-if="loading">
        <loadingPage />
      </div>
    </div>

    <div class="loaderDiv" v-if="!loading">
      <div class="containerAnnonceFirst">
        <div class="notFoundDiv" v-show="annonce.length == 0">
          <div class="mainbox">
            <div
              style="
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
              "
            ></div>
          </div>
        </div>

        <div v-show="annonce.length > 0" class="containerAnnonce">
          <div class="temp">
            <div class="secondDiv">
              <div class="priceOneAnnonce">
                <h4 v-if="annonce">{{ annonce[0].title }}</h4>
              </div>
              <div class="ratingStars">

                <div v-if="ratingAverageAnnonce>0" class="stars">
                  <i :class="ratingAverageAnnonce > 0 ? 'fas' : 'far'" class="fa-star"></i>
                  <i :class="ratingAverageAnnonce > 1 ? 'fas' : 'far'" class="fa-star"></i>
                  <i :class="ratingAverageAnnonce > 2 ? 'fas' : 'far'" class="fa-star"></i>
                  <i :class="ratingAverageAnnonce > 3 ? 'fas' : 'far'" class="fa-star"></i>
                  <i :class="ratingAverageAnnonce > 4 ? 'fas' : 'far'" class="fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="annonce.length > 0 && srcImagesArray.length > 0"
            class="imagesPrev"
          >
            <Carousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="false"
              v-model="currentSlide"
              :transition="1000"
            >
              <Slide v-for="(image, key) in srcImagesArray" :key="key">
                <div class="carousel__item">
                  <img alt='imageParDéfault' class="bigOneImage" :src="'www.f2i-dev9-aa-mk-ah-cd.fr/api/getAnnonceCoverImage/?annonce_id='+2" />
                </div>
              </Slide>
            </Carousel>

            <Carousel
              v-if="srcImagesArray.length > 1"
              id="thumbnails"
              :items-to-show="
                srcImagesArray.length > 3 ? '4' : srcImagesArray.length
              "
              :wrap-around="false"
              v-model="currentSlide"
              ref="carousel"
            >
              <Slide v-for="(image, key) in srcImagesArray" :key="key">
                <div class="carousel__item" @click="currentSlide = key">
                  <img
                    class="scrollImagesPreview"
                    :style="currentSlide == key ? 'opacity:0.3;' : ''"
                    :src="image"
                    :alt="'imageCarousel'+key"
                  />
                </div>
              </Slide>
              <template #addons>
                <Navigation v-if="annonce[0].images.length > 4" />
              </template>
            </Carousel>
          </div>

          <div class="priceWithLikes">
            <h4 v-if="annonce">
              € {{ parseFloat(annonce[0].price).toFixed(2) }}
            </h4>
          </div>

                    <div style="
" class="priceWithLikes">

          <div>
              <p>{{ annonce[0].annonceVisitsCount }} personnes ont vu cette annonce</p>
          </div>


            <div
              v-if="annonce"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
            >

              <div  @click="addLikeForAnnonce" class="likeIconDiv">
<button  class="like__btn">
   <span id="icon"><i :class="
                  likeAnnoncePageAlreadyLiked
                    ? 'fas'
                    : 'far'
                " class="fa-thumbs-up"></i></span>
   <span id="count">{{ likes.length }}</span> J'aime
</button>
</div>

              <!-- <i
                v-if="loggedIn && annonce[0].user_id != user.id"
                @click="addLikeForAnnonce"
                :class="
                  likeAnnoncePageAlreadyLiked
                    ? 'likeAnnoncePageAlreadyLiked'
                    : 'likeAnnoncePage likeAnnoncePageHover'
                "
                class="fas fa-heart likeAnnoncePage"
              ></i> -->
            </div>
          </div>

          <div class="multiDivContainer">
            <div v-if="annonce" class="tabsDivMobile">
              <div class="desc">
                <h1 style="margin-top: 1vw">Résumé</h1>
                <p>
                  {{ annonce[0].description }}
                </p>
                <p>
                  {{ annonce[0].informationsSupp }}
                </p>
              </div>

              <div>
                <h3>Détails</h3>
                <div class="tabcontent tabcontentAux">
                  <div class="servicesAndOptionsDiv">
                    <div class="servicesDiv">
                      <h2 style="color: black">Services</h2>

                      <p
                        v-for="(service, key) in JSON.parse(logementServices)"
                        :key="key"
                      >
                        <img
                        alt="IconSalleDeBain"
                          v-if="service == 'Salle de bain'"
                          src="https://img.icons8.com/ios-filled/30/null/shower.png"
                        />

                        <img
                                                alt="IconParking"

                          v-if="service == 'Parking'"
                          src="https://img.icons8.com/ios-filled/30/null/parking.png"
                        />
                        <img
                                                alt="IconWifi"

                          v-if="service == 'Wi-fi'"
                          src="https://img.icons8.com/ios-filled/50/null/wifi--v1.png"
                        />

                        <img
                                                alt="IconSalleDeBain"

                          v-if="service == 'Terrasse'"
                          src="https://img.icons8.com/material-rounded/24/null/open-window.png"
                        />

                        <img
                                                alt="IconSalleDeBain"

                          v-if="service == 'Equipements de camping'"
                          src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/null/external-camping-camping-tanah-basah-glyph-tanah-basah.png"
                        />

                        <img
                                                alt="IconSalleDeBain"

                          v-if="service == 'Piscine'"
                          src="https://img.icons8.com/ios-glyphs/30/null/swimming-pool.png"
                        />

                        <img
                                                alt="IconSalleDeBain"

                          v-if="service == 'Spa privatif'"
                          src="https://img.icons8.com/pastel-glyph/30/null/spa-care.png"
                        />

                        <img v-if="service != 'Spa privatif' && service != 'Salle de bain' && service != 'Piscine' &&  service!='Equipements de camping' && service!='Terrasse' &&  service!='Wi-fi' && service != 'Parking'  " src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"/>




                        {{ service }}
                      </p>
                    </div>

                    <div class="optionsDiv">
                      <h2 style="color: black">Options</h2>

                      <p
                        v-for="(option, key) in JSON.parse(optionLogement)"
                        :key="key"
                      >
                        <img
                          v-if="option == 'Lave-vaisselle'"
                          src="https://img.icons8.com/ios-glyphs/30/null/dishwasher.png"
                        />
                        <img
                          v-if="option == 'Petit-déjeuner'"
                          src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/null/external-breakfast-mother-day-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
                        />

                        <img
                          v-if="option == 'Télévision'"
                          src="https://img.icons8.com/ios-filled/30/null/tv-show.png"
                        />

                        <img
                          v-if="option == 'Cafetière'"
                          src="https://img.icons8.com/ios-filled/30/null/coffee-pot.png"
                        />
                        <img
                          v-if="option == 'Machine à laver'"
                          src="https://img.icons8.com/ios-glyphs/30/null/washing-machine.png"
                        />
                        <img
                          v-if="option == 'Linge de toilettes'"
                          src="https://img.icons8.com/material-rounded/30/null/toilet-bowl.png"
                        />
                        <img
                          v-if="option == 'Ligne de lits'"
                          src="https://img.icons8.com/ios-filled/30/null/empty-bed.png"
                        />

                        <img v-if="option != 'Ligne de lits' && option != 'Linge de toilettes' && option != 'Machine à laver' &&  option!='Cafetière' && option!='Télévision' &&  option!='Petit-déjeuner' && option != 'Lave-vaisselle'  " src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"/>

                        {{ option }}
                      </p>
                    </div>
                  </div>

                  <div class="detailsMobile">
                    <h2 style="color: black">Détails</h2>

                    <p>
                      <img
                        src="https://img.icons8.com/ios-filled/30/null/visit.png"
                      />
                      Ville : {{ annonce[0].city }}
                    </p>

                    <p>
                      <img
                        src="https://img.icons8.com/ios-filled/30/null/surface.png"
                      />
                      Surface : {{ annonce[0].surface }} cm²
                    </p>

                    <p>
                      <img
                        src="https://img.icons8.com/ios-filled/30/null/empty-bed.png"
                      />
                      Nombre de couchages : {{ annonce[0].numberOfBeds }}
                    </p>
                    <p>
                      <img
                        src="https://img.icons8.com/ios-filled/30/null/groups.png"
                      />
                      Capacité d'accueillement : {{ annonce[0].capacity }}
                    </p>

                    <p>
                      <img
                        src="https://img.icons8.com/ios-glyphs/30/null/exterior.png"
                      />
                      {{ annonce[0].typeLogement }}
                    </p>

                    <p>
                      <img
                        src="https://img.icons8.com/ios-glyphs/30/null/pets.png"
                      />Animaux autorisés : {{ upperCaseFirstChar(annonce[0].animaux) }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="addressDiv" style="padding: 30px">
                <div class="addressDivPart1">
                  <h3>
                    <img
                      src="https://img.icons8.com/ios-filled/50/null/visit.png"
                    />Adresse postale
                  </h3>
                  <ul>
                    <li v-if="annonce[0].address">
                      {{ annonce[0].address }}
                    </li>
                    <li v-if="annonce[0].compAddress">
                      {{ annonce[0].compAddress }}
                    </li>
                    <li v-if="annonce[0].city">
                      {{ annonce[0].city }} {{ annonce[0].postalCode }}
                    </li>
                    <li v-if="annonce[0].country">
                      {{ annonce[0].country }}
                    </li>
                  </ul>
                </div>

                <div class="addressDivPart2">
                  <iframe
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%"
                    height="400"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
            </div>

            <div class="tabsDiv">
              <div id="tabs" class="containerTabs">
                <div class="tabs" v-if="annonce">
                  <a
                    v-on:click="activetab = 1"
                    v-bind:class="[activetab === 1 ? 'active' : '']"
                    ><i class="fas fa-info-circle"></i>Description</a
                  >
                  <a
                    v-on:click="activetab = 2"
                    v-bind:class="[activetab === 2 ? 'active' : '']"
                    ><i class="fas fa-suitcase"></i>Services</a
                  >
                  <a
                    v-on:click="activetab = 3"
                    v-bind:class="[activetab === 3 ? 'active' : '']"
                    ><i class="fas fa-map"></i>Lieu</a
                  >
                  <a
                    v-on:click="activetab = 4"
                    v-bind:class="[activetab === 4 ? 'active' : '']"
                    ><i class="fas fa-comments"></i>Avis client</a
                  >
                  <a
                    v-if="user.userRole == 'client'"
                    v-on:click="activetab = 5"
                    v-bind:class="[activetab === 5 ? 'active' : '']"
                    ><i class="fas fa-calendar-alt"></i>Réserver</a
                  >
                </div>

                <div v-if="annonce" class="content">
                  <div v-if="activetab === 1" class="tabcontent">
                    <div>
                      <h1>Résumé</h1>
                      <p>
                        {{ annonce[0].description }}
                      </p>

                      <br /><br />

                      <p>
                        {{ annonce[0].informationsSupp }}
                      </p>
                    </div>
                  </div>
                  <div v-if="activetab === 2" class="tabcontent">
                    <div class="servicesAndOptionsDiv">
                      <div class="servicesDiv">
                        <h2 style="color: black">Services</h2>

                        <p
                          v-for="(service, key) in JSON.parse(logementServices)"
                          :key="key"
                        >
                          <img
                            v-if="service == 'Salle de bain'"
                            src="https://img.icons8.com/ios-filled/30/null/shower.png"
                          />

                          <img
                            v-if="service == 'Parking'"
                            src="https://img.icons8.com/ios-filled/30/null/parking.png"
                          />
                          <img
                            v-if="service == 'Wi-fi'"
                            src="https://img.icons8.com/ios-filled/30/null/wifi--v1.png"/>

                          <img
                            v-if="service == 'Terrasse'"
                            src="https://img.icons8.com/material-rounded/24/null/open-window.png"
                          />

                          <img
                            v-if="service == 'Equipements de camping'"
                            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/null/external-camping-camping-tanah-basah-glyph-tanah-basah.png"
                          />

                          <img
                            v-if="service == 'Piscine'"
                            src="https://img.icons8.com/ios-glyphs/30/null/swimming-pool.png"
                          />

                          <img
                            v-if="service == 'Spa privatif'"
                            src="https://img.icons8.com/pastel-glyph/30/null/spa-care.png"
                          />

<img v-if="service != 'Spa privatif' && service != 'Salle de bain' && service != 'Piscine' &&  service!='Equipements de camping' && service!='Terrasse' &&  service!='Wi-fi' && service != 'Parking'  " src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"/>

                          {{ service }}
                        </p>
                      </div>

                      <div class="optionsDiv">
                        <h2 style="color: black">Options</h2>

                        <p
                          v-for="(option, key) in JSON.parse(optionLogement)"
                          :key="key"
                        >
                          <img
                            v-if="option == 'Lave-vaisselle'"
                            src="https://img.icons8.com/ios-glyphs/30/null/dishwasher.png"
                          />
                          <img
                            v-if="option == 'Petit-déjeuner'"
                            src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/null/external-breakfast-mother-day-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
                          />

                          <img
                            v-if="option == 'Télévision'"
                            src="https://img.icons8.com/ios-filled/30/null/tv-show.png"
                          />

                          <img
                            v-if="option == 'Cafetière'"
                            src="https://img.icons8.com/ios-filled/30/null/coffee-pot.png"
                          />
                          <img
                            v-if="option == 'Machine à laver'"
                            src="https://img.icons8.com/ios-glyphs/30/null/washing-machine.png"
                          />
                          <img
                            v-if="option == 'Linge de toilettes'"
                            src="https://img.icons8.com/material-rounded/30/null/toilet-bowl.png"
                          />
                          <img
                            v-if="option == 'Ligne de lits'"
                            src="https://img.icons8.com/ios-filled/30/null/empty-bed.png"
                          />

                          <img v-if="option != 'Ligne de lits' && option != 'Linge de toilettes' && option != 'Machine à laver' &&  option!='Cafetière' && option!='Télévision' &&  option!='Petit-déjeuner' && option != 'Lave-vaisselle'  " src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"/>

                          {{ option }}
                        </p>
                      </div>

                      <div>
                        <h2 style="color: black">Détails</h2>

                        <p>
                          <img
                            src="https://img.icons8.com/ios-filled/30/null/visit.png"
                          />
                          Ville : {{ annonce[0].city }}
                        </p>

                        <p>
                          <img
                            src="https://img.icons8.com/ios-filled/30/null/surface.png"
                          />
                          Surface : {{ annonce[0].surface }} cm²
                        </p>

                        <p>
                          <img
                            src="https://img.icons8.com/ios-filled/30/null/empty-bed.png"
                          />
                          Nombre de couchages : {{ annonce[0].numberOfBeds }}
                        </p>
                        <p>
                          <img
                            src="https://img.icons8.com/ios-filled/30/null/groups.png"
                          />
                          Capacité d'accueillement : {{ annonce[0].capacity }}
                        </p>

                        <p>
                          <img
                            src="https://img.icons8.com/ios-glyphs/30/null/exterior.png"
                          />
                         {{ annonce[0].typeLogement }}
                        </p>

                        <p>
                          <img
                            src="https://img.icons8.com/ios-glyphs/30/null/pets.png"
                          />Animaux autorisés : {{ upperCaseFirstChar(annonce[0].animaux) }}
                        </p>
                      </div>

                      <div
                        style="display: flex; flex-direction: column"
                        v-if="annonce[0].suppPropretiesAnnonce.length > 0"
                      >
                        <h2 style="color: black">Plus</h2>

                        <!-- <p
                        v-show="value.suppPropretiesAnnonce "
                          v-for="(value, key) in annonce[0]
                            .suppPropretiesAnnonce"
                          :key="key"
                        > -->

                        <p
                          style="margin: 0px 0"
                          v-for="(value, key) in annonce[0]
                            .suppPropretiesAnnonce"
                          :key="key"
                          v-show="value.suppPropretiesAnnonce"
                        >
                          {{ value.name }} : {{ value.suppPropretiesAnnonce }}
                          {{ value.unity }}

                          <br />
                          <br />
                        </p>

                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div v-if="activetab === 3" class="tabcontent">
                    <div class="locationDiv">
                      <div class="headerLocation">
                        <ul>
                          <li v-if="annonce[0].address">
                            <i class="fas fa-map-pin"></i>Adresse postale :
                          </li>
                          <li v-if="annonce[0].address">
                            {{ annonce[0].address }}
                          </li>
                          <li v-if="annonce[0].compAddress">
                            {{ annonce[0].compAddress }}
                          </li>
                          <li v-if="annonce[0].city">
                            {{ annonce[0].city }} {{ annonce[0].postalCode }}
                          </li>
                          <li v-if="annonce[0].country">
                            {{ annonce[0].country }}
                          </li>
                        </ul>
                      </div>
                      <div style="width: 70%" class="googleMapLocation">
                        <div style="width: 100%; height: 50%">
                          <iframe
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="100%"
                            height="400"
                            frameborder="0"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="activetab === 4"
                    :class="activetab === 4 ? 'tabcontentLocation' : ''"
                    class="tabcontent commentsWrapper"
                  >
                    <div class="comment-container theme--light">
                      <div class="comments">

                        <div v-if="comments.length==0">
                                <h2>Aucun commentaire pour cette annonce</h2>
                        </div>

                        <div v-for="(comment , key ) in comments" :key="key">
                          <div
                            class="card v-card v-sheet theme--light elevation-2"
                          >
                            <div class="header">
                              <div
                                class="v-avatar avatar"
                                style="height: 50px; width: 50px"
                              >
                                <img
                                :src="'../../../../../storage/'+comment.avatar[0].path+'/'+comment.avatar[0].name"
                                />
                              </div>
                              <span class="displayName title">{{ comment.userAccount.lastname }} {{ comment.userAccount.firstname }}</span>
                              <span class="displayName caption"
                                >{{ (comment.created_at) }}</span
                              >
                            </div>
                            <div class="wrapper comment">
                              <p>
                                {{comment.content}}
                              </p>
                            </div>
                            <div class="actions"></div>
                            <div
                              class="v-dialog__container"
                              style="display: flex; justify-content: end"
                            >
                              <star-rating
                                :padding="6"
                                :animate="false"
                                :star-size="25"
                                :show-rating="false"
                                :read-only="true"
                                :rating="comment.rating"
                              ></star-rating>
                            </div>
                          </div>
                          <!---->
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="activetab === 5 && user.userRole == 'client'"
                    class="tabcontent bookingDiv"
                  >
                    <div class="headerTitle">
                      <div></div>
                      <div>
                        <h6>
                          <img
                            src="https://img.icons8.com/sf-ultralight-filled/30/40C057/phone.png"
                          />
                          {{ owner.phoneNumber }}
                        </h6>
                      </div>
                    </div>

                    <div v-if="!loggedIn" class="bookingDivBody">
                      <div class="notloggedinDivReservation">
                        <div class="">
                          <router-link @click="scrollToTop" to="/se-connecter">
                            <button>Se connecter</button>
                          </router-link>
                        </div>

                        <div class="">
                          <router-link @click="scrollToTop" to="/inscription">
                            <button>Créer un compte</button>
                          </router-link>
                        </div>
                      </div>
                    </div>

                    <div v-if="loggedIn" class="bookingDivBody">
                      <div
                        class="
                          contact-form-wrapper
                          d-flex
                          justify-content-center
                        "
                      >
                        <form class="contact-form">
                          <h5 class="title">Réservation</h5>
                          <p class="description">
                            Réserver le logement dés maintenant
                          </p>
                          <div style="margin-top: 40px">
                            <p class="description">Choisir une période</p>
                          </div>
                          <div>
                            <Datepicker
                              text-input
                              :onInput="datePickerChanged()"
                              range
                              :partial-range="false"
                              :enable-time-picker="false"
                              v-model="date"
                              :min-date="new Date()"
                              :format="format"
                              :disabled-dates="disabledDates"
                              light
                              :day-names="[
                                'Lun',
                                'Mar',
                                'Mer',
                                'Jeu',
                                'Ven',
                                'Sam',
                                'Dim',
                              ]"
                              cancel-text="Fermer"
                              select-text="Choisir"
                              locale="fr"
                            ></Datepicker>
                          </div>

                          <!-- <div>
                          <input
                            @change="changeNightsCount"
                            v-model="nightsCount"
                            type="number"
                            min="1"
                            step="1"
                            class="
                              form-control
                              rounded
                              border-white
                              mb-3
                              form-input
                            "
                            id="name"
                            placeholder="Nombre de nuits"
                            required
                          />
                        </div> -->

                          <!-- <p class="description">Votre date d'arrivée</p>
                        <div>
                          <input
                            v-model="booking.dateCheckIn"
                            type="date"
                            id="input2"
                            placeholder="Check in"
                            class="
                              form-control
                              rounded
                              border-white
                              mb-3
                              form-input
                            "
                            required
                          />
                        </div> -->
                        </form>

                        <div class="optionCompDiv">
                          <h3>Services supplémentaires</h3>
                          <div>
                            <ul>
                              <li v-if="annonce[0].animaux == 'oui'">
                                <input
                                  v-model="animauxSupp"
                                  value="49.99"
                                  type="checkbox"
                                  name="animaux"
                                  id="animaux"
                                /><label for="animaux">Animaux +5%</label>
                              </li>
                              <li>
                                <input
                                  v-model="inclusiveSupp"
                                  value="29.99"
                                  type="checkbox"
                                  name="inclusive"
                                  id="inclusive"
                                /><label for="inclusive"
                                  >Formule All inclusive +10%</label
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div v-if="bookingDateAvailable" class="divBottonBooking">
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#bookingModal"
                          @click="renderPaypalButton"
                        >
                          Réserver
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




<div style="display:flex;justify-content:center; width:100%">
          <div class="ownerProfile">
            <div class="wrapper">
              <div class="card">

               <div class="img">
                  <div v-if="user.avatar">
                    <img
                      :src="
                        'storage/' +
                        user.avatar[0].path +
                        '' +
                        user.avatar[0].name
                      "
                      class="img-fluid"
                      :alt="owner.lastname"
                    />
                  </div>
                  <div v-else>
                    <img alt="progileImage" src="../../../../../public/images/avatar.png"  class="img-fluid" />
                  </div>
                </div>

               <div class="infos">
                  <div class="name">
                    <h1 style="color: black">
                      {{ owner.lastname }} {{ owner.firstname }}
                    </h1>
                    <h2>@propriétaire</h2>
                  </div>
                  <p class="text">Téléphone : {{ owner.phoneNumber }}</p>
                  <br />
                  <p class="text">E-mail : {{ owner.email }}</p>

                  <ul class="stats">
                    <li>
                      <h3>15K</h3>
                      <h4>Points</h4>
                    </li>
                    <li>
                      <h3>5</h3>
                      <h4>Annonces</h4>
                    </li>
                    <li>
                      <h3>1.3M</h3>
                      <h4>Likes</h4>
                    </li>
                  </ul>

                  <div class="linksAux">
                    <div class="links">
                      <button class="follow">Voir profile</button>
                    </div>

                    <div>
                      <a aria-label="first link" :href="'tel:' + owner.phoneNumber"
                        ><i class="fas fa-phone"></i
                      ></a>

                      <a aria-label="first second" :href="'mailto:' + owner.email"
                        ><i class="fas fa-envelope"></i
                      ></a>

                      <a
                        ><i
                          @click="sendMessage"
                          style="cursor: pointer"
                          v-if="loggedIn && user.id != owner.id"
                          class="fas fa-comments"
                        ></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div v-if="annonces.length > 0" class="randomAnnonces">
            <h1>Offres similaires</h1>
            <div
              style="
                display: flex;
                justify-content: center;
                flex-direction: column;
                text-align: center;
              "
            >
              <Carousel
                :settings="settings"
                :breakpoints="breakpoints"
                :items-to-scroll="1"
                :items-to-show="2"
                :wrap-around="false"
                :transition="2000"
              >
                <Slide v-for="(annonceRandom, key) in annonces" :key="key">

                    <div class="carousel__item carouselItemRandomAnnonce">
                      <div class="carouselItemRandomAnnonceWrapper">
                        <div class="carouselItemRandomAnnonceCard">
                          <div class="carouselItemRandomAnnonceCardBanner">
                            <p class="category-tag categoryRandomType">
                              € {{ annonceRandom.price }}
                            </p>
                            <router-link
                    target="_blank"
                    style="text-decoration: none"
                    :to="'/annonce/?id=' + annonceRandom.id"
                    class="text-dark"
                  >
                            <img
                              v-if="annonceRandom.images[0]"
                              class="carouselItemRandomAnnonceCardBannerImg"
                              :src="
                                'storage/' +
                                annonceRandom.images[0].path +
                                '/' +
                                annonceRandom.images[0].image
                              "

                              :alt='"annonce au hasard "+key'
                            />
                            </router-link>
                          </div>
                          <div class="carouselItemRandomAnnonceCardBody">
                            <p class="blog-hashtag">
                              #{{ annonceRandom.typeLogement }}
                            </p>
                            <router-link
                    target="_blank"
                    style="text-decoration: none"
                    :to="'/annonce/?id=' + annonceRandom.id"
                    class="text-dark"
                  >
                            <h2 class="blog-title" style="color: black">

                              {{ annonceRandom.title }}
                            </h2>
                                              </router-link>

                            <p class="blog-description">
                              {{ annonceRandom.city }} ,
                              {{ annonceRandom.country }}
                            </p>

                            <div class="card-profile">
                              <img
                                class="profile-img"
                                src="../../../../../public/images/homeAnnonceRandom.svg"
                                alt="homeAnnonceRandom"
                              />

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </Slide>

                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
              </Carousel>
            </div>
          </div>







        </div>

        <!-- Modal -->
        <div class="modalBooking">
          <div
            class="modal fade"
            id="bookingModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            ref="modal"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div v-if="annonce" class="receipt">
                    <span> {{ annonce[0].title }} </span>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  style="padding: 0; width: 100%"
                  class="modal-body modalDivBooking"
                >
                  <div class="container">
                    <div class="left">
                      <div class="info-box">
                        <div class="entry">
                          <i class="icon-wallet" aria-hidden="true"></i>
                          <p>
                            Somme à payer :
                            <span
                              >€ {{ Number(reservationSum).toFixed(2) }}</span
                            >
                          </p>
                        </div>

                        <div class="entry">
                          <i class="icon-calendar" aria-hidden="true"></i>
                          <p>
                            Date d'arrivé :
                            <span> {{ dateFormatAux[0] }} </span>
                          </p>
                        </div>

                        <div class="entry">
                          <i class="icon-calendar" aria-hidden="true"></i>
                          <p>
                            Date de départ :
                            <span> {{ dateFormatAux[1] }} </span>
                          </p>
                        </div>

                        <div class="entry">
                          <i class="icon-calendar" aria-hidden="true"></i>
                          <p>
                            Nombre de nuits : <span> {{ nightsCount }} </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="right">
                      <div class="content">

                        <div
                          style="padding: 30px"
                        >


                          <div id="main" class="main" role="main">



<div id="paypal-buttons"></div>



                          </div>

                          <div class="footer" style="background-color: white">
                            <a href="#">www.paypal.com/help</a>
                            <h6>{{ getToDayDateFormat(new Date()) }}</h6>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
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
import { loadScript } from "@paypal/paypal-js";



import axios from "axios";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import StarRating from "vue-star-rating";
import Swal from "sweetalert2";
import { ref } from "vue";
import $ from "jquery";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import loadingPage from "../loadingPage/loadingPage.vue";


import moment from "moment";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    StarRating,
    Datepicker,
    loadingPage,
  },
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

        dates.push(`${day}/${month}/${year}`);
      });

      return dates;
    };

    const date = ref();

    return {
      loading: true,

      date,
      format,
      disabledDates: [new Date("2022/12/22")],

      annonceId: {
        id: 0,
      },

      annonce: "",
      images: [],

      el: "#tabs",
      activetab: 1,

      logementServices: {},

      optionLogement: {},
      nightsCount: 1,

      animauxSupp: false,
      inclusiveSupp: false,
      pdjSupp: false,
      reservationSum: 0,

      verifyState: true,

      booking: {
        dateCheckIn: "",
      },

      bookingPaymentMethodStep: 1,

      annonces: [],

      imagesAnnoncesAux: [],
      srcImagesArray: [],
      imageIndex: 0,

      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        300: {
          itemsToShow: 1,
          snapAlign: "start",
        },
        // 1024 and up
        1124: {
          itemsToShow: 2,
          snapAlign: "start",
        },
      },

      currentSlide: 0,

      owner: {
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        address: "",
        compAddress: "",
        postalCode: "",
        city: "",
        country: "France",
        token: "",
        email_verified_at: "",
      },

      user: {
        id: "",
        token: "",
        avatar: "",
      },

      loggedIn: false,
      likeAnnoncePageAlreadyLiked: false,
      likes: [],

      indisponibilities: [],

      indisponibilitiesArray: [],

      reservations: [],

      dateRangeLength: 0,

      disableDatesInReserversationCheck: false,

      dateFormatAux: "",

    //   currentCardBackground: Math.floor(Math.random() * 25 + 1), // just for fun :D
    //   cardName: "",
    //   cardNumber: "",
    //   cardMonth: "",
    //   cardYear: "",
    //   cardCvv: "",
    //   minCardYear: new Date().getFullYear(),
    //   amexCardMask: "#### ###### #####",
    //   otherCardMask: "#### #### #### ####",
    //   cardNumberTemp: "",
    //   isCardFlipped: false,
    //   focusElementStyle: null,
    //   isInputFocused: false,

      bookingDateAvailable: false,

    //    credentials: {
    //     sandbox: '<sandbox client id>',
    //     production: '<production client id>'
    //   }


    comments:[],
    ratingAverageAnnonce :0,

    };
  },

  computed: {

    getCardType() {
      let number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";

      re = new RegExp("^9792");
      if (number.match(re) != null) return "troy";

      return "visa"; // default type
    },
    generateCardNumberMask() {
      return this.getCardType === "amex"
        ? this.amexCardMask
        : this.otherCardMask;
    },
    minCardMonth() {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
  },
  watch: {
    cardYear() {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    },
  },
  mounted() {



    this.user.id = localStorage.getItem("userId");
    this.user.userRole = localStorage.getItem("userRole");

    if (localStorage.getItem("token") != "") {
      this.user.token = localStorage.getItem("token");
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.updateVisitsCountForAnnonce();

    this.annonceId.id = this.$route.query.id;
    console.log("annoncePage :::: id = ", this.annonceId);
    this.annonces = [];
    this.getAnnonce();
    this.getAverageRatingForCommentsByAnnonce();
    this.getAnnonceComments();

    this.getAnnonces();
    this.owner.token = localStorage.getItem("token");

    this.getLikesForAnnonce();
    this.getIndisponibilities();
    this.getReservationByAnnonce();




  },

  methods: {

    updateVisitsCountForAnnonce(){
        let req = {
            user_id : localStorage.getItem('userId'),
            annonce_id : this.$route.query.id,
        }

        axios.post('api/addAnnonceVisit' , req);
    },

upperCaseFirstChar(name) {
      const firstChar = name[0].toUpperCase();
      const rest = name.slice(1);

      return firstChar + rest;
    },
      getAverageRatingForCommentsByAnnonce(){

          axios.post('api/getAverageRatingForCommentsByAnnonce' , this.annonceId).then((response) => {
              this.ratingAverageAnnonce=response.data.average
          });
      },

      getAnnonceComments(){

          this.comment=[];

          axios.post('api/getAnnonceComments' , this.annonceId).then((response) => {
              response.data.comments.forEach(element => {
                  this.comments.push(element);
              });
          }).catch((err) => {

          });
      },

renderPaypalButton(){

     loadScript({ "client-id": "ATIe_zQwu7Z6muEj6cW98HpmMmCyUVaooKL1RSzlI23XdnraljB_z4ZgfqYz7a_uKwMr_E0TBWbKrV0K" })
    .then((paypal) => {
        paypal
            .Buttons({
                createOrder: (data, actions) => {

        return actions.order.create({

          purchase_units: [{

            amount: {
                            //   currency: "EUR",

              currency_code: "USD",
              value: Number(this.reservationSum).toFixed(2),


            }

          }]

        });

      },
      onApprove: (data, actions) => {

          let tis = this;

        return actions.order.capture().then(function(orderData) {

          // Successful capture! For dev/demo purposes:

          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          const transaction = orderData.purchase_units[0].payments.captures[0];

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`,
  showConfirmButton: true,
  timer: 11500
})
tis.confirmReservation();





        //   alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);

          // When ready to go live, remove the alert and show a success message within this page. For example:

          // const element = document.getElementById('paypal-button-container');

          // element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');

        });

      }
            })
            .render("#paypal-buttons")
            .catch((error) => {
                console.error("failed to render the PayPal Buttons", error);
            });


    })
    .catch((error) => {
        console.error("failed to load the PayPal JS SDK script", error);
    });

},


    datePickerChanged() {
      if (this.date != undefined) {
        this.addReservation();
      }
    },





    getToDayDateFormat(value) {
      return moment(String(value)).format("DD/MM/YYYY hh:mm");
    },
    typeLogementForAnnonce() {
      let req = {
        id: this.annonce[0].type_logement_id,
      };

      axios.post("api/typeLogementForAnnonce", req).then((response) => {
        this.annonce[0].typeLogement = response.data.typeLogement[0].name;
      });

      console.log("type_logement_id;type_logement_id :   :  ", this.annonce);
    },
    getReservationByAnnonce() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      let req = {
        annonce_id: this.$route.query.id,
      };

      axios
        .post("/api/getReservationByAnnonce", req, config)
        .then((response) => {
          response.data.reservations.forEach((element) => {
            this.reservations.push(element);
            console.log("reservationsreservations", this.reservations);
            this.getDatesBetween(element.checkIn, element.checkOut);
          });

          this.loading = false;
        })
        .catch((err) => {});
    },

    addReservation() {
      //   data-bs-toggle="modal"
      //                       data-bs-target="#bookingModal"

      this.dateFormatAux = this.format(this.date);

      let datesAux = this.format(this.date);
      let dateRange = [];
      let x = new Date(this.reverseDate(datesAux[0]));
      let y = new Date(this.reverseDate(datesAux[1]));

      let currentDate = new Date(x.getFullYear(), x.getMonth(), x.getDate());

      while (currentDate <= y) {
        var currentDateAux = currentDate.getFullYear() + "/";
        if (currentDate.getMonth() + 1 < 10) {
          currentDateAux += "0" + (currentDate.getMonth() + 1) + "/";
        } else {
          currentDateAux += currentDate.getMonth() + 1 + "/";
        }

        if (currentDate.getDate() < 10) {
          currentDateAux += "0" + currentDate.getDate() + "";
        } else {
          currentDateAux += currentDate.getDate() + "";
        }

        dateRange.push(currentDateAux);

        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1
        );
      }

      this.dateFormatAux = this.format(this.date);
      this.nightsCount = dateRange.length - 1;
      this.disableDatesInReserversationCheck = false;
      this.disabledDates.forEach((element) => {
        for (let i = 0; i < dateRange.length; i++) {
          const el = dateRange[i];
          if (element == dateRange[i]) {
            this.disableDatesInReserversationCheck = true;
          }
        }
      });

      if (this.disableDatesInReserversationCheck) {
        Swal.fire({
          icon: "error",
          title: "Logement non disponible durant cette période",
          text: "Veuillez choisir une autre période",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonColor: "rgb(255, 0, 0)",
          confirmButtonText: "D'accord",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" },
        });
      } else {
        this.bookingDateAvailable = true;
      }

      if (this.inclusiveSupp && this.animauxSupp) {
        this.reservationSum = (
          this.nightsCount * this.annonce[0].price +
          this.nightsCount * this.annonce[0].price * 0.1 +
          this.nightsCount * this.annonce[0].price * 0.05
        ).toFixed(2);
      } else if (this.inclusiveSupp && !this.animauxSupp) {
        this.reservationSum = (
          this.nightsCount * this.annonce[0].price +
          this.nightsCount * this.annonce[0].price * 0.1
        ).toFixed(2);
      } else if (!this.inclusiveSupp && this.animauxSupp) {
        this.reservationSum = (
          this.nightsCount * this.annonce[0].price +
          this.nightsCount * this.annonce[0].price * 0.05
        ).toFixed(2);
      } else {
        this.reservationSum = (
          this.nightsCount * this.annonce[0].price
        ).toFixed(2);
      }
    },

    confirmReservation() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      let datesAux = this.format(this.date);

      let firstDate = this.reverseDate(datesAux[0]);
      let SecondDate = this.reverseDate(datesAux[1]);

      let reservation = {
        annonce_id: this.$route.query.id,
        user_id: this.user.id,
        checkIn: firstDate,
        checkOut: SecondDate,
        amount: this.reservationSum,
        paymentMethod: SecondDate,
        nightCount: this.nightsCount,
        bookState: "Confirmée",
      };

      axios
        .post("/api/addReservation", reservation, config)
        .then((response) => {
          if (response.data.status == "indisponible") {
            Swal.fire({
              icon: "error",
              title: "Logement non disponible durant cette période",
              text: "Veuillez choisir une autre période",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonColor: "rgb(255, 0, 0)",
              confirmButtonText: "D'accord",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            });
          } else {
            localStorage.setItem('reservationIdToShow' ,response.data.reservation.id )
            $("#bookingModal").hide();
            $("body").removeClass("modal-open");
            $("body").css({ overflow: "auto" });
            $(".modal-backdrop").remove();

             Swal.fire({
              position: "center",
              icon: "success",
              title: "Réservation validée",
              showConfirmButton: true,
              timer: 12500,
            });

            // localStorage.setItem("windowStep", 5);
            // this.$router.push({ path: "/dashboardClient" });
            this.$router.push({ path: "/successful-paypal-payment" });

          }
        });
    },

    getDatesBetween(x, y) {
      x = new Date(x);
      y = new Date(y);

      let currentDate = new Date(x.getFullYear(), x.getMonth(), x.getDate());

      while (currentDate <= y) {
        var currentDateAux = currentDate.getFullYear() + "/";

        if (currentDate.getMonth() + 1 < 10) {
          currentDateAux += "0" + (currentDate.getMonth() + 1) + "/";
        } else {
          currentDateAux += currentDate.getMonth() + 1 + "/";
        }

        if (currentDate.getDate() < 10) {
          currentDateAux += "0" + currentDate.getDate() + "";
        } else {
          currentDateAux += currentDate.getDate() + "";
        }

        this.disabledDates.push(currentDateAux);

        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1 // Will increase month if over range
        );
      }
    },

    reverseDate(chDate) {
      let x = "";

      for (let i = 6; i < chDate.length; i++) {
        x += chDate[i];
      }

      x += "/";

      for (let i = 3; i < 5; i++) {
        x += chDate[i];
      }

      x += "/";

      for (let i = 0; i < 2; i++) {
        x += chDate[i];
      }

      ////
      return x;
    },

    getIndisponibilities() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      let indisponibilitiesRequest = {
        annonce_id: this.$route.query.id,
      };

      let startDate = "";
      let endDate = "";

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
            startDate = "";
            endDate = "";

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

    getLikesForAnnonce() {
      this.likes = [];
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      let like = {
        user_id: localStorage.getItem("userId"),
        annonce_id: this.$route.query.id,
      };

      axios.post("api/getLikesForAnnonce", like, config).then((response) => {
        response.data.likes.forEach((element) => {
          this.likes.push(element);
          console.log("elemmmee : ", element.user_id);
          if (element.user_id == localStorage.getItem("userId")) {
            this.likeAnnoncePageAlreadyLiked = true;
          }
        });
      });
    },

    addLikeForAnnonce() {
      this.likeAnnoncePageAlreadyLiked = !this.likeAnnoncePageAlreadyLiked;

      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      let like = {
        user_id: localStorage.getItem("userId"),
        annonce_id: this.$route.query.id,
      };

      let likeOrDislike = "like";

      axios
        .post("api/addLikeForAnnonce", like, config)
        .then((response) => {
          if (response.data.status == "deleted") {
            likeOrDislike = "dislike";
          } else {
            likeOrDislike = "like";
          }
          this.sendNotifications(likeOrDislike);
          this.getLikesForAnnonce();
        })
        .catch((err) => {
          console.log("err :::: fffff :::  ", err);
        });
    },

    sendNotifications(likeOrDislike) {
      let notification = {
        from_id: localStorage.getItem("userId"),
      };

      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      if (likeOrDislike == "dislike") {
        notification.content = "A supprimé votre annonce de son favovis (Ref: #ATKHEB0000"+this.annonce[0].id+")";
        notification.type = "dislike";
      } else {
        notification.content = "A aimé votre  annonce (Ref: #ATKHEB0000"+this.annonce[0].id+")";
        notification.type = "like";
      }

      notification.user_id = this.annonce[0].user_id;
      notification.link = "/annonce/?id=" + this.annonce[0].id;
      axios.post("api/sendNotification", notification, config);
    },

    async sendMessage() {
      const { value: text } = await Swal.fire({
        text: "",
        input: "textarea",
        inputLabel:
          "Envoyer un message à " +
          this.owner.lastname +
          " " +
          this.owner.firstname,
        inputPlaceholder: "Ecrivez votre message ici...",
        inputAttributes: {
          "aria-label": "Ecrivez votre message ici...",
        },
        preConfirm: function (text) {
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              if (text === "") {
                reject("Aucun message saisi");
              } else {
                let config = {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                };

                let message = {
                  content: text,
                  sender_user_id: localStorage.getItem("userId"),
                  receiver_user_id: localStorage.getItem("ownerId"),

                  from_name:
                    localStorage.getItem("lastname") +
                    " " +
                    localStorage.getItem("firstname"),
                  to_name: localStorage.getItem("ownerFullName"),
                };

                axios
                  .post("api/sendMessage", message, config)
                  .then((result) => {
                    console.log(response);
                  })
                  .catch((err) => {});

                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Message envoyé",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            }, 1000);
          }).catch((err) => {
            alert(`error: ${err}`);
            return false;
          });
        },
        showCancelButton: true,
        confirmButtonColor: "#2591cc",
        cancelButtonColor: "#272a2c",
        cancelButtonText: "Fermer",

        confirmButtonText: "Envoyer",
        customClass: { popup: "swal2-border-radius" },
      });
    },
    slideTo(val) {
      this.currentSlide = val;
    },
    getAnnonces() {
      axios
        .get("api/getAnnonces")
        .then((response) => {
          response.data.annonces.forEach((element) => {
            this.annonces.push(element);
            this.imagesAnnoncesAux.push(element.images[0]);
          });

          this.annonces.forEach((element, key) => {
            if (element.id == this.annonce[0].id) {
              this.annonces.splice(key, 1);
            }
          });

          console.log(this.annonces.length);
          //   this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getAnnonce() {
      this.images = [];
      axios
        .post("api/getAnnonceById", this.annonceId)
        .then((response) => {
          this.annonce = response.data.userAnnonce;

          console.log("annonceannonce  : ", this.annonce);

          this.logementServices = this.annonce[0].servicesLogement;
          this.optionLogement = this.annonce[0].optionsLogement;

          console.log("hahahahaha :: " + JSON.parse(this.optionLogement));

          console.log("logementServices ::  " + typeof this.logementServices);

          this.annonce[0].images.forEach((element) => {
            console.log("image  : ", element.id);
            if (element.default == "true") {
              this.images.push(element);
              this.srcImagesArray.push(
                "storage/" + element.path + "/" + element.image
              );
            }
          });

          this.annonce[0].images.forEach((element) => {
            console.log("image  : ", element.id);
            if (element.default == "false") {
              this.images.push(element);
              this.srcImagesArray.push(
                "storage/" + element.path + "/" + element.image
              );
            }
          });

          this.images.forEach((element) => {
            console.log("image  : ", element);
          });

          this.reservationSum =
            this.nightsCount * parseFloat(this.annonce[0].price);

          this.owner.id = this.annonce[0].user_id;

          this.getUserProfile();
        })
        .catch((err) => {
          console.log("getAnnonceByUserIdError : ", err);
        });
    },

    getUserProfile() {
      this.user.id = localStorage.getItem("userId");
      this.user.token = localStorage.getItem("token");

      axios
        .post("api/getUserInfo", this.owner)
        .then((response) => {
          if (response.data.user.length > 0) {
            this.owner.email_verified_at =
              response.data.user[0].email_verified_at;
          }

          if (response.data.userInfo.length > 0) {
            this.owner.address = response.data.userInfo[0].address;
            this.owner.compAddress = response.data.userInfo[0].addressComp;
            this.owner.phoneNumber = response.data.userInfo[0].phone;
            this.owner.postalCode = response.data.userInfo[0].postalCode;
            this.owner.city = response.data.userInfo[0].city;
            this.owner.country = response.data.userInfo[0].country;
            this.owner.email = response.data.user[0].email;
            this.owner.id = response.data.user[0].id;

            this.owner.lastname = response.data.user[0].lastname;
            this.owner.firstname = response.data.user[0].firstname;
            localStorage.setItem("ownerId", response.data.user[0].id);
            localStorage.setItem(
              "ownerFullName",
              this.owner.lastname + " " + this.owner.firstname
            );

            this.getAvatarByUserId();
            this.typeLogementForAnnonce();
          }
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    },
    getAvatarByUserId() {
      axios
        .post("api/getAvatarByUserId", this.owner)
        .then((response) => {
          if (response.data.userAvatar.length > 0) {
            this.user.avatar = response.data.userAvatar;
          } else {
            this.user.avatar = "";
          }
        })
        .catch((err) => {});
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>


<style lang="scss">

.likeIconDiv{
  cursor: pointer;

.like__btn {
  padding: 10px 15px;
  background: #1a1a1b;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  border-radius: 5px;
  color: #e8efff;
  outline: none;
  border: none;
  cursor: pointer;
  i{
      margin-right:5px;
  }

  &:hover{
          background: #38383b;

  }
}

}


@import "@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss";

.notloggedinDivReservation {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  button {
    padding: 15px 0;
    color: white;
    background-color: black;
    border-radius: 30px;
    width: max-width;
    min-width: 238px;
    margin: 6px 0;
  }
}
.modalBooking {
  .modal .modal-dialog {
    max-width: 1015px;
  }
}

.modalDivBooking {






  .modal-body {
    padding: 0px;
  }

  .footer {
    background-color: white;
  }

  a {
    color: #0e7aea;
    text-decoration: none;
  }

  h6 {
    color: #9aa3ab;
    font-weight: 300;
    line-height: 15px;
  }

  h5 {
    color: #99a1aa;
    font-weight: 300;
  }

  h4 {
    font-weight: 300;
    font-size: 13px;
    color: #97a2ad;
  }

  h3 {
    color: #58636a;
    font-weight: 500;
  }

  padding: 0;
  margin: 0;

  .container {
    height: 100%;
    overflow-y: auto;
    width: 100%;
    margin: 0;
    border-radius: 0px;
    padding: 0;
    -webkit-box-shadow: 0px 5px 21px 0px rgba(128, 128, 128, 0.2);
    -moz-box-shadow: 0px 5px 21px 0px rgba(128, 128, 128, 0.2);
    box-shadow: 0px 5px 21px 0px rgba(128, 128, 128, 0.2);
  }

  .left {
    background-color: #1882ef;
    width: 100%;
    height: 80px;
    border-radius: 0px;
    color: #ffffff;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .info-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .receipt {
    font-weight: 300;
    font-size: 15px;
    line-height: 26px;
    padding-top: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #3895f4;
    height: 15%;
  }

  .receipt > span {
    font-weight: 500;
    font-size: 21px;
    padding: 0 10px;
  }

  #main {
      display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }

  #paypal-buttons{
          width: 67%;

  }

  .entry {
    height: 15%;
    overflow: hidden;
    padding-top: 15px;
  }

  .entry > p {
    font-weight: 300;
    font-size: 13px;
    line-height: 26px;
    margin-top: 0px !important;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .entry > i {
    margin-top: 4px;
    margin-right: 13px;
    float: left;
    color: #b4d8fc;
  }

  span {
    font-weight: 500;
    font-size: 16px;
  }

  .entry:last-child {
    border-bottom: none;
  }

  .right {
    background-color: #fefefe;
    width: 100%;
    height: 40%;
    float: left;
    border-radius: 0 5px 5px 0;

    // @media screen and (max-width:450px) {
    // width: 71vw;

    // }__number
  }

  .content {
    margin: 0;
  }

  .header {
    overflow: hidden;
    border-bottom: none;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(226, 226, 226);
  }

  .header > div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    cursor: pointer;
  }

  .header > div:hover {
    background-color: rgb(235, 235, 235);

    img {
      transform: scale(1.1);
    }
  }

  .headerBookingImgActive {
    background-color: rgb(243, 243, 243);

    img {
      transform: scale(1.1);
    }
  }

  .header > div > img {
    width: 50%;
    float: left;
    cursor: pointer;
  }

  .header > h4 {
    text-align: right;
    margin-top: 10px;
  }

  .message > p {
    font-weight: 300;
    font-size: 15px;
    color: #7a838d;
    line-height: 30px;
  }

  .message > h6 {
    margin-top: 10px;
  }

  .footer {
    overflow: hidden;
  }

  .footer > a {
    font-size: 13px;
    font-weight: 500;
    float: left;
  }

  .footer > h6 {
    color: #7a838d;
    text-align: right;
    margin-top: 0px !important;
  }
}

.divBottonBooking {
  display: flex;
  justify-content: center;

  button {
    padding: 10px 50px;
    color: white;
    background-color: rgb(34, 33, 33);
    border-radius: 7px;
  }
}

.footerInvoiceDiv {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  .footerInvoice {
    display: flex;
    justify-content: space-between;
    width: 150%;
    border-bottom: 1px solid black;
    padding: 9px;
    margin-bottom: 32px;
  }
}

.hrInvoice {
  background-color: rgb(0, 0, 0);
  height: 1px;
}
.optionCompDiv {
  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 12% auto;
  }

  margin-top: 40px;
  h3 {
    color: #888;
  }

  input[type="checkbox"] {
    display: block;
  }

  li {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 15px;

    input[type="checkbox"] {
      cursor: pointer;
    }

    label {
      cursor: pointer;

      margin-left: 20px;
      font-size: 20px;
      color: #888;
    }
  }
}

.modalBooking {
  @media (min-width: 576px) {
    .container,
    .container-sm {
      max-width: 840px;
    }
  }
  .modal-content {
    width: 75%;
    margin: 0 15%;
    border-radius: 9px;
    border: none;

    @media screen and (max-width: 450px) {
      margin: 0 5%;
      width: 90%;
    }
  }
}

.bookingDivBody {
  .contact-form-wrapper {
    padding: 10px 0;
  }

  .contact-form {
    padding: 30px 40px;
    background-color: #ffffff;
    border-radius: 12px;
    min-width: 400px;

    width: 40%;

    p {
      font-size: 21px;
    }
  }

  .contact-form textarea {
    resize: none;
  }

  .contact-form .form-input,
  .form-text-area {
    background-color: #f0f4f5;
    height: 50px;
    padding-left: 16px;
  }

  .contact-form .form-text-area {
    background-color: #f0f4f5;
    height: auto;
    padding-left: 16px;
  }

  .contact-form .form-control::placeholder {
    color: #aeb4b9;
    font-weight: 500;
    opacity: 1;
  }

  .contact-form .form-control:-ms-input-placeholder {
    color: #aeb4b9;
    font-weight: 500;
  }

  .contact-form .form-control::-ms-input-placeholder {
    color: #aeb4b9;
    font-weight: 500;
  }

  .contact-form .form-control:focus {
    box-shadow: inset 0 0px 0px rgb(0 0 0 / 1%), 0 0 3px #f8476c;
  }

  .contact-form .title {
    text-align: start;
    font-size: 36px;
    font-weight: lighter;
    color: black;
  }

  .contact-form .description {
    color: #aeb4b9;
    font-size: 14px;
    text-align: center;
  }

  .contact-form .submit-button-wrapper {
    text-align: center;
  }

  .contact-form .submit-button-wrapper input {
    border: none;
    border-radius: 4px;
    background-color: #f23292;
    color: white;
    text-transform: uppercase;
    padding: 10px 60px;
    font-weight: 500;
    letter-spacing: 2px;
  }

  .contact-form .submit-button-wrapper input:hover {
    background-color: #d30069;
  }

  input[type="number"] {
    -moz-appearance: button;
  }
}

.bookingDiv {
  .headerTitle {
    display: flex;
    justify-content: space-between;
    h6 {
      color: #47be47;
      font-weight: bold;
      font-size: 25px;
      cursor: pointer;
    }
    h5 {
      font-size: 32px;
      color: #f05e59;
    }
  }
}

.addressDiv {
  display: flex;
  flex-direction: column;
}

.servicesAndOptionsDiv {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.servicesAndOptionsDiv,
.detailsMobile {
  img {
    margin-right: 10px;
    max-height: 40px;
  }
  p {
    display: flex;
    padding: 0;
    margin: 20px 0;
  }
}

.locationDiv {
  // display: grid;
  // grid-template-columns: 50% 50%;
  display: flex;
  flex-direction: column;

  ul {
    margin-bottom: 30px;
    color: black;
    font-size: 131%;
    font-weight: bold;
    i {
      margin-right: 10px;
      font-size: 18px;
      color: #3d3e3f;
    }
  }
}
.containerTabs {
  width: 100%;
  margin: 40px auto;
  font-family: "Merriweather", serif;
  font-size: 0.9em;
  color: #888;
  min-width: 75vw;
}

.tabs {
  overflow: hidden;
  margin-left: 0px;
  margin-bottom: -2px; // hide bottom border
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border-right: none;
  font-weight: bold;
  width: 20%;
  text-align: center;
  font-size: 17px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background: linear-gradient(to right, #ebebeb7f, #ebebeb7f);

  i {
    margin-right: 10px;
    font-size: 18px;
    color: black;
  }
}

.tabsDivMobile {
  display: none;
}

@media screen and (max-width: 1030px) {
  .servicesAndOptionsDiv {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .tabsDiv {
    display: none;
  }
  .tabsDivMobile {
    display: flex;
    flex-direction: column;

    img {
      width: 30px;
      height: 30px;
    }

    .desc {
      p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: start;
        min-width: 80vw;
      }
    }
  }
}

.tabs a:last-child {
  border-right: 1px solid #f7edef;
}

.tabs a:first-child {
  border-left: 1px solid #f7edef;
}

.tabs a:hover {
  background: linear-gradient(to right, #c0c0c07f, #cacaca7f);
  color: rgb(0, 0, 0);
}

.tabs a.active {
  background: linear-gradient(to right, #c0c0c07f, #cacaca7f);
  color: #484848;
  cursor: default;
}

.tabcontent {
  padding: 30px;
  border: 1px solid #f7edef;
  box-shadow: 3px 3px 6px #f7edef;
  background-color: #ffffff;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
  text-align: start;
  max-height: 800px;
overflow-y: auto;
}

.tabcontentAux {
  border: none;
  box-shadow: none;
}

.containerAnnonce {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  text-align: left;
  justify-content: center;
  .temp {
    padding: 0px;
    width: 100%;
  }
}

.priceOneAnnonce {
  h4 {
    margin: 30px 0;
    text-align: left;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 1px;
    color: #292828;
    max-width: 445px;
  }
}

.annonceTitle {
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  letter-spacing: 1px;
}

.secondDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
  i {
    font-size: 30px;
    color: #ffd152;
  }
}
.carouselImages {
  padding: 0px;

  width: 100%;
  height: 407px;
  border-radius: 0px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.541);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
}

.scrollImagesPreview {
  height: 10vw;

  padding: 10px;
  padding-left: 0px;
  width: 240px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
}

.carouselHideArrows {
  .carousel__prev--in-active,
  .carousel__next--in-active {
    display: none;
  }
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background: linear-gradient(to right, #0f87ca, #2591cc);
}

.annonceInfo {
  padding: 0;
  height: 59%;
  width: 100%;
}

.bigOneImage {
  height: 35vw;
  cursor: pointer;
  border-radius: 0px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  &:hover {
    opacity: 0.8;
  }
  margin: 0;
}
.notFoundDiv {
  min-height: 100vh;

  .mainbox {
    background-color: white;
    margin: auto;
    height: 600px;
    width: 600px;
    position: relative;
  }

  .err {
    color: black;
    font-family: "Merriweather", serif;
    font-size: 11rem;
    position: absolute;
    left: 20%;
    top: 8%;
  }

  .far {
    position: absolute;
    font-size: 8.5rem;
    left: 42%;
    top: 15%;
    color: black;
  }

  .err2 {
    color: black;
    font-family: "Merriweather", serif;
    font-size: 11rem;
    position: absolute;
    left: 68%;
    top: 8%;
  }

  .msg {
    text-align: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.6rem;
    position: absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }
}

@media screen and (max-width: 681px) {
  .servicesAndOptionsDiv {
    display: flex;
    flex-direction: column;
  }

  .servicesAndOptionsDiv {
    display: grid;
    grid-template-columns: 100%;
  }
}

.randomAnnonces {
    .carousel__track {
        display: flex;
        justify-content: center;
    }
  margin-bottom: 50px;

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: nonex;
    background: linear-gradient(to right, #0f87ca, #2591cc);
    color: white;
    border-radius: 40px;
  }
  width: 100%;

  h1 {
    padding: 0;
  }
}

.carousel__slide {
  align-items: flex-start;
  justify-content: flex-start;
}
.randomAnnonces {
  position: relative;

  .carousel__slide {
    align-items: flex-start;
    justify-content: center;
  }
}

.containerAnnonceFirst {
  padding: 22px 17%;
  background-color: #f8f8f8;
  font-family: "Merriweather", serif;
}

.imagesPrev {
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;
}

.locationDiv {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.carouselItemRandomAnnonce {
  --clr-gray-light: #d7dfe2;
  --clr-gray-med: #616b74;
  --clr-gray-dark: #414b56;
  --clr-link: #296175;
  --clr-popular: #d0a8af;
  --clr-technology: #651fff;
  --clr-psychology: #e85808;

  .carouselItemRandomAnnonceWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .carouselItemRandomAnnonceCard {
    overflow: hidden;
    box-shadow: 0px 2px 20px var(--clr-gray-light);
    background: white;
    border-radius: 0.5rem;
    position: relative;
    width: 25vw;
    min-width: 300px;
    margin: 1rem;
    transition: 250ms all ease-in-out;
    cursor: pointer;
    height: 505px;
  }

  .carouselItemRandomAnnonceCard:hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 40px var(--clr-gray-light);
  }

  .carouselItemRandomAnnonceCardBannerImg {
    position: absolute;
    object-fit: cover;
    height: 14rem;
    width: 100%;
    top: 0;
    left: 0;
  }

  .category-tag {
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
    background: red;
    padding: 0.5rem 1.3rem 0.5rem 1rem;
    text-transform: uppercase;
    position: absolute;
    z-index: 1;
    top: 1rem;
    border-radius: 0 2rem 2rem 0;
  }

  .categoryRandomType {
    background: linear-gradient(to right, #0f89ca, #2592cc);
    display: flex;
    color: white;
    font-weight: bold;
    font-size: 100%;
  }

  .carouselItemRandomAnnonceCardBody {
    margin: 15rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
  }

  .blog-hashtag {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--clr-link);
  }

  .blog-title {
    line-height: 1.5rem;
    margin: 1rem 0 0.5rem;
  }

  .blog-description {
    color: var(--clr-gray-med);
    font-size: 0.9rem;
  }

  .card-profile {
    display: flex;
    margin-top: 25%;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
  }

  .profile-img {
    width: 90px;
    height: 90px;
    object-fit: fill;
    border-radius: 50%;
    display: none;
  }

  .card-profile-info {
    margin-left: 1rem;
  }

  .profile-name {
    font-size: 1rem;
  }

  .profile-followers {
    color: var(--clr-gray-med);
    font-size: 0.9rem;
  }
}

.containerAnnonceFirst {
  .carousel {
    position: relative;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    padding-right: 10px;
  }
}

#thumbnails {
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    background: linear-gradient(to right, #0f87ca, #2591cc);
    width: var(--vc-nav-width);
    height: var(--vc-nav-height);
    text-align: center;
    font-size: var(--vc-nav-height);
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 0;
    cursor: pointer;
    margin: 0 -45px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 30px;
    color: white;
    &:hover {
      color: white;
    }
  }
}

@media screen and (max-width: 990px) {
  .bigOneImage {
    height: 50vw;
  }
  #thumbnails {
    .carousel__prev,
    .carousel__next {
      display: none;
    }
  }

  .containerAnnonceFirst {
    padding: 22px 7%;
  }

  .imagesPrev {
    .carousel__track {
      display: flex;
      margin: 0;
      padding: 0;
      position: relative;
    }
  }
}

.commentsWrapper {
  @import url("https://fonts.googleapis.com/css?family=Noto+Serif:400,700");

  .comment-container {
    width: 65%;
    margin: 1rem auto;
  }

  a {
    color: #c40030;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  .v-btn {
    align-items: center;
    border-radius: 2px;
    display: inline-flex;
    height: 36px;
    flex: 0 0 auto;
    font-size: 14px;
    font-weight: 700;
    justify-content: center;
    margin: 6px 8px;
    min-width: 88px;
    outline: 0;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
    position: relative;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 16px;
  }

  .v-btn:before {
    border-radius: inherit;
    color: inherit;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    opacity: 0.12;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
  }

  .v-btn:focus,
  .v-btn:hover {
    position: relative;
  }

  .v-btn:focus:before,
  .v-btn:hover:before {
    background-color: currentColor;
  }

  .v-btn__content {
    align-items: center;
    border-radius: inherit;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    white-space: nowrap;
    width: inherit;
  }

  .v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
    will-change: box-shadow;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .v-btn:not(.v-btn--depressed):not(.v-btn--flat):active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .avatar {
    width: 50px;
    height: 50px;
    margin-left: -42px;
    border-radius: 50%;
  }

  .v-avatar {
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    position: relative;
    text-align: center;
    vertical-align: middle;
  }

  .v-avatar img {
    border-radius: 50%;
    display: inline-flex;
    height: inherit;
    width: inherit;
    object-fit: cover;
  }

  .v-card {
    text-decoration: none;
  }

  .v-card > :first-child:not(.v-btn):not(.v-chip) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  .v-card > :last-child:not(.v-btn):not(.v-chip) {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  .v-sheet {
    display: block;
    border-radius: 2px;
    position: relative;
  }

  .v-dialog__container {
    display: inline-block;
    vertical-align: middle;
  }

  .elevation-2 {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  }

  *,
  :after,
  :before {
    box-sizing: inherit;
  }

  :after,
  :before {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  * {
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  button {
    font: inherit;
    overflow: visible;
    text-transform: none;
    background-color: transparent;
    border-style: none;
    color: inherit;
  }

  [type="button"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: 0;
    padding: 0;
  }

  [type="button"]::-moz-focus-inner,
  button:-moz-focusring {
    outline: 0;
    border: 0;
  }

  button,
  html [type="button"] {
    -webkit-appearance: button;
  }

  img {
    border-style: none;
  }

  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }

  .headline {
    font-weight: 400;
    letter-spacing: normal !important;
    font-size: 24px !important;
    line-height: 32px !important;
  }

  .title {
    font-size: 20px !important;
    font-weight: 700;
    line-height: 1 !important;
    letter-spacing: 0.02em !important;
  }

  .caption {
    font-weight: 400;
    font-size: 12px !important;
  }

  .theme--light.v-btn {
    color: rgba(0, 0, 0, 0.87);
  }

  .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #f5f5f5;
  }

  .theme--light .v-card {
    box-shadow: rgba(0, 0, 0, 0.11) 0 15px 30px 0px,
      rgba(0, 0, 0, 0.08) 0 5px 15px 0 !important;
  }

  .theme--light.application .v-card {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
      0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;
    color: #102c3c !important;
  }

  .theme--light.v-card,
  .theme--light.v-sheet {
    background-color: #fff;
    border-color: #fff;
    color: rgba(0, 0, 0, 0.87);
  }

  a,
  a:hover {
    text-decoration: none !important;
  }

  .wrapper {
    overflow: auto;
  }

  .answers {
    padding-left: 64px;
  }

  .comment {
    overflow-y: auto;
    margin-left: 32px;
    margin-right: 16px;
  }

  .comment p {
    font-size: 14px;
    margin-bottom: 7px;
  }

  .displayName {
    margin-left: 24px;
  }

  .actions {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
  }

  .google-span[data-v-35838f51] {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
  }

  .google-button[data-v-35838f51] {
    background-color: #fff;
    height: 40px;
    margin: 0;
  }

  .headline {
    margin-left: 32px;
  }

  .sign-in-wrapper {
    margin-top: 16px;
    margin-left: 32px;
  }

  .error-message {
    font-style: oblique;
    color: #c40030;
  }

  ::-moz-selection,
  ::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
  }

  .card,
  .card {
    padding: 32px 16px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
  }

  .application a,
  [type="button"],
  button {
    cursor: pointer;
  }

  @media screen and (max-width: 640px) {
    .comment-container {
      width: 90%;
    }
    .comments {
      padding: 32px;
    }
  }
}

.ownerProfile {
  img {
    max-width: 100%;
    display: block;
  }
  ul {
    list-style: none;
  }

  /* Utilities */

  .card img {
    border-radius: 50%;
  }

  .card,
  .stats {
    display: flex;
  }

  .card {
    padding: 2.5rem 2rem;
border-radius: 10px;
background-color: rgba(255, 255, 255, 0.5);
box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
transform-style: preserve-3d;
overflow: hidden;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: navajowhite;
    @media screen and (max-width: 1000px) {
      width: 84vw;
    }
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }


  .card img {
    width: 160px;
    min-width: auto;
  }

  .infos {
    margin-left: 1.5rem;
  }

  .name {
    margin-bottom: 1rem;
  }
  .name h1 {
    font-size: 1.3rem;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
    text-align: start;
  }
  .name h2 {
    font-size: 0.8rem;
    color: #333;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
    text-align: start;
  }

  .text {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .stats {
    margin: 2rem 0;
  }
  .stats li {
    min-width: 5rem;
  }
  .stats li h3 {
    font-size: 0.99rem;
  }
  .stats li h4 {
    font-size: 0.75rem;
  }

  .linksAux {
    display: flex;
    justify-content: space-between;
    a {
      margin: 0 30px;
    }
  }

  .links button {
    font-family: "Poppins", sans-serif;
    min-width: 120px;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s linear;
  }
  .links .follow {
    background-color: #1a6790;
    color: #fff;
    &:hover {
      background-color: #1a6790;
    }
  }
  .links .view,
  .links .view:hover {
    background-color: transparent;
    color: #222;
  }

  @media screen and (max-width: 450px) {
    .card {
      display: block;
    }
    .infos {
      margin-left: 0;
      margin-top: 1.5rem;
    }
    .links button {
      max-width: 100px;
      margin-bottom: 15px;
    }
    .links {
      margin-top: 15px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

#sendMessageModal {
  h3 {
    margin-left: 55px;
    color: rgb(208, 168, 175);
    margin: 50px;
    margin-bottom: 10px;
  }

  .modal-body {
    padding: 0;
  }

  .modal-content {
    background-color: #19181b;
  }

  .modal-footer {
    background-color: #19181b;

    .cancelSendMessageBtn {
      padding: 10px 30px;
      border-radius: 54px;
      color: rgb(0, 0, 0);
      background-color: rgb(187, 187, 187);
      font-weight: bold;
    }

    .sendMessageBtn {
      padding: 10px 30px;
      border-radius: 54px;

      color: rgb(0, 0, 0);
      background-color: #d0a8af;
      font-weight: bold;
    }
  }

  textarea {
    margin: 6px 0;
    margin-bottom: 6px;
    margin-left: 0px;
    margin-left: 50px;
    width: 80%;
    height: 100px;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background: none repeat scroll 0 0 rgb(187, 187, 187);
    border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
    border-image: none;
    border-radius: 6px 6px 6px 6px;
    border-style: none solid solid none;
    border-width: medium 1px 1px medium;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
    color: #555555;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;
    margin-bottom: 50px;
  }

  textarea:focus {
    background: none repeat scroll 0 0 #ffffff;
    outline-width: 0;
  }
}

.likeAnnoncePage {
  font-size: 60px;
  color: rgb(226, 226, 226);
  cursor: pointer;
}

.likeAnnoncePage:hover {
  font-size: 60px;
  color: rgb(231, 64, 64);
  cursor: pointer;
}

.likeAnnoncePageAlreadyLiked {
  font-size: 60px;
  color: rgb(231, 64, 64);
  cursor: pointer;
}

.likeAnnoncePageAlreadyLiked:hover {
  font-size: 60px;
  color: rgb(246, 135, 135);
  cursor: pointer;
}
</style>
