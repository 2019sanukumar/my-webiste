const User_detail=require('../models/user_detail');

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
module.exports.user_detail=function(req,res)
{
    
    return res.render('user_detail',{
        title:"user_detail"
    });
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
