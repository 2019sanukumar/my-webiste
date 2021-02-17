//set of diiferent action
module.exports.home=function(req,res)
{
    return res.end('<h1> this is first line</h1>');
}
module.exports.homepage=function(req,res)
{
    return res.end('<h1> this is homepage <h1>');
}
module.exports.head=function(req,res)
{
    return res.render('index',{
        title:"INDEX PAGE",
        footer:"This is index footer"
    });
}
