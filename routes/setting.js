const express=require('express');
const router=express.Router();

const SettingCont=require('../controller/setting_controller');// fetching controller so that it can perform set of action that is wriiten in tis controller
router.get('/',SettingCont.settingHomepage);//fetching Homepage from setting controller
router.get('/setting-further',SettingCont.settingfurther);
router.get('/setting-further/setting-lastpage',SettingCont.settinglastpage);


module.exports=router// so that index.js of main can use it
