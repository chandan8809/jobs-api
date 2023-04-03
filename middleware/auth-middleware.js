
const jwt= require("jsonwebtoken")


const auth = async(req,res,next)=>{
   //we auth using headers
  
    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({msg:"auth error"})
    }
    const token = req.headers.authorization.split(" ")[1]
    
    console.log("token",token)
  
    try{
     
      const payload= jwt.verify(token,"secret")
      //attach the user to req
      console.log("pau",payload)

      req.user={userId:payload.userId, name:payload.name}
      next()
   }catch(err){
    console.log("err",err)
    return res.status(401).json({msg:"auth error"})
   }
}

module.exports = auth