const express=require('express');
const router=express.Router();
const passport=require('passport');

const Sign_in=require('../controller/sign_in_controller');

router.get('/',Sign_in.destroySession);

module.exports=router;