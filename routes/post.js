const express=require('express');
const router=express.Router();
const Post=require('../controller/post_controller');
router.use('/',Post.post);




module.exports=router;