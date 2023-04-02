const express= require("express")
const { connectDB } = require("./db/connect")
const { errorHandlerMiddleware } = require("./middleware/error-handler")
const { routeNotFoundMiddle } = require("./middleware/not-found")
const cors=require("cors")


const app= express()

//routers
const authRouter=require("./router/auth")
const taskRouter=require("./router/task")


//middlewere
app.use(express.json())
app.use(cors())

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/tasks",taskRouter)

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use(routeNotFoundMiddle)
app.use(errorHandlerMiddleware)

const port=process.env.port || 5000

const start=async()=>{
    await connectDB()
    app.listen(port,()=>{
        console.log(`app is listing on ${port}`)
    })
}

start()