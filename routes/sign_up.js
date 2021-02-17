const express=require('express');
const router=express.Router();
const sign_up=require('../controller/sign_up_controller');
router.get('/',sign_up.sign_up);
router.post('/create',sign_up.create_session);

module.exports=router;