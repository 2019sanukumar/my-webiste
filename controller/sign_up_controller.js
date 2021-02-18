//importing models so that in it required data can be seacrhed
const User=require('../models/user');

module.exports.sign_up=function(req,res)//for sign-up page
{
    if(req.isAuthenticated()){// if it is authenticated
        res.redirect('/user');
    }

    return res.render('sign_up',{
        title:"Sign_up"
    });
}
//for signing up
module.exports.create_session=function(req,res)
{
    console.log(req.body)
    if(req.body.password!=req.body.confirmpassword)
    {
        return res.redirect('back');

    }
    User.findOne({email:req.body.email},function(err,user)//here user is which is entred by the user
    {
        if(err){console.log('error in finding user'); return}
        if(!user)//user doesn't exist
        {
            User.create(req.body,function(err,user)//setting stuff in models of user
            {
                if(err){console.log('error in signingup the page',err);return}//ye print ho rhi
                return res.redirect('/sign-in');// after succesful completeion

            });

        }
        else
        {
            return res.redirect('back');
        }


    });

}