const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../controller/user_controller');//fetching user controller for using for the specfied route
const Sign_in=require('../controller/sign_in_controller');
router.get('/',passport.checkAuthentication,User.homepage);
router.get('/homefeed',passport.checkAuthentication,User.homefeed);
router.get('/user-feed/last-page',passport.checkAuthentication,User.homelastpage);
router.post('/detail',passport.checkAuthentication,User.create_detail);
router.post('/user-update/:id',passport.checkAuthentication,User.user_update);// updating user
router.get('/about/:id',passport.checkAuthentication,User.about);
// router.get('/user-feed',passport.checkAuthentication,User.user_feed);
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/sign-in'}),Sign_in.session);



module.exports=router;