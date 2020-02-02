const jwtStartgey = require('passport-jwt').Strategy;
const extractjwt=require('passport-jwt').ExtractJwt;
const user= require('../models/register');
const key =require('./keys')

const emptytoken={
    jwtFromRequest: extractjwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key.secret

};

//emptytoken.jwtFromRequest= extractjwt.fromAuthHeaderAsBearerToken();
//emptytoken.secretOrkey= key;

module.exports = Passport =>{
    Passport.use(
        new jwtStartgey(emptytoken, (jwt_payload,done)=>{
            user.findById(jwt_payload._id).then(user =>{
                if(user) return done(null,user);
                return done(null,false);
            }).catch(err =>{
                console.log(err)
            });
        })
    );
};
