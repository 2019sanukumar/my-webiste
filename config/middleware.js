module.exports.setFlash=function(req,res,next)
// setting up middleware for flash
{
    res.locals.flash={
        'success':req.flash('success'),
        'error':req.flash('error')
    }
    next();

}
