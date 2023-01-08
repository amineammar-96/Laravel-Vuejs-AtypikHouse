<template>
  <div class="containerFormAnnonce">
    <div class="title">Modifier</div>
    <div class="content">
      <form @submit.prevent="submitUpdateAnnonceForm()" >
        <div class="user-details">
          <div class="input-box">
            <span
              class="details"
              :class="hasError('title') ? 'text-danger' : ''"
              >Titre <span v-if="hasError('title')">*</span>
            </span>
            <input
              type="text"
              v-model="annonce.title"
              placeholder="Titre de l'annonce"
              required
            />
          </div>
        </div>




        <div class="house-details">
          <div style="width: 100%" class="input-box">
            <span
              class="details"
              :class="hasError('address') ? 'text-danger' : ''"
              >Adresse <span v-if="hasError('address')">*</span></span
            >
            <input
              type="text"
              v-model="annonce.address"
              placeholder="Adresse"
              required
            />
          </div>
          <div style="width: 100%" class="input-box">
            <span class="details">Complément d'adresse </span>
            <input
              type="text"
              v-model="annonce.compAddress"
              placeholder="Complément d'adresse"

            />
          </div>
          <div class="input-box">
            <span class="details" :class="hasError('city') ? 'text-danger' : ''"
              >Ville <span v-if="hasError('city')">*</span></span
            >
            <input
              type="text"
              v-model="annonce.city"
              placeholder="Ville"
              required
            />
          </div>
          <div class="input-box">
            <span
              class="details"
              :class="hasError('postalCode') ? 'text-danger' : ''"
              >Code postal <span v-if="hasError('postalCode')">*</span></span
            >
            <input
              type="text"
              v-model="annonce.postalCode"
              placeholder="Code postal"
              required
              @keypress="isNumber($event)"
            />
          </div>
          <div class="input-box">
            <span class="details">Pays</span>
            <!-- <input type="text" v-model="annonce.country" placeholder="Pays" required /> -->
            <select v-model="annonce.country" style="background-color: white">
              <option value="Belgique">Belgique</option>
              <option value="Bulgarie">Bulgarie</option>
              <option value="Croatie">Croatie</option>
              <option value="République tchèque">République tchèque</option>
              <option value="Danemark">Danemark</option>
              <option value="Estonie">Estonie</option>
              <option value="Finlande">Finlande</option>
              <option value="France" selected>France</option>
              <option value="Allemagne">Allemagne</option>
              <option value="Grèce">Grèce</option>
              <option value="Hongrie">Hongrie</option>
              <option value="Islande">Islande</option>
              <option value="Italie">Italie</option>
              <option value="Latvia">Latvia</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Monaco">Monaco</option>
              <option value="Pays-Bas">Pays-Bas</option>
              <option value="Nouvelle-Zélande">Nouvelle-Zélande</option>
              <option value="Pologne">Pologne</option>
              <option value="Portugal">Portugal</option>
              <option value="Roumanie">Roumanie</option>
              <option value="Slovaquie">Slovaquie</option>
              <option value="Slovénie">Slovénie</option>
              <option value="Espagne">Espagne</option>
              <option value="Suède">Suède</option>
              <option value="Suisse">Suisse</option>
              <option value="Royaume-Uni">Royaume-Uni</option>
            </select>
          </div>
        </div>

        <div class="title2">Description</div>

        <div class="house-details">
          <div class="input-box">
            <span
              class="details"
              :class="hasError('surface') ? 'text-danger' : ''"
              >Superficie en m² <span v-if="hasError('surface')">*</span></span
            >

            <input
              min="1"
              type="number"
              v-model="annonce.surface"
              placeholder="Superficie en m²"
              required
              @keypress="isNumber($event)"
              style="text-align: center;padding: 0;"
            />
          </div>
          <div class="input-box">
            <span
              class="details"
              :class="hasError('numberOfBeds') ? 'text-danger' : ''"
              >Nombre de couchages
              <span v-if="hasError('numberOfBeds')">*</span></span
            >
            <input
              style="text-align: center;padding: 0;"
              type="number"
              min="1"
              @keypress="isNumber($event)"
              v-model="annonce.numberOfBeds"
              placeholder="Nombre de couchages"
              required
            />
          </div>
          <div class="input-box">
            <span
              class="details"
              :class="hasError('capacity') ? 'text-danger' : ''"
              >Capacité d'accueillement
              <span v-if="hasError('capacity')">*</span></span
            >
            <input
              style="text-align: center;padding: 0;"
              @keypress="isNumber($event)"
              type="number"
              min="1"
              v-model="annonce.capacity"
              placeholder="Capacité d'accueillement"
              required
            />
          </div>

           <div class="input-box">
            <span
              class="details"
              :class="hasError('price') ? 'text-danger' : ''"
              >Tarif d'une nuit en €
              <span v-if="hasError('price')">*</span></span
            >
            <input
              style="text-align: center;padding: 0;"
              @keypress="onlyForCurrency($event)"
              type="text"
              min="1"
              v-model="annonce.price"
              placeholder="Tarif d'une nuit en €"
              required
            />
          </div>


          <div  v-for="(suppProprety,key) in suppPropreties" :key="key" v-show="suppPropreties.length>0 " class="input-box">
<span
              class="details"

              >
              {{ suppProprety.name }}
              </span
            >

            <input
            v-if="annonce.suppPropretiesAnnonce.includes(suppProprety.name)"
              ref="name"
              style="text-align: center;padding: 0;"
              @keypress="onlyForCurrency($event)"
              type="text"
              min="1"
              v-model="annonce.suppPropretiesAnnonce[key].suppPropretiesAnnonce"
              :placeholder="suppProprety.name"
              :required="suppProprety.required == 'Oui'"
            />

  <input
            v-else
              style="text-align: center;padding: 0;"
              @keypress="onlyForCurrency($event)"
              type="text"
              min="1"
              v-model="annonce.suppPropretiesAnnonce[key]"
              :placeholder="suppProprety.name"
              :required="suppProprety.required == 'Oui'"
            />


          </div>





          <div class="textarea-box">
            <span
              class="details"
              :class="hasError('description') ? 'text-danger' : ''"
              >Description générale
              <span v-if="hasError('description')">*</span></span
            >
            <textarea
              type="text"
              v-model="annonce.description"
              placeholder="..."
              required
            />
          </div>
        </div>

<div class="gender-details">

 <div style="
    display: flex;
    flex-direction: column;
    width: 100%;
">
                        <label style="
    padding: 0 35px;
    font-size: 20px;
    font-weight: bold;
">Differents services</label>
                    <div id="tasks">


                      <div
                        v-show="servicesLogementArray.length > 0"
                        v-for="(service, key) in servicesLogementArray"
                        :key="key"
                        class="task "

                        :class="service.checked ? 'taskChecked' : '' "
                        @click="servicesManagementClick(service )"
                      >

                      <div v-if="service.checked" class="check icon"></div>
                        <span class="task-name">
                          {{ service.name }}
                        </span>

                      </div>

                        <div class="task" v-if="!annonce.servicesLogement.length>0">
                        <span class="task-name"> Aucun service </span>
                      </div>


                    </div>
                  </div>



        </div>

        <div class="gender-details">

 <div style="
    display: flex;
    flex-direction: column;
    width: 100%;
">
                        <label style="
    padding: 0 35px;
    font-size: 20px;
    font-weight: bold;
">Differentes options</label>
                    <div id="tasks">


                      <div
                        v-show="optionsLogementArray.length > 0"
                        v-for="(option, key) in optionsLogementArray"
                        :key="key"
                        class="task"
                            :class="option.checked ? 'taskChecked' : '' "
                        @click="optionManagementClick(option)"

                      >
                                            <div v-if="option.checked" class="check icon"></div>

                        <span class="task-name">
                          {{ option.name }}
                        </span>

                      </div>

                       <div class="task" v-if="!annonce.optionsLogement.length>0">
                        <span class="task-name"> Aucune option </span>
                      </div>

                    </div>
                  </div>



        </div>




        <div class="title2" :class="hasError('animaux') ? 'text-danger' : ''">
          Animaux autorisés ? <span v-if="hasError('animaux')">*</span>
        </div>

        <div class="gender-details">
          <input
            type="radio"
            name="animauxAutorisation"
            v-model="annonce.animaux"
            value="oui"
            id="radioAnimaux1"
          />
          <input
            type="radio"
            name="animauxAutorisation"
            v-model="annonce.animaux"
            value="non"
            id="radioAnimaux2"
          />

          <div class="category">
            <label style="
    margin-right: 20px;
" for="radioAnimaux1">
              <span class="dot oneAnimaux"></span>
              <span class="gender">Oui</span>
            </label>
            <label for="radioAnimaux2">
              <span class="dot twoAnimaux"></span>
              <span class="gender">Non</span>
            </label>
          </div>
        </div>

        <div class="title2">Informations supplémentaires</div>

        <div class="house-details">
          <div class="textarea-box">
            <!-- <span class="details">Description générale</span> -->
            <textarea
              type="text"
              placeholder="..."
              v-model="annonce.informationsSupp"
              required
            />
          </div>

          <div class="textarea-box">
                          <span class="details">Images</span>

            <div class="containerImages" v-if="annonce.imagesUrls.length > 0">
              <div
                @click="deleteImage(key , images[key])"
                v-for="(url, key) in annonce.imagesUrls"
                :key="key"

              >
                <img class="annonceImages" :src="url" alt="" />
              </div>
            </div>
          </div>


          <div class="textarea-box">
            <span class="details">Ajouter des images</span>
            <input
              multiple
              type="file"
              class="form-control imagesInput"
              accept="image/*"
              @change="onFilesChange"
            />
            <!-- <div v-if="annonce.urls" class="gridImagesPreview mb-3">
              <img v-for="url in annonce.urls" :key="url" :src="url" alt="" />
            </div> -->

            <div class="containerImages" v-if="annonce.urls">
              <div
                v-for="(url, key) in annonce.urls"
                :key="key"

              >
                <img class="annonceImages" :src="url" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="annonceErrorsCheck" class="text-danger fw-bold px-0">
          Veuillez vérifier les informations saisies
        </div>

        <div class="button">
          <button type="submit">Modifier</button>
        </div>
      </form>
    </div>





  </div>
</template>


<style lang="css">
.containerImages {
  margin: 30px 0px;
  width: 97%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  background: rgb(246, 246, 246);
  padding: 15px;



}
.containerImages .annonceImages {
  width: 100%;
  display: block;
  opacity: 1;
  /* -webkit-filter: grayscale(1); */
  /* filter: grayscale(1); */
  transition: all 100ms ease-out;
  max-width: 500px;
  height: 300px;
}
.containerImages .annonceImages:hover {
  cursor: pointer;
  opacity: 0.5;
  transform: scale(1.02);
  /* -webkit-filter: grayscale(0); */
  /* filter: grayscale(0); */
}


.containerFormAnnonce {
  max-width: 100%;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
.containerFormAnnonce .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

.containerFormAnnonce .title2 {
  font-size: 22px;
  font-weight: 400;
  position: relative;
  margin: 30px 0px;
}
.containerFormAnnonce .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #3498DB);
}
.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 20px 0 12px 0;
}

.content form .house-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 20px 0 12px 0;
}

form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}

form .house-details .input-box {
  margin-bottom: 15px;
  width: 33.33%;
}

form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.house-details .input-box input {
  height: 45px;
  width: 90%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}


.gender-details input,
.input-box select {
  height: 45px;
  width: 90%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}


.input-box select {
  border-color: #ccc;
  cursor: pointer;
}
.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}
form .category {
  display: flex;
  width: 100%;
  margin: 14px 0;
  justify-content: flex-start;
}
form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-0:checked ~ .category label .label0,
#dot-1:checked ~ .category label .label1,
#dot-2:checked ~ .category label .label2,
#dot-3:checked ~ .category label .label3,
#dot-4:checked ~ .category label .label4,
#dot-5:checked ~ .category label .label5,
#dot-6:checked ~ .category label .label6,
#dot-7:checked ~ .category label .label7,
#dot-8:checked ~ .category label .label8,
#dot-9:checked ~ .category label .label9,
#dot-10:checked ~ .category label .label10,
#dot-11:checked ~ .category label .label11,
#dot-12:checked ~ .category label .label12 {
  background: #3498DB;
  border-color: #d9d9d9;
}

#radio1:checked ~ .category label .service1,
#radio2:checked ~ .category label .service2,
#radio3:checked ~ .category label .service3,
#radio4:checked ~ .category label .service4,
#radio5:checked ~ .category label .service5,
#radio6:checked ~ .category label .service6,
#radio7:checked ~ .category label .service7,
#radio8:checked ~ .category label .service8,
#radio9:checked ~ .category label .service9,
#radio10:checked ~ .category label .service10,
#radio11:checked ~ .category label .service11,
#radio12:checked ~ .category label .service12,
#radio13:checked ~ .category label .service13,
#radio14:checked ~ .category label .service14 {
  background: #3498DB;
  border-color: #d9d9d9;
}

#radioOption1:checked ~ .category label .option1,
#radioOption2:checked ~ .category label .option2,
#radioOption3:checked ~ .category label .option3,
#radioOption4:checked ~ .category label .option4,
#radioOption5:checked ~ .category label .option5,
#radioOption6:checked ~ .category label .option6,
#radioOption7:checked ~ .category label .option7,
#radioOption8:checked ~ .category label .option8,
#radioOption9:checked ~ .category label .option9,
#radioOption10:checked ~ .category label .option10,
#radioOption11:checked ~ .category label .option11,
#radioOption12:checked ~ .category label .option12,
#radioOption13:checked ~ .category label .option13,
#radioOption14:checked ~ .category label .option14  {
  background: #3498DB;
  border-color: #d9d9d9;
}


#modalDynamicServices0:checked ~ .category label .labeldynamicservices0,
#modalDynamicServices1:checked ~ .category label .labeldynamicservices1,
#modalDynamicServices2:checked ~ .category label .labeldynamicservices2,
#modalDynamicServices3:checked ~ .category label .labeldynamicservices3,
#modalDynamicServices4:checked ~ .category label .labeldynamicservices4,
#modalDynamicServices5:checked ~ .category label .labeldynamicservices5,
#modalDynamicServices6:checked ~ .category label .labeldynamicservices6,
#modalDynamicServices7:checked ~ .category label .labeldynamicservices7,
#modalDynamicServices8:checked ~ .category label .labeldynamicservices8,
#modalDynamicServices9:checked ~ .category label .labeldynamicservices9,
#modalDynamicServices10:checked ~ .category label .labeldynamicservices10,
#modalDynamicServices11:checked ~ .category label .labeldynamicservices11,
#modalDynamicServices12:checked ~ .category label .labeldynamicservices12,
#modalDynamicServices13:checked ~ .category label .labeldynamicservices13,
#modalDynamicServices14:checked ~ .category label .labeldynamicservices14,
#modalDynamicServices15:checked ~ .category label .labeldynamicservices15   {
  background: #3498DB;
  border-color: #d9d9d9;
}

#radioAnimaux1:checked ~ .category label .oneAnimaux,
#radioAnimaux2:checked ~ .category label .twoAnimaux {
  background: #3498DB;
  border-color: #d9d9d9;
}

form input[type="radio"] {
  display: none;
}
form .button {
  height: 45px;
  margin: 35px 0;
  display: flex;
  justify-content: center;
}

form .button input {
  height: 100%;
  width: 20%;
  border-radius: 55px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #228DE5, #1B8BE6)
}

form .button input:hover {
  transform: scale(0.99);
  background: linear-gradient(135deg, #3a98e6, #3696e6)
}

.imagesInput {
  width: 97%;
}
@media (max-width: 1000px) {
  .containerFormAnnonce {
    max-width: 100%;
  }
  form .user-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }

  form .house-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }
  form .category {
    width: 100%;
  }
  .content form .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar {
    width: 5px;
  }
  .house-details::-webkit-scrollbar {
    width: 5px;
  }
}
@media (max-width: 1000px) {
  .containerFormAnnonce .content .category {
    flex-direction: column;
  }
  .autreInput {
    max-width: 33.33%;
  }
}

input[type="checkbox"] {
  /* opacity: 0; */
  display: none;
}

.house-details .textarea-box textarea {
  height: 100px;
  width: 97%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.house-details .textarea-box textarea:focus,
.house-details .textarea-box textarea:valid {
  border-color: #3498DB;
}

form .house-details .textarea-box {
  margin-bottom: 15px;
  width: 100%;
}

form .textarea-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.textarea-box textarea {
  width: 100%;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.taskChecked{
    background-color: rgb(245, 240, 239);
    color: rgb(0, 0, 0);
}

.check.icon {
  right: 28px;
    color: #000;
    position: absolute;
    margin-left: 3px;
    margin-top: 4px;
    width: 15px;
    height: 9px;
    border-bottom: solid 2px currentColor;
    border-left: solid 2px currentColor;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.prepNewPropretyCheckTrueSweetAlert{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: start;
}
</style>



<script>
import Swal from "sweetalert2";
import axios from "axios";
import $ from "jquery";

export default {
  data() {
    return {
      typeLogementAutre: "",

      annonce: {
        annonce_id:"",
        title: "",
        typeLogement: "",
        address: "",
        compAddress: "",
        city: "",
        postalCode: "",
        country: "France",
        surface: "",
        numberOfBeds: "",
        capacity: "",
        description: "",
        optionsLogement: [],
        servicesLogement: [],
        animaux: "",
        informationsSupp: "",
        suppPropretiesAnnonce:[],

        images: [],
        form: new FormData(),
        urls: [],
        imagesUrls: [],

        user_id: "",
        price:"",
      },

      annonceErrors: {
        title: "",
        typeLogement: "",
        address: "",
        city: "",
        postalCode: "",
        country: "France",
        surface: "",
        numberOfBeds: "",
        capacity: "",
        description: "",
        animaux: "",
        user_id: "",
        price:"",

      },

      token: "",
      annonceErrorsCheck: false,

      notification:{},

      adminsAndModerateurUsers:[],

      user:{
          role : '',
      },

      notification:{},
      managementAnnonceStep:1,






      typesLogement:[],
      suppPropreties:[],



      optionsLogementArray:[],

      servicesLogementArray:[],
servicesLogementArrayAux:[],
serviceLogementAux:[],




imagesArrayToDelete:[],









    };
  },

  mounted() {
    this.annonce.user_id = localStorage.getItem("userId");
    this.token = localStorage.getItem("token");
    this.user.role = localStorage.getItem("userRole");

    console.log(this.annonce.user_id);
    if (localStorage.getItem("token") != "" && localStorage.getItem("profileInfoUpdatedAlready")=="false" ) {
        this.$router.push({ path: "/profileAdmin" });
    }
        this.getTypeLogement();

    this.getAnnonce();


//     this.getPropretiesByTypeLogement(this.$route.query.annonce_id);
//            this.getServicesByTypeLogement(this.$route.query.annonce_id);
//            this.getOptionsByTypeLogement(this.$route.query.annonce_id);
  },

  methods: {
checkSelectedService(){
var found=false;
    this.servicesLogementArray.forEach(elementAux => {
        found=false;
 this.annonce.servicesLogement.forEach((element,key) => {
      if(element==elementAux.name){
                  found=true;


            elementAux.checked=true;

        }else if ( !found && element!=elementAux.name && key == this.annonce.servicesLogement.length-1){
                        elementAux.checked=false;

        }
    });
    });





},

checkSelectedOption(){

    this.optionsLogementArray.forEach(elementAux => {


 this.annonce.optionsLogement.forEach(element => {
     console.log('hahahah : ',elementAux.name , element)
      if(element==elementAux.name){

            elementAux.checked=true;

        }
    });
    });

    var found=false;
    this.optionsLogementArray.forEach(elementAux => {
        found=false;
 this.annonce.optionsLogement.forEach((element,key) => {
      if(element==elementAux.name){
                  found=true;


            elementAux.checked=true;

        }else if ( !found && element!=elementAux.name && key == this.annonce.optionsLogement.length-1){
                        elementAux.checked=false;

        }
    });
    });





},
      getTypeLogement(){
          this.typesLogement=[];
          axios.get('/api/getTypeLogement').then((response) => {
                console.log('')
               response.data.typesLogement.forEach((element) => {
              if(element.name!="Autre")
            this.typesLogement.push(element);
          });

 response.data.typesLogement.forEach((element) => {
              if(element.name=="Autre")
            this.typesLogement.push(element);
          });
          }).catch((err) => {

          });
      },

getPropretiesByTypeLogement(id){
          this.suppPropreties=[];
          console.log('iddd :   ' , id)
          let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req= {
          type_logement_id : id,
      }



      axios.post('/api/getPropretiesByTypeLogement/' , req , config).then((response) => {
            response.data.propretiesElements.forEach(element => {
                this.suppPropreties.push(element)
            });


let auxArray=this.suppPropreties;
let propNamesArray=[];
    let propNamesCh="";

this.suppPropreties.forEach((element,key) => {

    this.annonce.suppPropretiesAnnonce.forEach(elementAux => {
    if(element.id == elementAux.id ){
        auxArray.splice(key,1);
    }
            auxArray.splice(key,1);


    });

    console.log('auxArray : , ' , auxArray)

});

 auxArray.forEach(element => {
        propNamesArray.push(element.name);
    });
propNamesCh="";


propNamesArray.forEach(element => {
    if(propNamesArray.length>1){
        propNamesCh+=element+"<br>"
    }else{
        propNamesCh=element
    }
});


let titleCh="";

if(propNamesArray.length>1){
    titleCh = "Vous avez des nouvelles propriétés pour votre annonce"
}else{
    titleCh = "Vous avez une nouvelle propriété pour votre annonce"

}

if(localStorage.getItem("userRole") == "owner" ){



             if (this.annonce.suppPropretiesAnnonce.length < this.suppPropreties.length ){
                     Swal.fire({
        title: titleCh,
  html: '<pre class="prepNewPropretyCheckTrueSweetAlert">' + propNamesCh + '</pre>',
        showDenyButton: false,
        confirmButtonColor: "#4c8dc2",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          denyButtonColor: "rgb(31, 31, 31)",
          denyButtonClass: " px-4 py-2 rounded-pill ",
        showCancelButton: false,
        confirmButtonText: "Compris ! ",
      })

                }

}
      });

      },


      getServicesByTypeLogement(id){
          this.servicesLogementArray=[];
          this.servicesLogementArrayAux=[];

          console.log('iddd :   ' , id)
          let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req= {
          type_logement_id : id,
      }

      axios.post('/api/getServicesByTypeLogement/' , req , config).then((response) => {
            response.data.servicesElements.forEach(element => {
                this.servicesLogementArray.push(element)
                this.servicesLogementArrayAux.push(element)
            });

            this.checkSelectedService();



      });

      },




      getOptionsByTypeLogement(id){
          this.optionsLogementArray=[];
          this.optionsLogementArrayAux=[];
          console.log('iddd :   ' , id)
          let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req= {
          type_logement_id : id,
      }

      axios.post('/api/getOptionsByTypeLogement/' , req , config).then((response) => {
            response.data.optionsElements.forEach(element => {
                this.optionsLogementArray.push(element);
                                this.optionsLogementArrayAux.push(element)

            });

                        this.checkSelectedOption();


      });

      },




 updateFormInputs(id){
          this.getPropretiesByTypeLogement(id);
           this.getServicesByTypeLogement(id);
           this.getOptionsByTypeLogement(id);
      },


servicesManagementClick(service){


    if(service.checked){

        service.checked=false;

        this.annonce.servicesLogement.forEach(element => {
            if(element.name==service.name){
                    this.servicesLogementArray.forEach((elAux,key) => {
                        if(element.name==elAux){
                            this.servicesLogementArray[key].checked=false;
                        }
                    });

            }
        });

    }else{
        service.checked=true;
        this.annonce.servicesLogement.forEach(element => {
            if(element.name==service.name){
             this.servicesLogementArray.forEach((elAux,key) => {
                        if(element.name==elAux){
                            this.servicesLogementArray[key].checked=true;
                        }
                    });

            }
        });
    }
      },

      optionManagementClick(option){


    if(option.checked){

        option.checked=false;

        this.annonce.optionsLogement.forEach(element => {
            if(element.name==option.name){
                    this.optionsLogementArray.forEach((elAux,key) => {
                        if(element.name==elAux){
                            this.optionsLogementArray[key].checked=false;
                        }
                    });

            }
        });

    }else{
        option.checked=true;
        this.annonce.optionsLogement.forEach(element => {
            if(element.name==option.name){
             this.optionsLogementArray.forEach((elAux,key) => {
                        if(element.name==elAux){
                            this.optionsLogementArray[key].checked=true;
                        }
                    });

            }
        });
    }
      },



    deleteImage(x,url) {
      console.log('urlurlurlurl' , url.default , ' urlurlurlurl ');

      let showDenyButton=false;

      console.log('url.default : ' , url)

      if(url.default=="true"){
showDenyButton=false;
      }else {
          showDenyButton=true;
      }

      Swal.fire({
        // title: "Gestion d'images",
        icon : 'question',
        showDenyButton: showDenyButton,
        confirmButtonColor: "rgb(255, 78, 78)",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          denyButtonColor: "#4c8dc2",
          denyButtonClass: " px-4 py-2 rounded-pill ",
          cancelButtonColor: "rgb(31, 31, 31)",
          cancelButtonClass: " px-4 py-2 rounded-pill ",
        showCancelButton: true,
        confirmButtonText: "Supprimer",
        denyButtonText: `Image par défaut`,
        cancelButtonText: `Fermer`,

      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire({
        title: "Supprimer cette photo?",
        showDenyButton: true,
        confirmButtonColor: "rgb(255, 78, 78)",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          denyButtonColor: "rgb(31, 31, 31)",
          denyButtonClass: " px-4 py-2 rounded-pill ",
        showCancelButton: false,
        confirmButtonText: "Supprimer",
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.annonce.imagesUrls.splice(x, 1);
          this.imagesArrayToDelete.push(url);
        }
      });

        }

        if (result.isDenied) {
            Swal.fire({
        title: "Images par défaut?",
        showDenyButton: true,
        confirmButtonColor: "#4c8dc2",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          denyButtonColor: "rgb(31, 31, 31)",
          denyButtonClass: " px-4 py-2 rounded-pill ",
        showCancelButton: false,
        confirmButtonText: "Oui",
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.updateImageByDefaultState(url);
        }
      });
        }


      });
    },

    updateImageByDefaultState(image){
  let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };



      axios.post('/api/updateImageByDefaultState/' , image , config).then((response) => {
          this.getAnnonce();
      });

    },

    onFilesChange(e) {
      this.annonce.images = [];
      this.annonce.urls = [];

      let file = e.target.files;

      if (!file.length) {
        return false;
      } else {
        for (let i = 0; i < file.length; i++) {
          this.annonce.images.push(file[i]);
          this.annonce.urls.push(URL.createObjectURL(file[i]));
        }
        console.log(this.annonce.images);
      }
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57)

        // && charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    getAnnonce() {
      this.images = [];
      let annonceAux = {
          id : this.$route.query.annonce_id
      }
      axios
        .post("api/getAnnonceById" , annonceAux)
        .then((response) => {



          this.annonce = response.data.userAnnonce[0];

        //   this.annonce.urls=[];
          this.annonce.imagesUrls=[];
                console.log('xxxxxx  :   xcxxxxx  :  ' , response.data.userAnnonce[0].suppPropretiesAnnonce.length ,  this.suppPropreties.length);



          response.data.userAnnonce[0].images.forEach((element) => {
            if(element.default=="true"){
            this.images.push(element);
            this.annonce.imagesUrls.push(
              "storage/" + element.path + "/" + element.image
            );

            }
          });

          response.data.userAnnonce[0].images.forEach((element) => {
             if(element.default=="false"){
            this.images.push(element);
            this.annonce.imagesUrls.push(
              "storage/" + element.path + "/" + element.image
            );

            }
          });


            console.log("this.annonce ;;  lendddd  : ", this.annonce.urls);

            console.log('response.data.userAnnonce[0].servicesLogement : ' , response.data.userAnnonce[0].servicesLogement)
            console.log('response.data.userAnnonce[0].servicesLogemJSON.parse(entJSON.parse( : ' , JSON.parse(response.data.userAnnonce[0].servicesLogement))

          this.annonce.servicesLogement = JSON.parse( response.data.userAnnonce[0].servicesLogement);
          this.annonce.optionsLogement = JSON.parse(response.data.userAnnonce[0].optionsLogement);




           this.getServicesByTypeLogement(response.data.userAnnonce[0].type_logement_id);

           this.getPropretiesByTypeLogement(response.data.userAnnonce[0].type_logement_id);
           this.getOptionsByTypeLogement(response.data.userAnnonce[0].type_logement_id);
           console.log("imagess  : ", this.annonce);




        });

    },


    deleteImages(){



 let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req = {
          imagesArray : this.imagesArrayToDelete,
          user_id : this.annonce.user_id,
          annonce_id : this.annonce.annonce_id,
      }
      axios
        .post("api/deleteImagesOnUpdateAnnonce", req, config).then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(response.err)

        });

    },

    submitUpdateAnnonceForm() {



      this.suppPropreties.forEach((element,key) => {

         element.suppPropretiesAnnonce = this.annonce.suppPropretiesAnnonce[key]

      });


      this.annonce.suppPropreties=this.suppPropreties;
      this.annonce.suppPropretiesAnnonce=this.suppPropreties;


        this.annonce.servicesLogement=[];
        this.annonce.optionsLogement=[];

        this.servicesLogementArray.forEach(element => {
            if(element.checked==true){
                this.annonce.servicesLogement.push(element.name)
            }
        });

        this.optionsLogementArray.forEach(element => {
            if(element.checked==true){
                this.annonce.optionsLogement.push(element.name)
            }
        });

        console.log(this.annonce)

      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

        if(localStorage.getItem("userRole")=="admin"){
             let notification = {
        from_id: localStorage.getItem("userId"),
      };
             notification.content = "L'administration à modifié votre annonce (Ref:#ATKHEB0000"+this.annonce.user_id+")";
             notification.type = "update";
      notification.user_id = this.annonce.user_id;
 notification.link = "/annonce/?id=" + this.annonce.id;
      axios.post("api/sendNotification", notification, config);

        }


      axios
        .post("api/updateAnnonce", this.annonce, config)
        .then((response) => {
          console.log("response annonce id : ", response.data.annonce.id);
          console.log("response USER id : ",this.annonce.user_id);



          this.annonce.annonce_id=this.$route.query.annonce_id;

         if(this.imagesArrayToDelete.length>0){
         this.deleteImages();
         }
          if(this.annonce.urls){
          this.addImages();
          }
          this.annonceErrors = {
            title: "",
            typeLogement: "",
            address: "",
            city: "",
            postalCode: "",
            country: "France",
            surface: "",
            numberOfBeds: "",
            capacity: "",
            description: "",
            animaux: "",
            price:"",

          };

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Annonce a été bien modifié",
            showConfirmButton: false,
            timer: 2000,
          });

        window.scrollTo(0,0);
            console.log('this.annonce.annonce_id ' , this.annonce.annonce_id)

            this.$router.push({ path: '/annonce/', query: { id: this.annonce.annonce_id }})
        })
        .catch((err) => {
          console.log("err : ", err);

          if (err.response) {
            if (err.response.data.errors) {
              if (err.response.data.errors.price) {
                this.annonceErrors.price =
                  err.response.data.errors.price[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.title = "";
                this.annonceErrorsCheck = false;
              }
              if (err.response.data.errors.title) {
                this.annonceErrors.title =
                  err.response.data.errors.title[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.title = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.address) {
                this.annonceErrors.address =
                  err.response.data.errors.address[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.address = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.typeLogement) {
                this.annonceErrors.typeLogement =
                  err.response.data.errors.typeLogement[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.typeLogement = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.city) {
                this.annonceErrors.city =
                  err.response.data.errors.city[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.city = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.postalCode) {
                this.annonceErrors.postalCode =
                  err.response.data.errors.postalCode[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.postalCode = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.country) {
                this.annonceErrors.country =
                  err.response.data.errors.country[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.country = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.surface) {
                this.annonceErrors.surface =
                  err.response.data.errors.surface[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.surface = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.numberOfBeds) {
                this.annonceErrors.numberOfBeds =
                  err.response.data.errors.numberOfBeds[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.numberOfBeds = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.capacity) {
                this.annonceErrors.capacity =
                  err.response.data.errors.capacity[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.capacity = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.description) {
                this.annonceErrors.description =
                  err.response.data.errors.description[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.description = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.animaux) {
                this.annonceErrors.animaux =
                  err.response.data.errors.animaux[0] ?? "";
                this.annonceErrorsCheck = true;
              } else {
                this.annonceErrors.animaux = "";
                this.annonceErrorsCheck = false;
              }

              if (err.response.data.errors.user_id) {
                this.annonceErrors.user_id =
                  err.response.data.errors.user_id[0] ?? "";
              } else {
                this.annonceErrors.user_id = "";
              }
            }
          }
        });

        this.sendNotifications();


    },

     sendNotifications(){
    this.notification.from_id = localStorage.getItem("userId");

     let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

          this.user.role = localStorage.getItem("userRole");
this.user.id = localStorage.getItem("userId");


let annonce= {
    annonce_id : this.$route.query.annonce_id,
}

        let users=[];


axios.post('/api/getLikesForAnnonce' , annonce).then((response) => {
    response.data.likes.forEach(element => {
        users.push(element.user);
    });




})

console.log('this.user.id==annonce.user_id :' , this.user.id , this.annonce.user_id)
if(this.user.id==this.annonce.user_id){

        this.notification.user_id= this.annonce.user_id;
        this.notification.from_id= this.user.id
        this.notification.content="A modifié son annonce (Ref: #ATKHEB0000"+this.$route.query.annonce_id+")";
        this.notification.type="update";
        this.link='/annonce/?id='+this.$route.query.annonce_id;






    setTimeout(() =>{

        users.forEach(element => {
        this.notification.from_id= this.user.id
        this.notification.user_id=element.id
        this.notification.content="A modifié son annonce (Ref: #ATKHEB0000"+this.$route.query.annonce_id+')';
        this.notification.type="update"
        this.notification.link='/annonce/?id='+this.$route.query.annonce_id

         axios
        .post("api/sendNotification", this.notification, config);

 console.log('his.notification   ', element.id ,' -- ' , this.notification);

    });

    }, 1000);



        }







    },
    addImages() {
        this.annonce.form = new FormData();
      for (let i = 0; i < this.annonce.images.length; i++) {
        this.annonce.form.append("images[]", this.annonce.images[i]);
      }

      this.annonce.form.append("annonceTitle", this.annonce.title);
      this.annonce.form.append("annonce_id", this.annonce.annonce_id);
      this.annonce.form.append("user_id", this.annonce.user_id);

      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "content-type": "multipart/form-data",
        },
      };

      this.token = localStorage.getItem("token");

      axios
        .post("api/uploadAnnonceImages", this.annonce.form, config)
        .then((response) => {
          this.annonce.images = [];


        })
        .catch((error) => {
          console.log(error);
        });
    },











    hasError(item) {
      // console.log(this.errors[item]);
      if (this.annonceErrors[item] != "") {
        return true;
      } else {
        return false;
      }
    },

    onChange(event) {
      var optionText = event.target.value;
      console.log(optionText);

      this.annonce.typeLogement = optionText;
    },

    onlyForCurrency ($event) {
     // console.log($event.keyCode); //keyCodes value
     let keyCode = ($event.keyCode ? $event.keyCode : $event.which);

     // only allow number and one dot
     if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.annonce.price.indexOf('.') != -1)) { // 46 is dot
      $event.preventDefault();
     }

     // restrict to 2 decimal places
     if(this.annonce.price!=null && this.annonce.price.indexOf(".")>-1 && (this.annonce.price.split('.')[1].length > 1)){
     $event.preventDefault();
     }
   },

   addServiceToAnnonce(){

            this.serviceLogementAux.forEach(element => {
       this.annonce.servicesLogement.push(element)
       });

       this.serviceLogementAux=[];
   },
  },
};
</script>
