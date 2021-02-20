const express=require('express');
const router=express.Router();
const passport=require('passport');
const Comment=require('../controller/comment_controller');

router.post('/create',Comment.create);

module.exports=router;