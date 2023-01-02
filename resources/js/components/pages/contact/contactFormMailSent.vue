<template>
    <div class="bodySuccessMessage">

         <div class="card">
      <div style="border-radius:200px; height:200px; width:200px; background: rgb(215, 232, 247); margin:0 auto;">
        <i class="checkmark">✓</i>
      </div>
        <h1>Nous avons bien réçu votre demande</h1>
        <p>Merci beaucoup de nous avoir contacté, cela signifie beaucoup pour nous, nous vous répondrons rapidement.
</p>
<div class="footerBottonDiv">

          <router-link
                      style="text-decoration: none"
                      to="/"
                      class="text-dark"
          ><button>www.atypik-house.com</button></router-link>

      </div>
      </div>

    </div>
</template>


<script>
export default {
    data(){
        return{

        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style lang="scss">


.bodySuccessMessage{
text-align: center;
        padding: 0;
        background: #EBF0F5;

        h1 {
          color: #228de5;
          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
          font-weight: 900;
          font-size: 40px;
          margin-bottom: 10px;
        }

        p {
          color: #404F5E;
          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
          font-size:20px;
          margin: 0;
        }
      i {
        color: #228de5;
        font-size: 100px;
        line-height: 200px;
        margin-left:-15px;
      }
      .card {
        background: white;
        padding: 60px;
        border-radius: 4px;
        box-shadow: 0 2px 3px #C8D0D8;
        display: inline-block;
        margin: 0 auto;
      }

      .footerBottonDiv{
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button{
    padding: 10px 20px;
    border-radius: 30px;
    background-color: #3f3f3f;
    color:white;
}
}
}

</style>
