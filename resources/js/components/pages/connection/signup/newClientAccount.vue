<template>
<div>

<div class="loaderDivPage">
         <div class="loaderDiv" v-if="loading">
         <loadingPage/>
     </div>



     <div class="" v-if="!loading">
         <div class=contentNewAccount>
  <div class="wrapper-1">
    <div class="wrapper-2">
      <h1>Merci !</h1>
      <p>Bienvenu dans notre platforme</p>
      <p>, vous allez recevoir un e-mail de confirmation</p>

      <router-link
                    @click="scrollToTop"
                      style="text-decoration: none"
                      to="/se-connecter"
                      class="text-dark"
                      >
                      <button  class="go-home">
       Se connecter
      </button>
      </router-link>
    </div>
    <div class="footer-like">

    </div>
</div>
</div>



     </div>

</div>

</div>
</template>

<style lang="css">
.loadingDiv{

    display: flex;
justify-content: center;
align-items: center;
text-align: center;
min-height: 10vh;
height: 10vh;
}

.loaderDivPage{


min-height: 90vh;


}


.wrapper-1{
  width:100%;
  height:100vh;
  display: flex;
flex-direction: column;
}
.wrapper-2{
  padding :30px;
  text-align:center;
  display: flex;
flex-direction: column;
}
h1{
  font-size:4em;
  letter-spacing:3px;
  color:#272727 ;
  margin:0;
  margin-bottom:20px;
}
.wrapper-2 p{
  margin:0;
  font-size:1.3em;
  color:rgb(0, 0, 0);
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing:1px;
}
.go-home{
  color:#fff;
  background:#2a2a2a;
  border:none;
  padding:10px 50px;
  margin:30px 0;
  border-radius:30px;
}
.footer-like{
  margin-top: auto;
    background: #1289ca;
padding: 6px;
text-align: center;
color: white;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 30px;
}
.footer-like p{
  margin:0;
  padding:4px;
  color:#ffffff;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing:1px;
}
.footer-like p a{
  text-decoration:none;
  color:#000000;
  font-weight:300;
  font-size: 14px;
}

@media (min-width:360px){
  h1{
    font-size:4.5em;
  }
  .go-home{
    margin-bottom:20px;
  }
}

@media (min-width:600px){
  .contentNewAccount{
  max-width:1000px;
  margin:7% auto;
}
  .wrapper-1{
  height: initial;
  max-width:620px;
  margin:0 auto;
  margin-top:50px;
  box-shadow: 4px 8px 40px 8px rgba(187, 187, 187, 0.2);
  border-radius: 30px;
}

}

</style>


<script>
  // Import component
  import loadingPage from '../../loadingPage/loadingPage.vue'


export default {
        data() {
            return {

                      loading:true,


            }
        },

  components: {loadingPage },

mounted(){
    this.hideSpinner();
},


        methods: {
hideSpinner() {
    setTimeout(() => this.loading = false, 2000);
  }
        }
    }
</script>

c
