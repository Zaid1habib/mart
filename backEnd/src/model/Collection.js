const mongoose = require("mongoose")
// const bcrypt = require("bcryptjs")

const Collections = new mongoose.Schema({
    Category: {
        type: String,
        required: true,
    },
    collectionName: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },

    CreatedAt: {
        type: Date,
        // default: Date.now
    }
})

const collectionSchema = mongoose.model("ProductCollections", Collections)

module.exports = collectionSchema
