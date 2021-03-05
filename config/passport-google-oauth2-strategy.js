const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/user');


passport.use(new googleStrategy({
    clientID:"1062077741370-c44pmlfs0q0m343k06p9254uha0rdv4s",
    clientSecret:"HqXSa7MayC9VHWND_p5odaQR",
    callbackURL:"http://localhost:5000/user/auth/google/callback"
    },
    function(accessToken,refreshToken,profile,done){
        //find the user
        User.findOne({email:profile.emails[0].value}).exec(function(err,user){
            if(err){console.log('error in google strategy passport');return;}

            console.log(profile);
            if(user){
                //if found set the user as req.user
                return done(null,user);
            }
            else
            {
                User.create({
                    name:profile.displayName,
                    emial:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                },function(err,user){
                    if(err){console.log('error in creating user',err);return;}
                    return done(null,user);
                });
            }

        });
    }



));
module.exports=passport;