const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://zaid:zaidkhan12345@cluster0.f27hv.mongodb.net/test").then(() => {
    console.log("data base connected successfully")
}).catch((e) => {
    console.log("error : can't connect to data base")
})
