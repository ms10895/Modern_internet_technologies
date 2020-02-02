const moongose= require('mongoose');
const schema=moongose.Schema;


//create schema


const itemschema = new schema({
    name:{
        type: String
    },
    email:{
        type: String,
        // required: true

    },
    password: {

        type: String,
        // required: true
    },

    date:{
        type: Date,
        default: Date.now
    }
});
const register=moongose.model('register',itemschema);


module.exports = register ;
