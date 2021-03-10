const nodeMailer=require('../config/nodemailer');

//this is another away of exporting
exports.newComment= (comment)=> {
    console.log('inside new comment mailer');
    nodeMailer.transporter.sendMail({
        from:'qouracoll@new.com',
        to:comment.user.email,
        subject:"New Comment Made",
        html:'<h1> your comment is published</h1>'
        

    },(err,info)=>{
        if(err){
            console.log('Error in sending mail',err);
            return;
        }
    })
}