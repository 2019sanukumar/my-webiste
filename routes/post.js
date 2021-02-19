const express=require('express');
const router=express.Router();
const passport=require('passport');

const Post=require('../controller/post_controller');
// router.get('/',Post.post);
router.post('/user-feed',passport.checkAuthentication,Post.create_post);




module.exports=router;