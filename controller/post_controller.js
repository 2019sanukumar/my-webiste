const Post=require('../models/post');
const Comment=require('../models/comment');

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

module.exports.destroy=function(req,res)
{
    Post.findById(req.params.id,function(err,post){
        //.id means converting the object id into string

        if(post.user==req.user.id)//chechking if post belong to same user who is signed in
        {
            post.remove();
            Comment.deleteMany({post:req.params.id},function(err)
            {
                return res.redirect('back');

            });
        }
        else{
            return res.redirect('back');
        }

    });
}