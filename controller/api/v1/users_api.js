const User=require('../../../models/user');
const jwt=require('jsonwebtoken');

module.exports.createSession= async function(req,res)
{
    try{
        let user=await User.findOne({email:req.body.email});
        if(!user || user.password !=req.body.password){
            return res.json(422,{
                message:"invalid username password"

            });
        }
        return res.json(200,{
            message:'sign in succesfull',
            data:{
                token:jwt.sign(user.toJSON(),'backrev',{expiresIn:'1000'})
            }
        })

    }
    catch(err)
    {
        console.log('****',err);
        return res.json(500,{
            message:"Internal server error"
        });
    }
}