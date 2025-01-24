require("dotenv").config()
const express = require("express")
const app = express()
const ai = require("./routes/ai")
const db = require("./db_connection/db")
const cors = require("cors")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/v1",ai)
app.use(cors({origin:"*"}))



app.listen(process.env.PORT,()=>{
    console.log("APP IS RUNNING ON PORT : "+process.env.PORT)
})