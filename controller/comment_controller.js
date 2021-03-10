const Comment=require('../models/comment');
const Post=require('../models/post');

const commentsMailer=require('../mailers/comments_mailer');
// module.exports.create=function(req,res){
//     console.log("reached controller",req.body);
   

//     Post.findById(req.body.post,function(err,post)
//     {

//         if(err){console.log("error",err);return}//

//         if(post)
//         {
//             console.log(req.body.content)

//             Comment.create({
//                 content:req.body.content,
//                 post:req.body.post,
//                 user:req.user._id,


//             },function(err,comment)
//             {
//                 //hadle error
//                 if(err){console.log("error",err);return}


//                 // updating comentt
//                 post.comments.push(comment);
//                 post.save();
//                 res.redirect('/user/homefeed');
//             });
//         }

//     });
// }

module.exports.create= async function(req,res){
    console.log("reached controller",req.body);
    try{
        let post=await Post.findById(req.body.post);
        if(post)
        {
            let comment=await Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            });
            post.comments.push(comment);
            post.save();
            comment=await comment.populate('user','name email').execPopulate();
            commentsMailer.newComment(comment);
            if(req.xhr){
                return res.status(200).json({
                    data:{
                        comment:comment
                    },
                    message:"Poat Created"
                });
            }
            req.flash('success','comment Published');
            res.redirect('/');
        }

    }catch(err)
    {
        return;
    }
   

    // Post.findById(req.body.post,function(err,post)
    // {

    //     if(err){console.log("error",err);return}//

    //     if(post)
    //     {
    //         console.log(req.body.content)

    //         Comment.create({
    //             content:req.body.content,
    //             post:req.body.post,
    //             user:req.user._id,


    //         },function(err,comment)
    //         {
    //             //hadle error
    //             if(err){console.log("error",err);return}


    //             // updating comentt
    //             post.comments.push(comment);
    //             post.save();
    //             res.redirect('/user/homefeed');
    //         });
    //     }

    // });
}



module.exports.destroy=function(req,res)
{
    Comment.findById(req.params.id,function(err,comment){
        // if(err){return console.log(err);}
        if(comment.user==req.user.id)
        {
            let postId=comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId, {$pull:{comments:req.params.id}},function(err,post)
            {
                return res.redirect('back');
            });
        }
        else
        {
            return res.redirect('back');
        }
    });
}