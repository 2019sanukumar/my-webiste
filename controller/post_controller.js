module.exports.post=function(req,res)
{
    // return res.end('<h1> this is post -feed<h1>');
    return res.render('post',{
        title:"post"
    });
}