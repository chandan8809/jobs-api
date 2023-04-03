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
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref: 'User',
        required:[true, "userId needed"]
    }
})

module.exports= mongoose.model("Task",taskSchema)