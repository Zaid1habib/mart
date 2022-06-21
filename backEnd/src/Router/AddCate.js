const express = require("express")
const router = express.Router()
const subCategorysSchema = require("../model/AddSubCate")
const MainCategorysSchema = require("../model/AddmainCategory")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cloudinary = require("../Cloudinary/cloudinary")
const verify = require("../middleWare/VerfyUser")


router.post("/AddCate", verify, async (req, res) => {
    const data = req.body
    if (!data.categoryOf || !data.categoryName) {

        res.send({ Error: "pls fill all field" })

    } else if (data.categoryOf === "Main category") {
        const MatchCateName = await MainCategorysSchema.find({
            categoryName: data.categoryName
        })
        if (MatchCateName.length === 0) {
            const verifyData = new MainCategorysSchema(data)
            const saveMainCateData = await verifyData.save()
            res.send(saveMainCateData)
        } else {
            res.send({ error: "can not add dublicat category" })

        }


    }
    else {
        const MatchCateName = await subCategorysSchema.find({
            categoryName: data.categoryName,
            categoryOf: data.categoryOf
        })

        if (MatchCateName.length === 0) {

            const verifyData = new subCategorysSchema(data)
            const saveSubCateData = await verifyData.save()
            res.send(saveSubCateData)

        } else {

            res.send({ error: "can not add dublicat Subcategory" })

        }

    }


    // const findLastCategoryKey = await MainCategorysSchema.findOne({})
    //     const findLastCategoryKey = await MainCategorysSchema.find().sort({ _v: -1 }).limit(1)
    //     console.log(findLastCategoryKey, "finded")
    //     if (findLastCategoryKey.length === 0) {
    //         const newData = {
    //             categoryOf:data.categoryOf,
    //             categoryName: data.categoryName,
    //         }
    //          if (data.categoryOf === "Main category") {

    //             const verifyData = new MainCategorysSchema(newData)
    //             const saveMainCateData =await verifyData.save()
    //             res.send(saveMainCateData)

    //         }

    //     } else if(findLastCategoryKey._v > 0) {

    //     }
    // }


})
router.get("/Category", verify, async (req, res) => {
    try {

        const findMainCate = await MainCategorysSchema.find()
        const findSubCate = await subCategorysSchema.find()
        res.status(200).send({ findMainCate, findSubCate })
    } catch {

        res.status(400).send({ error: "something went wrong getting maincategory " })
    }
})
router.put("/UpdateCategory/:id", verify, async (req, res) => {
    const data = req.body
    const id = req.params.id
    console.log(data, "updating")
    try {
        if (data.Maincate === true) {
            console.log("main")
            const update = await MainCategorysSchema.findByIdAndUpdate(id, { $set: data}, { new: true })

            res.status(200).send({ success: "MainCategory updated Successfully" })
        } else {
            console.log("subcate")
            const findSubCate = await subCategorysSchema.findByIdAndUpdate(id, { $set: data }, { new: true })
            res.status(200).send({ success: "SubCategory updated Successfully" })
        }
    } catch {

        res.status(400).send({ error: "something went wrong getting maincategory " })
    }
})

module.exports = router