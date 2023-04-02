const express = require("express")
const { 
    getAllTasks,
    createTask,
    deleteTask, 
    updatTask
 } = require("../controller/task")
const router = express.Router()

router.get("/",getAllTasks)
router.post("/",createTask)
router.delete("/:id",deleteTask)
router.patch("/:id",updatTask)


module.exports=router