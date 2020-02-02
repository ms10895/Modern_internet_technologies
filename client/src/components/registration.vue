<template>
<div id=registration>
<!-- <Navi></Navi> -->

 <section class="bg-light page-section" id="/register"> 
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Sign Up</h2>
          <!-- <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> -->
        </div>
      </div>

    
          <center>
          <div >
            <form @submit.prevent="sendreg" >
                <div class="form-group" >
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" :class="{ 'is-invalid': submitted && $v.name.$error }" id="name" type="name" v-model="name"  placeholder="Name *" required="required" data-validation-required-message="Please enter your name.">
                  <p class="help-block text-danger" v-if="submitted&& !$v.name.required"> name required </p>
                </div>
                
                <div class="form-group"  >
                  <input class="form-control" :class="{ 'is-invalid': submitted && $v.email.$error }" id="email" type="email" v-model="email"  placeholder="Email *" required="required" data-validation-required-message="Please enter your email address.">
                  <p class="help-block text-danger" v-if="!$v.email.email" > Email is invalid</p>
                  <p class="help-block text-danger" v-if="error" > {{error}}</p>


                </div>
                <div class="form-group">
                  <input class="form-control" :class="{ 'is-invalid': submitted && $v.password.$error }" id="password" type="password" v-model="password"  placeholder="Password *" required="required" data-validation-required-message="Please enter your password.">
                  <p class="help-block text-danger" v-if="submitted && !$v.password.required"  > pass required</p>
                  
                </div>
                <div class="row">
        <div class="col-lg-8 mx-auto text-center">
           <button class="btn btn-primary"    >Sign up</button> 
           <p class="success" v-if="savingsucess" >You are Registered now! Will Be Redirected to in 5s</p> 
        </div>
      </div>
            </form>
             </div> 
          </center>
          
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          
        </div>
      </div> 

      
    </div>
  </section> 





</div>
</template>
<script>
//import Navi from './Navi'
import PostService from '../postservice'
//import { required, email } from "vuelidate/lib/validators";
import { required, email } from "vuelidate/lib/validators";
//import router from '../main'
import { mapActions, mapGetters} from 'vuex';


export default {
  name: 'registration',
  data(){
    return{
      posts: [],
      
          email:'',
          password:'',
          name:'',
      submitted: false
      ,savingsucess: false
      
      
    }
  },
    validations:{
        name:{required},
        password: {required},
        email:{required,email},
    },
    computed:{
      ...mapGetters(["error"])
    },
    

  async created(){
    
this.posts= await PostService.getPost();
    


    
  },
  methods:{
    

      ...mapActions(['register']),

    async sendreg(){
        
      this.submitted = true;
      this.savingsucess=true;
       this.$v.$touch();
                if (this.$v.$invalid) {
                    return ;
                }
             let user={
                email: this.email,
                password: this.password,
                name: this.name
             };   
             this.register(user).then(res=>{
               if(res.data){
                 setTimeout( () => this.$router.push({ path: '/login'}), 5000)
               }
             });

      //await PostService.insertPost(this.email,this.password,this.name)
      //  await PostService.insertPost(this.password).catch(err=>console(err));

      
    }
  }
    
}
</script>
<style lang="css">



</style>