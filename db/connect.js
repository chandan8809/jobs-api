const mongoose= require("mongoose")

const connectDB = ()=>{
   return mongoose.connect("mongodb+srv://chandan123:chandan123@cluster0.f8bqkqh.mongodb.net/NEW-JOBS-API?retryWrites=true&w=majority")
}

module.exports = {connectDB}