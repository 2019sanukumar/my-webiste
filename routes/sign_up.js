const express=require('express');
const router=express.Router();
const sign_up=require('../controller/sign_up_controller');
router.get('/',sign_up.sign_up);

module.exports=router;