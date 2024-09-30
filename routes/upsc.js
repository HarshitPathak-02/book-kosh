const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const {bookSchema, reviewSchema} = require("../Schema.js")
const Book = require("../Models/book")


router.get("/", wrapAsync(async (req,res)=>{
    const upscBooks = await Book.find({});
    res.render("upsc/home", {upscBooks})
}))

router.get("/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate("reviews").populate("owner");
    res.render("upsc/condition.ejs",{book})
}))

module.exports = router;