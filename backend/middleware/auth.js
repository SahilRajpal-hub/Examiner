const User=require("../models/user");
const jwt=require("jsonwebtoken");

const auth=async function(req,res,next){
   try {
       const token=req.header("Authorization").replace("Bearer ","");
       const decoded=jwt.verify(token,"SaChaudhary");

       const user=await User.findOne({_id:decoded._id,"tokens.token":token});
       if(!user){
           throw new Error();
       }
       req.token=token;
    req.user=user;
    next();
   } catch (e) {
       res.status(401).send({Error:"Please authenticate"});
   }
}

module.exports=auth;