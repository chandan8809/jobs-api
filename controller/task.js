const Task= require("../model/task")

const getAllTasks = async(req,res)=>{
    const tasks=await Task.find({})
    res.status(200).json({tasks})
}

const createTask = async(req,res)=>{
    const task= await Task.create(req.body)
    res.status(201).json({task})
}


const deleteTask=async(req,res)=>{
    const {params:{id:jobId}}=req
  
    const task= await Task.findOneAndRemove({_id:jobId})
    if(!task){
        return res.status(400).json({msg:"not found"})
    }
    return res.status(200).json({msg:"deleted success"})
 }

const updatTask=async(req,res)=>{
    const {params:{id:jobId}}=req
  
    const task= await Task.findOneAndUpdate({_id:jobId},{status:"completed"},{
        new:true
    })
    if(!task){
        return res.status(400).json({msg:"not found"})
    }
    return res.status(200).json({msg:"updated success"})
 }


module.exports={
    getAllTasks,
    createTask,
    deleteTask,
    updatTask
}
