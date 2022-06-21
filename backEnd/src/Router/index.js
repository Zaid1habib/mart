const express = require("express")
const router = express.Router()

router.use("/Auth",require("./Auth"))
router.use("/Add-Product-Collection",require("./Add-GetProduct"))
router.use("/AddCate-EditeCate" , require("./AddCate"))

module.exports = router
