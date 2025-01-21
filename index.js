require("dotenv").config()
const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    console.log(req.ip)
    res.send(req.ip)
})




app.listen(process.env.PORT,()=>{
    console.log("APP IS RUNNING ON PORT : "+process.env.PORT)
})