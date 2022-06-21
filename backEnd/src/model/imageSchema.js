// const mongoose = require("mongoose")
// const bcrypt = require("bcryptjs")

// const imageSchema = new mongoose.Schema({
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     },
//     CreatedAt: {
//         type: Date,
//         default: Date.now
//     }
// })



// User.pre("save", async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10)
//     }
//     next()
// })

// const UserSchema = mongoose.model("image", imageSchema)

// module.exports = UserSchema