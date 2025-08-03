const jwt=require("jsonwebtoken")
const verifyTokenMiddleware=(req,res,next)=>{
const authHeader=req.headers.authorization
if(!authHeader.startsWith("Bearer ")) return res.status(401).send("Unauthorized user")
    const token=authHeader.split(" ")[1]
   try{ 
   const result=jwt.verify(token,process.env.JWT_SECRET)
   req.user=result
   next()
}
catch{
    res.status(401).send("Unauthorized user")
}
}

module.exports=verifyTokenMiddleware