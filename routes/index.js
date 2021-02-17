const express=require('express');
const router=express.Router();
const Home1=require('../controller/home_controller');


router.get('/',Home1.head);
// router.get('/',Home1.home,Home1.head);
router.get('/homepage',Home1.homepage);
router.use('/setting',require('./setting'));//this is teeling that for any request leading to seeting we require it's neighbout route which is setting
router.use('/user',require('./user'));
//this is telling to require action wriiten in user route for path after:/users
router.use('/post',require('./post'));
router.use('/sign-in',require('./sign_in'));
router.use('/sign-up',require('./sign_up'));


module.exports=router;