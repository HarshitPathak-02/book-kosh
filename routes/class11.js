const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const Book = require("../Models/book")
const { class11Home, class11Science, class11Commerce, class11Arts, class11ArtsShow, class11CommerceShow, class11ScienceShow } = require("../controllers/class11.js")



router.get("/", class11Home)

router.get("/science", wrapAsync(class11Science))


router.get("/commerce", wrapAsync(class11Commerce))

router.get("/arts", wrapAsync(class11Arts))

router.get("/arts/:id/condition", wrapAsync(class11ArtsShow))

router.get("/science/:id/condition", wrapAsync(class11ScienceShow))

router.get("/commerce/:id/condition", wrapAsync(class11CommerceShow))

module.exports = router;

