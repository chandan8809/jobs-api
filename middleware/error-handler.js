const errorHandlerMiddleware=(err,req,res,next)=>{
    console.log("err",err)
    return res.status(500).json({ err })
}

module.exports={errorHandlerMiddleware}