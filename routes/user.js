const express=require('express');
const router=express.Router();
const User=require('../controller/user_controller');//fetching user controller for using for the specfied route

router.get('/',User.homepage);
router.get('/user-feed',User.homefeed);
router.get('/user-feed/last-page',User.homelastpage);
// router.post('/sign-up',User.sign_up);


module.exports=router;