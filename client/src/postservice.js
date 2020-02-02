import axios from 'axios';

const url ='api/registerr';

class PostSerivce{
//get posts
static getPost(){
return new Promise(async(resolve, reject)=>{
    try{
const res= await axios.get(url);
const data = res.data;
resolve(
    data.map(post=>({
        ...post,
        createdAt : new Date(post.createdAt)
    }))
);

    }catch(err){
    reject(err);
    }
})
}


//create post
static insertPost(email,password,name){

    return axios.post(url,{
        email,password,name
    });
}


//delete posts

}
export default PostSerivce;