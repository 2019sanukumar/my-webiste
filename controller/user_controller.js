const User_detail=require('../models/user_detail');
// const Post=require('../models')
const Post=require('../models/post');
const User=require('../models/user');

module.exports.homepage=function(req,res)
{
    // return res.end('<h1>this is user homepage</h1>');
    return res.render('user_homepage',{
        title:"user title"
    })
}
module.exports.homefeed=function(req,res)
{
    // return res.end('<h1> this is  user home feed</h1>');
    return res.render('homefeed',{
        title:"Home Feed"
    });
}
module.exports.homelastpage=function(req,res)
{
    return res.end('<h1>this is last home page</h1>');
}
module.exports.sign_up=function(req,res)
{
    return res.render('sign_up',{
        title:"Sign_up"

    });
}
module.exports.user_update=function(req,res)
{
    if(req.user.id==req.params.id)
    {
        User.findByIdAndUpdate(req.params.id,req.body,function(err,user)
        {
            return res.redirect('back');
        });
    }
    else{
        return res.status(401);

    }
 

    
    // return res.render('user_detail',{
    //     title:"user_detail"
    // });
}
module.exports.create_detail=function(req,res)
{
    console.log(req.body);
    User_detail.findOne({second_email:req.body.second_email},function(err,user)//here user is which is entred by the user
    {
        if(err){console.log('error in finding user'); return}
        if(!user)//user doesn't exist
        {
            User_detail.create(req.body,function(err,user)//setting stuff in models of user
            {
                if(err){console.log('error in signingup the page',err);return}//ye print ho rhi
                return res.redirect('/user');// after succesful completeion

            });

        }
        else
        {
            return res.redirect('/user');//second email exist
        }
    });

}


module.exports.homefeed= async function(req,res)
{
    // Post.find({},function(err,posts){//this will fetch all the post presentt in database in posts 

    //     return res.render('homefeed',{
    //         title:"HomeFeed",
    //         Posts:posts // this is seding posts to ejs for getting printed
    //     });
    // });



    //populate the user of each post
    // Post.find({})
    // .populate('user')
    // .populate({
    //     path:'comments',
    //     // populate:{
    //     //     path:'user'

    //     // }
    // })
    // .exec(function(err,posts){// this is findind all the Post from databse and popualting it to the user of given of given post
    //     User.find({},function(err,users){
    //         console.log(posts,"heelosfgssgddddddddddddd");
    //         return res.render('homefeed',{
    //         title:"HomeFeed",
    //         Posts:posts ,
    //         all_users:users// this is seding posts to ejs for getting printed
    //     });


        
        // using async await
        try{
            let posts=await Post.find({})
            .populate('user')
            .populate({
                path:'comments',
                populate:{
                    path:'user'
                }
            });
            let users=await User.find({});
            return res.render('homefeed',{
                title:"Home Fedd",
                Posts:posts,
                all_users:users
            });
        }
        catch(err)
        {
            console.log('Error',err);
            return;
        }
        
    // });






}

module.exports.about=function(req,res)
{
    User.findById(req.params.id,function(err,user){
        return res.render('about',{
            title:"About",
            profile_user:user
        
        });

    })
    

}