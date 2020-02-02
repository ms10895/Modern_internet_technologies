import Axios from "axios";

//import axios from 'axios'
import router from '../main';
 
const state={
    token:localStorage.getItem('token') || '',
    user:{},
    status:'',
    error:null

};
const getters={
    isLoggedIn: state => !!state.token,
    authstate:state=>state.status,
    user: state=>state.user,
    error:state => state.error

};

const actions ={
    // login phase
    async login({ commit}, user){
        commit('auth_request');
        try{
            let res= await Axios.post('http://localhost:5000/api/registerr/login',user)
        if(res.data){
            const token = res.data.token;
            const user = res.data.user;

            // store token in localstorage
            localStorage.setItem('token',token);
            //set axios default
            Axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token , user);
        }
        return res;


        }catch(err){
            commit('auth_error',err)
        }


    },
    // for registration

    async register({commit},userdata)
    {
        commit('register_request');
    try{
        let res= await Axios.post('http://localhost:5000/api/registerr',userdata)
    if(res.data!== undefined){
        commit('register_success');
    }
      return res;

    }catch(err){
        commit('registeration_error', err)


    }
    
       

    },
    // for user data
     userData({commit}){
        commit('data_request');
        let res=  Axios.get('http://localhost:5000/api/registerr/profile')
         // eslint-disable-next-line no-console
         //console.log("test",res)
        if(res.data){
            const user=res.data.user;
            commit('data_sucess',user);
              
        }
        return res;
            
    },
    // for logout
    async logout({commit}){
        await localStorage.removeItem('token');
        commit('logout');
        delete Axios.defaults.headers.common['Authorization'];
        //this.$router.push({ path: '/products'});
        router.push({ path: '/products'});
        return
    }

};
const mutations={

    auth_request(state){
        state.error=null
        state.status='loading'
    },
    auth_success(state,token,user){
        state.token=token
        state.user=user
        state.status='success'
        state.error=null
    },
    auth_error(state,err){
        state.error=err.response.data.msg
        
    },
    register_request(state){
        state.status='loading'
        state.error=null
    },
    register_success(state){
        state.status='success'
        state.error=null
    },
    registeration_error(state,err){
        state.error=err.response.data.msg
    },
    data_request(state){
        state.status='loding'
        state.error='null'

    },
    data_sucess(state,user){
        state.user=user
        state.status='success'
        state.error=null
    },
    logout(state){
        state.status=''
        state.token=''
        state.user=''
        state.error=null
    }

};

export default{
    state,
    actions,
    mutations,
    getters
};