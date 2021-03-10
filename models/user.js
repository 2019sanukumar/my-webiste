const mongoose=require('mongoose');

const multer=require('multer');//requreing multer
const path=require('path');
const AVATAR_PATH=path.join('/uploads/users/avatars');


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
    },
    avatar:{
        type:String
    }
},{
    timestamps:true
});

// for multer
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });
//static method which can be used anywhere on the class
UserSchema.statics.uploadAvatar=multer({storage: storage}).single('avatar');
UserSchema.statics.avatarPath=AVATAR_PATH;


const User=mongoose.model('User',UserSchema);//telling monggose that it is schema
module.exports=User;