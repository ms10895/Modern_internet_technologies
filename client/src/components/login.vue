<template>
 <section class="bg-light page-section" id="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Login</h2>
          <!-- <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> -->
        </div>
      </div>

      <!-- <div class="row"> -->
        
         <!-- <div class="col-md-6" > -->
          <center>
          <div >
            <form @submit.prevent="sendemailandpassword">
                <div class="form-group" >
                  <p class="help-block text-danger"></p>
                </div>
                
                <div class="form-group">
                  <input class="form-control" :class="{ 'is-invalid': submitted && $v.email.$error }" id="email" type="email" v-model="email"  placeholder="Email *" required="required" data-validation-required-message="Please enter your email address.">
                  <p class="help-block text-danger" v-if="error">{{error}}</p>
                </div>
                <div class="form-group">
                  <input class="form-control" :class="{ 'is-invalid': submitted && $v.password.$error }" id="password" type="password" v-model="password" placeholder="Password *" required="required" data-validation-required-message="Please enter your password.">
                  <p class="help-block text-danger"></p>
                  
                </div>
                <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <button class="btn btn-primary"  >login</button>
          <p class="large text-muted"><router-link to="/register">Not Registered?</router-link></p>
        </div>

        
      </div>
            </form>
             </div> 
          </center>
              <!-- </div> -->
        
          
              
        




        
      <!-- </div> -->



      <!-- <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <button class="btn btn-primary"  v-on:click="sendemailandpassword" >loginn</button>
          <p class="large text-muted"><router-link to="/register">Not Registered?</router-link></p>
        </div>


      </div> -->
    </div>
  </section>
    
</template>
<script>
// import PostService from '../postservice'
import { required, email } from "vuelidate/lib/validators";
//import { Router } from 'express';
import { mapActions, mapGetters} from 'vuex';
export default {
  name: 'login',
  data(){
    return{
      posts: [],
      email: '',
      password: '',
      submitted: false
    }
  },
validations:{
        password: {required},
        email:{required,email},
    },

//   async created(){
    
// this.posts= await PostService.getPost();
    


    
//   },
computed:{
  ...mapGetters(["error"])
  
},
  methods:{
    ...mapActions(['login']),
    async sendemailandpassword(){
      this.submitted = true;
      
       this.$v.$touch();
                if (this.$v.$invalid) {
                    return ;
                }
                // eslint-disable-next-line no-console
        console.log("siraj");
        

      let user={
        email: this.email,
        password:this.password
      };
      this.login(user).then( res=>{
        if(res.data){
         this.$router.push({ path: '/about'});
          


        }
      }).catch(err=>{
        //console.log(err);
        /* eslint-disable no-console */
        console.log(err);
        /* eslint-enable no-console */
      });
      //await PostService.insertPost(this.email,this.password)
      //  await PostService.insertPost(this.password).catch(err=>console(err));
      
    }
  }
    
}
</script>
<style lang="css" >

</style>