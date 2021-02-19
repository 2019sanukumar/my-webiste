const Post=require('../models/post');


module.exports.create_post=function(req,res)
{
    console.log(req.body);
    Post.create({
        content:req.body.content,
        user:req.user._id// this user._id will store the id only where as user.id have whole data and this is creted in passport-lpcal strategy in setsutenticated user
    },function(err,post)
    {
        if(err){console.log('error in creating a post');return ;}

        return res .redirect('back');

    });
}