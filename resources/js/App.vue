<template>

<div>

            <div class="template m-0 p-0 d-flex flex-column min-vh-100" >
                <div class="">
                    <page-header></page-header>
                </div>
                <div class="flex-fill">
                    <router-view></router-view>
                </div>


                <div class="">
                    <footer-view></footer-view>
                </div>
            </div>
</div>


</template>



<script>


import pageHeader from './components/template/navbar.vue'
import footerView from './components/template/footer.vue'
import 'vite/modulepreload-polyfill'

export default {
    components: {
    pageHeader,
    footerView,


  },

}
</script>
