
const bcrypt= require("bcryptjs")
const User = require("../model/user")
require('express-async-errors');

const register = async(req,res)=>{
   const user= await User.create(req.body)
   const token= user.createToken()
   res.status(201).json({user:user.name,token})
}

const login = async(req,res)=>{

    const {email,password} = req.body
    if(!email ||!password){
        return res.status(400).json({msg:"email or password not provided"})
    }
    const user= await User.findOne({email})
    if(!user){
        return res.status(401).json({msg:"no user found with this email"})
    }
    
    const isMatch= await bcrypt.compare(password,user.password)
    
    if(!isMatch){
        return res.status(401).json({msg:"wrong password"})
    }
    const token= user.createToken()
    return res.status(200).json({name:user.name, token})

   
}

module.exports={
    login,
    register
}