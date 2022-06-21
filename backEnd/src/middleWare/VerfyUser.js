const jwt = require("jsonwebtoken")
require("dotenv").config()
const verify = (req, res, next) => {
    const bearerHeader = req.headers["authorization"]
    if (bearerHeader !== undefined) {
        const token = bearerHeader.split(" ")[1]
        jwt.verify(token, process.env.Secret_key, (err, authData) => {
            if (err) {
                res.json({ err })

            } else if (authData) {
                req.token = { authData }

                next()
            }
        })
    } else {

        res.status(400).send("baerer not found.")
    }
}

module.exports = verify