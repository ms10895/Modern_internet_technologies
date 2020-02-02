<template>
<div id=chat>


 <section class="bg-light page-section" id="/register"> 
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Chat Box</h2>
          <!-- <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> -->
        </div>
      </div>

    
          <center>
          <div>
            <h4 class="section-heading text-uppercase">UserName: {{username}}</h4>
          <h5 class="section-heading text-uppercase">Total Online: {{user.length}}</h5>
                <div class="form-control" style="height:600px;width:70%;background-color:#212529;border-radius: 15px;overflow:scroll;">
                <div class="form-group" v-for="message in messages" v-bind:key="message.index">
                   <div  style="background-color:#212529;height:100%;width:100%;color:#fed136;border-radius: 15px;" class="form-control" >
                       
                           
                       <div style="text-align:justify;"> <b>{{message.username}} </b></div> <div class="form-control" style="text-align:justify;width:90%;background-color:#343a40;color:white;border-radius: 15px 50px 30px;" >{{message.msg}}</div> 
                            
                       
                   </div>
                    </div>
                </div>
                <form @submit.prevent="sendmessage" >
                 
                   <p class="help-block text-danger"></p> 
                 <div>  <input style="height:100%;width:60%;border-radius: 10px;"  type="text" v-model="msg"> <button class="btn btn-primary" style="height:100%" v-on:disabled="!msg"> send</button> </div>

                   <!-- <button class="btn btn-primary" v-on:disabled="!msg"> send</button> -->
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
import io from 'socket.io-client';
import { mapActions} from 'vuex';
export default {
    name:"chat",
    data : function (){
        return {

            msg:"",
            username:"",
          socket: io('http://localhost:5000'),
          messages:[],
           user:[]
        }
    },
    methods:{
        

        ...mapActions(['userData']),
        

        joinServer:function(){
            
            
           let a=this.userData();
        //     .then(req=>{
        //         if(req.data){
        //             this.username=req.data.user.name;
        //         }
                
                // eslint-disable-next-line no-console
        console.log("thh",a);
                
        //     });
             //copyuser=this.username;
               //this.username=copyuser.user.name;
               
              
               
               



      this.socket.on('loggenIn',data =>{
        this.messages= data.messages;
        this.user=data.user;

        this.userData().then(req=>{
            if(req.data){
                this.username=req.data.user.name;
               

            }
            this.socket.emit('newuser',this.username);
            // eslint-disable-next-line no-console
        console.log("thh",req.data.user.name);

        });
       

        // this.socket.emit('newuser',this.username);
        // eslint-disable-next-line no-console
        console.log("teek",this.username);
      });

      this.listen();
    },
    listen: function(){
      this.socket.on('userOnline',user=>{
        this.user.push(user);
      });
      this.socket.on('disconnect',user=>{
        this.user.splice(this.user.indexOf(user),1);
      });
      this.socket.on('msg',message=>{
        this.messages.push(message);
      });

    },
    sendMessage: function(message){
      this.socket.emit('msg',message);
    },



        sendmessage: function(){
             if(!this.msg){
                alert("please eneter message");
                return;
             }
            this.socket.emit('msg',this.msg);
            this.msg=" ";
        },
        
        
        

        
    },
    mounted:function (){
        this.userData().then( req =>{
            if(req.data){
                this.username=req.data.user.name;
               

            }
            
        });

    //   this.username=prompt("what is your username","aynonmus");
    //   if(!this.username){
    //     this.username="aynonmus";     
    //      }
         this.joinServer();
       
  }
     
    
}
</script>
<style lang="css" scoped>



</style>