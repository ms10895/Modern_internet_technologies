import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate';
import './assets/css/style.css'
import './assets/css/bootstap.css'
import * as VueGoogleMaps from "vue2-google-maps"
import registration from './components/registration'
import about from './components/about.vue'
import products from './components/products.vue'
import login from './components/login.vue'
import contact from './components/contact.vue'
import chat from './components/chat.vue'
import store from './store'
import axios from 'axios';
import portfolio from './components/portfolio.vue'
import i18n from './i18n'


//default vue http modules for api calls
Vue.prototype.$http=axios;
// load the token  from localstorage
const token=localStorage.getItem("token");
//if there is any token then we will simply append default axios authorization header
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization']= token;
}


Vue.use(VueRouter);
Vue.use(Vuelidate);


const routes=[
  {path: '/register',
   name:"registration",
   component: registration },

  {path: '/about',
   name:"about" ,
   component: about },

  {path: '/', component: products },

  {path: '/products',
   name:"products" ,
   component: products },

  {path: '/login',
  name:"login", 
  component: login },

  {path: '/contact', 
  name:'contact',component: contact }, 

  {path: '/chat',
  name:"chat",
  component: chat },
  {
    path: '/portfolio',
    name:"portfolio",
    component:portfolio
  }

  



];
const router=new VueRouter({routes});
export default router;

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDyw66f25NVFgnKa9y7WG4HEkcaML6RIYI",
    libraries: "places" // necessary for places input
  }
});



new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')

