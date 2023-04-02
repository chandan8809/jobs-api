const mongoose= require("mongoose")
const bcrypt=require("bcryptjs")
const jwt= require("jsonwebtoken")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        maxLength:50,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
   
})

userSchema.pre('save',async function(next) {
    const salt= await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password,salt)
    next();
  });

userSchema.methods.createToken = function(){
   return jwt.sign({userId:this._id,name:this.name},"secret",{
    expiresIn:"1d"
   })
}

userSchema.methods.comparePassword =  function(password){
    //if you use number password then it will throw error
    const match =  bcrypt.compare(password, this.password)
    return match
}

module.exports= mongoose.model("User", userSchema)