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
            <router-link to="/products" class="nav-link js-scroll-trigger">Products</router-link>
            <!-- <a class="nav-link js-scroll-trigger" href="#/products">Products</a> -->
          </li>
          
          <!-- <li class="nav-item" v-if=isLoggedIn>
            <router-link class="nav-link js-scroll-trigger" to= "/portfolio" >Portfolio</router-link>
          </li> -->
          <li class="nav-item" >
            <router-link class="nav-link js-scroll-trigger" to= "/about" >About</router-link>
          </li>
          <li class="nav-item" v-if=!isLoggedIn>
            <router-link class="nav-link js-scroll-trigger" to= "/login" >Login</router-link>
          </li>
           <li class="nav-item" v-if=!isLoggedIn>
            <a class="nav-link js-scroll-trigger" href="#/register">register</a>
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
        </ul>
      </div>
    </div>
  </nav>



</template>
<script>
import { mapGetters , mapActions} from 'vuex';

export default {
    name: "Navi",

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