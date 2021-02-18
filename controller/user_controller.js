module.exports.homepage=function(req,res)
{
    // return res.end('<h1>this is user homepage</h1>');
    return res.render('user_homepage',{
        title:"user title"
    })
}
module.exports.homefeed=function(req,res)
{
    // return res.end('<h1> this is  user home feed</h1>');
    return res.render('homefeed',{
        title:"Home Feed"
    });
}
module.exports.homelastpage=function(req,res)
{
    return res.end('<h1>this is last home page</h1>');
}
module.exports.sign_up=function(req,res)
{
    return res.render('sign_up',{
        title:"Sign_up"

    });
}
module.exports.user_detail=function(req,res)
{
    
    return res.render('user_detail',{
        title:"user_detail"
    });
}
