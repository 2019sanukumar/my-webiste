const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    working_place:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const User=mongoose.model('User',UserSchema);//telling monggose that it is schema
module.exports=User;