const mongoose=require('mongoose');



const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,//refering to user models 
        ref:'User'
    },
    //inlcude the array of all comments in this post schema itself
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{
    timestamps:true
});


const Post=mongoose.model('Post',postSchema);// this will tell database that this post is model in database
module.exports=Post;