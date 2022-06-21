const express = require("express")
const router = express.Router()
const ProductsSchema = require("../model/Addproduct")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cloudinary = require("../Cloudinary/cloudinary")
const verify = require("../middleWare/VerfyUser")

router.post("/Addproduct", verify, cors(), async (req, res) => {
    const data = req.body
    const id = req.token.authData._id
    // console.log("Email", id)
    const uploadImage = data.images.map((dat) => {
        const newimage = cloudinary.uploader.upload(dat,
            {
                public_id: `${id}Avater`,
                allowed_formats: ["png", "jpg", "jpeg", "svg"],
            }

        );
        // console.log("newimage", newimage)
        return newimage
    })
    //  console.log(uploadImage)
    Promise.all(uploadImage).then(async function (results) {
        // console.log(data, "data req body")
        // console.log(uploadImage, "uploadImage")
        data.images = results.map(d => d?.url)
        console.log(data)
        // res.send(data)
        //     console.log("Result", results);
        //     res.send(data)
        //     // return results
        //     // const Product = {
        //     //     category: data.category,
        //     //     collectionName: data.collectionName,
        //     //     description: data.description,
        //     //     price: data.price,
        //     //     productName: data.productName,
        //     //     images: results
        //     // }
        //     // res.send({Product , product:"new"})
        try {
            const validateProduct = new ProductsSchema(data)
            const AddProduct = await validateProduct.save()
            res.json(AddProduct)
        } catch (e) {
            res.status(400).send("internal server error.", e)
        }
    })


})
router.get("/Products", verify, cors(), async (req, res) => {
    try {
        const findProduct = await ProductsSchema.find()
        console.log(findProduct)
        res.status(200).send(findProduct)
    } catch (e) {
        res.status(400).send({ error: "can not find any product" })
    }
})
router.put("/Products", verify, cors(), async (req, res) => {
    try {
        const findProduct = await ProductsSchema.find()
        console.log("findProduct",findProduct)
        res.status(200).send(findProduct)
    } catch (e) {
        res.status(400).send({ error: "can not find any product" })
    }
})

module.exports = router