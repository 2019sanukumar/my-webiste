const express=require('express');
const router=express.Router();
const passport=require('passport'); 

const Sign_in=require('../controller/sign_in_controller');
router.get('/',Sign_in.sign_in);
// router.post('/session',Sign_in.session);

router.post('/session',passport.authenticate(
    'local',
    {
        failureredirect:'/sign-in'
    },

),Sign_in.session);

module.exports=router;//exporting to index.js main file