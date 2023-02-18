const express = require("express");
const connection = require("./db")
const app = express();
// require("dotenv").config()
// const PORT = process.env.PORT
const contractsRouter = require("./routes/contracts")
const userRouter = require("./routes/user")
app.use(express.json())
app.use("/contracts", contractsRouter)
app.use("/user", userRouter)


app.listen(7000, async() => {
    try{
        await connection;   
        console.log("database connected")
    }
    catch{
        console.log("Failed to connect to database")
    }
    console.log("running:7000")
})