const express = require("express")
const router = express.Router()
const userSchema = require("../model/user")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cloudinary = require("../Cloudinary/cloudinary")
require("dotenv").config()

router.post("/SIGNUP", cors(), async (req, res) => {
    const data = req.body

    const uploadImage = await cloudinary.uploader.upload(data.image,
        {
            public_id: `${data.email}Avater`,
            allowed_formats: ["png", "jpg", "jpeg", "svg"],
            // upload_preset: "unsigned_upload"
        },
        function (error, result) {
            if (error) {
                console.log(error)
            } else if (result) {
                console.log(result);
            }
        });

    try {

        if (uploadImage.url) {

            try {

                const findUser = await userSchema.findOne({ email: data.email })
                console.log(findUser)
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                if (!data.email || !data.password || !data.firstName || !data.lastName) {
                    res.send({ msg: "pls fill all feld" })
                }
                else if (!data.email.match(mailformat)) {
                    res.send({ msg: "invalid email format." })
                }
                else if (findUser !== null) {
                    res.send({ error: "This user already exists" })
                } else if (data.email && data.password && data.firstName && data.lastName) {
                    console.log("working")
                    const userInfo = {
                        email: data.email,
                        password: data.password,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        Avatar: uploadImage.url,
                        role: data.role,
                    }
                    const validate = new userSchema(userInfo)
                    const createUser = await validate.save()
                    res.status(200).send({ success: "Your account has been successfully created" })
                }
            } catch (e) {
                res.status(400).send({ error: e.message })

            }
        }

    }
    catch (e) {
        res.send({ error: e.message })
    }
})
router.post("/Login", cors(), async (req, res) => {
    const data = req.body
    console.log(process.env.Secret_key)
    try {
        const findUser = await userSchema.findOne({ email: data.email })
        console.log(findUser, "user")
        if (findUser !== null) {
            const matching = await bcrypt.compare(data.password, findUser.password)
            if (matching === false) {
                res.send({ error: "Please Enter valid Email Password" })
            } else if (matching === true) {
                const token = jwt.sign({ _id: findUser._id, firstName: findUser.firstName }, process.env.Secret_key)
                res.status(200).json({ token: token, firstName: findUser.firstName, lastName: findUser.lastName, Avatar: findUser.Avatar })
            }
        }
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

module.exports = router