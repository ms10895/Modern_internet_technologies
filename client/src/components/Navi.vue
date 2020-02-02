<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top"><b>LIBHERR</b></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">

            

          <li class="nav-item">
            <router-link to="/products" class="nav-link js-scroll-trigger">{{$t("nav.product")}}</router-link>
            <!-- <a class="nav-link js-scroll-trigger" href="#/products">Products</a> -->
          </li>
          
          <!-- <li class="nav-item" v-if=isLoggedIn>
            <router-link class="nav-link js-scroll-trigger" to= "/portfolio" >Portfolio</router-link>
          </li> -->
          <li class="nav-item" >
            <router-link class="nav-link js-scroll-trigger" to= "/about" >{{$t("nav.about")}}</router-link>
          </li>
          <li class="nav-item" v-if=!isLoggedIn>
            <router-link class="nav-link js-scroll-trigger" to= "/login" >Login</router-link>
          </li>
           <li class="nav-item" v-if=!isLoggedIn>
            <a class="nav-link js-scroll-trigger" href="#/register">{{$t("nav.register")}}</a>
          </li>
          <li class="nav-item" v-if=!isLoggedIn>
            <a class="nav-link js-scroll-trigger" href="#/contact">Contact</a>
          </li>
          <li class="nav-item" v-if=isLoggedIn >
            <router-link class="nav-link js-scroll-trigger" to= "/chat" >chat</router-link>
          </li>
          <li class="nav-item" v-if=isLoggedIn >
            <a class="nav-link js-scroll-trigger" href="#/contact" @click.prevent="logoutusr">Logout</a>
          </li>
          <li class="nav-item">
  <center> <select style="background-color:#212529" class ="nav-link js-scroll-trigger" v-model="$i18n.locale">
      <option  v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select> </center>
  </li> 
        </ul>
      </div>
    </div>
  </nav>



</template>
<script>
import { mapGetters , mapActions} from 'vuex';

export default {
    name: "Navi",
    data () {
    return { langs: ['en', 'de'] }
  },

    computed:{
      ...mapGetters(["isLoggedIn"]),
      
    },
    methods:{
      ...mapActions(['logout']),
      logoutusr(){

        this.logout();
        //this.$router.push({ path: '/products'});


      }
    }
    
};
</script>
<style>

</style>