const mongoose=require('mongoose');
const User_Detail=new mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    second_email:{
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
    timestamps:true,
});

const User_detail=mongoose.model('User_detial',User_Detail);
module.exports=User_detail;