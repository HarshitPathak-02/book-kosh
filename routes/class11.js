const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const {bookSchema, reviewSchema} = require("../Schema.js")
const Book = require("../Models/book")



router.get("/", (req,res)=>{
    res.render("Others/11/home")
})

router.get("/science", wrapAsync(async (req,res)=>{
    const science11Books = await Book.find({});
    res.render("Others/11/science/science11", {science11Books})
}))


router.get("/commerce", wrapAsync(async (req,res)=>{
    const commerce11Books = await Book.find({});
    res.render("Others/11/commerce/commerce11", {commerce11Books})
}))

router.get("/arts", wrapAsync(async (req,res)=>{
    const arts11Books = await Book.find({});
    res.render("Others/11/arts/arts11", {arts11Books})
}))

router.get("/arts/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("Others/condition/condition.ejs",{book})
}))

router.get("/science/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate("reviews");
    res.render("Others/condition/condition.ejs",{book})
}))

router.get("/commerce/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("Others/condition/condition.ejs",{book})
}))

module.exports = router;

