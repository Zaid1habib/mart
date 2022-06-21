const express = require("express")
require("./src/db/db")
const app = express()
const fileUpload = require('express-fileupload')
const cors = require("cors")
const dotenv = require("dotenv")
const cloudinary = require("./src/Cloudinary/cloudinary")

app.use(express.json())
app.use(cors())
dotenv.config();
app.use(fileUpload({
    useTempFiles: true,
}))
app.use("/", require("./src/Router/index"))
app.listen(5000, () => {
    console.log("3002 port.")
})