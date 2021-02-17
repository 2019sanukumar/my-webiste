const express=require('express');
const router=express.Router();

const Sign_in=require('../controller/sign_in_controller');
router.get('/',Sign_in.sign_in);

module.exports=router;//exporting to index.js main file