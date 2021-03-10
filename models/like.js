const mongoose=require('mongoose');
const likeSchema=new mongoose.Schema({

    user:{
        type:mongoose.Schema.ObjectId,

    },
    likeable:{//this define the object id of the liked object
        type:mongoose.Schema.ObjectId,
        required:true,
        refPath:'onModel'

    },
    //this field is used for defining ta dynamivhe type of the liked object since this is dynamin refrence
    onModel:{
        type:String,
        required:true,
        enum:['Post','Comment']
    }

},{
    timestamps:true
});

const Like=mongoose.model('Like',likeSchema);
module.exports=Like;