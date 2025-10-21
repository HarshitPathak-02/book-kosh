const express = require("express")
const router = express.Router({mergeParams:true})
const wrapAsync = require("../utils/wrapAsync.js")
const { addFavorite, index } = require("../controllers/favourites.js")

router.post('/',addFavorite)
router.get('/:userId',index)

module.exports = router;