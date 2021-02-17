module.exports.settingHomepage=function(req,res)
{
    // return res.end('<h1> this is setting homepage</h1>');
    return res.render('homepage_setting',{
        title:"Setting homepage",
        footer:"setting"
    });
}
module.exports.settingfurther=function(req,res)
{
    // return res.end('<h1> this is further setting</h1>');
    return res.render('setting_further',{
        title:"Setting-further",
        footer:"setting"

    

    });
}
module.exports.settinglastpage=function(req,res)
{
    // return res.end('<h1> this is the last page of setting<h1>');
    return res.render('setting_lastpage',{
        title:"Setting-lastpage"
    });

}