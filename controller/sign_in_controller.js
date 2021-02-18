module.exports.sign_in=function(req,res)//rendering the sign in page
{
    if(req.isAuthenticated()){// if user is signed in redirect it to user page
        res.redirect('/user');
    }
    return res.render('sign_in',{
        title:"Sign_in"
    });
}
/// moving to different branch
module.exports.session=function(req,res)
{
    return res.redirect('/user');
   
}
module.exports.destroySession=function(req,res){// for signing oout
    req.logout();
    return res.redirect('/');

}
