const mongoose = require("mongoose")
// const bcrypt = require("bcryptjs")

const Products = new mongoose.Schema({
    collectionName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
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

const ProductsSchema = mongoose.model("Products", Products)

module.exports = ProductsSchema