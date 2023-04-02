const mongoose=require("mongoose")

const taskSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    status:{
        type:String,
        enum : ['pending',"completed"],
        default:"pending",
    }
})

module.exports= mongoose.model("Task",taskSchema)