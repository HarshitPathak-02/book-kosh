const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const { upscShow, upscHome } = require("../controllers/upsc.js");


router.get("/", wrapAsync(upscHome))

router.get("/:id/condition", wrapAsync(upscShow))

module.exports = router;