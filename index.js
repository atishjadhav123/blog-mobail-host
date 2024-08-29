const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { httpServer, app } = require("./socket/socket")
require("dotenv").config()

// const app = express()
app.use(express.json())
app.use(cors())

//routes
app.use("/api/blogs", require("./routes/blog.routes"))

//404   
app.use("*", (req, res) => {
    res.status(400).json({ message: "Resorce not found" })
})
//Error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: err.message || "Somthing Went wrong" })
})
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    httpServer.listen(process.env.PORT, console.log("SERVER RUNNING")
    )

})