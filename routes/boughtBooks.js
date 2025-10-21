const express = require("express")
const router = express.Router({mergeParams:true})
const wrapAsync = require("../utils/wrapAsync.js")
const { addBoughtBooks, index } = require("../controllers/boughtBooks.js")

router.post('/',addBoughtBooks)
router.get('/:userId',index)

module.exports = router;