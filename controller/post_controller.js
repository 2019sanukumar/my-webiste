const Post=require('../models/post');
const Comment=require('../models/comment');

module.exports.create_post= async function(req,res)
{
    // console.log(req.body);
    // Post.create({
    //     content:req.body.content,
    //     user:req.user._id// this user._id will store the id only where as user.id have whole data and this is creted in passport-lpcal strategy in setsutenticated user
    // },function(err,post)
    // {
    //     if(err){console.log('error in creating a post');return ;}

    //     return res .redirect('back');

    // });

    try{
        let post=await Post.create({
            content:req.body.content,
            user:req.user._id
        });

        // if(req.xhr)
        // {
        //     return res.status(200).json({
        //         data:{
        //             post:post
        //         },
        //         message:"post created"
        //     });
        // }
        req.flash('success','Post Publisdhed');
        return res.redirect('back');

    }catch(err){
        req.flash('error',err);
        return res.redirect('back');
    }
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