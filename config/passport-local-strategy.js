const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');//fetchinh up the user from models
//authencticaition using passport
passport.use(new LocalStrategy({//telling passport to use pasportlocal
    usernameField:'email'

    },
    function(email,password,done)
    {
        //finding the user here email 
        User.findOne({email:email},function(err,user)
        {
            if(err){console.log('error in finding user');
            return done(err);
            }
            if(!user || user.password!=password)
            {
                console.log('Invalid Password');
                return done(null,false);
                
            }
            return done(null,user);

        });
        
    }
));

//serislisgin the user to decide which key to be kept in cookie
passport.serializeUser(function(user,done)
{
    done(null,user.id);

});

//desrieling the user from the key in the cookies
passport.deserializeUser(function(id,done)
{
    User.findById(id,function(err,user)
    {
        if(err)
        {
            console.log('error in finding the user->passport');
            return done(err);


        }
        return done(null,user);
    });

});

//check if user is authenticated

passport.checkAuthentication=function(req,res,next){
    //if user is signed in , then pass on the request to the next function(controller action)
    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('sign-in');// if user is not signed in

}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
     
        //req.user cosntinas the current signed in user from the session cookie and we are just
        //to locals for the views
        res.locals.user=req.user;
        
    }
    next();

}














module.exports=passport;//exporting the passport