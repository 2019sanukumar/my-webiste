const express=require('express');
const router=express.Router();
const passport=require('passport');
const Comment=require('../controller/comment_controller');

router.post('/create',passport.checkAuthentication,Comment.create);
router.get('/destroy/:id',passport.checkAuthentication,Comment.destroy);
module.exports=router;