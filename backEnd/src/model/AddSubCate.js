const mongoose = require("mongoose")
// const bcrypt = require("bcryptjs")

const subCates = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    categoryOf: {
        type: String,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
})



// User.pre("save", async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10)
//     }
//     next()
// })

const subCategorysSchema = mongoose.model("subCategorys", subCates)

module.exports = subCategorysSchema