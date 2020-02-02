const express= require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
const cors=require('cors');


const reg = require('./routes/api/registerr');

const app= express();
const http =require('http').Server(app);
const io = require('socket.io')(http);
app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
  });

//body parser
app.use(bodyparser.json());
app.use(cors());
// use passport middleware
app.use(passport.initialize());

//bring in passport stratergy
require('./config/passport')(passport);

//db connection

const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db,{useNewUrlParser:true}).then(()=>console.log('mongo connected!')).catch(err=>console(err));
//use routes
app.use('/api/registerr',reg);

// -----chat
let user =[];
let messages=[];
let index=0;

io.on("connection",socket=>{

    socket.emit('loggenIn',{
        user:user.map(s=> s.username),
        messages:messages
    });

    socket.on('newuser',username=>{
        console.log(username,"has arrived at the chat");
        socket.username=username;
        user.push(socket);

        io.emit('userOnline',socket.username);
    });

    socket.on('msg',msg=>{
        let message={
            index:index,
            username: socket.username,
            msg:msg
        }
        messages.push(message);

        io.emit('msg',message);
        index++;
    });


    //dissocnnet
    socket.on("disconnect",()=>{
        console.log(socket.username,"has left the party");
        io.emit('userleft',socket.username);
        user.splice(user.indexOf(socket),1);
    });
});



//----- port
const port = process.env.PORT || 5000;


http.listen(port,()=>console.log('server started on',port));

