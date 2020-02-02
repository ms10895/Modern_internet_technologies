const express= require('express');
const router = express.Router();
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key =require('../../config/keys').secret;




//item model

const Registermodel= require('../../models/register');

//@route Get api/registerr
// decrption: Get all registers
// access : public
router.get('/', (req,res) =>{

    Registermodel.find().then(register=> res.json(register));
   
    

});

//@route Post api/registerr
// decrption: Post all registers
// access : public
router.post('/', (req,res) =>{

    //check for unique email
    let{email}= req.body
   Registermodel.findOne({
       email: email

   }).then(user =>{
      if(user){
         return res.status(400).json({msg :"email is already"});
       }
       
   })

    // after data validation
   const newregisteration=new Registermodel({
       email: req.body.email,
       password: req.body.password,
       name: req.body.name


   });


   bcrypt.genSalt(10,(err,salt) =>{
        bcrypt.hash(newregisteration.password,salt,(err,hash) =>{
            if(err) throw err;
            newregisteration.password=hash;
            newregisteration.save().then(register=> res.status(201).json({
                msg:"user is now registerd"
            }));

        } )
   })
    
   
   




    //  newregisteration.save().then(register=> res.json(register));
});

//@router post api/register/login
router.post('/login',(req,res)=>{
    Registermodel.findOne({
        email:req.body.email
    }).then(user =>{
        if(!user){  return res.status(404).json({
            msg: "email/user not found"
        });  
    }
//if email found
bcrypt.compare(req.body.password,user.password).then(isMatch =>{
    if(isMatch){  
        //user password correct seend jason token
        const userpayload={
            _id: user._id,
            name: user.name,
            email: user.email
        }
        jwt.sign(userpayload,key,{expiresIn : 604800}, (err,token) =>{ 
            return res.status(200).json({ token:'Bearer '+""+token,
        msg:"you are logged in ",user:user})
        })

       }
       else{
           return res.status(404).json({
               msg:"incorrect password"
           });
       }

    })



    });

    
});

//router post /profile

router.get('/profile',passport.authenticate('jwt',{session:false}), (req,res) =>{
 
    return res.json({
        user: req.user
    })
} );


module.exports=router;