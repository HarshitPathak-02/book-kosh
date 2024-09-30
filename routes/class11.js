const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const Book = require("../Models/book")



router.get("/", (req,res)=>{
    res.render("11/home")
})

router.get("/science", wrapAsync(async (req,res)=>{
    const science11Books = await Book.find({});
    res.render("11/science/science11", {science11Books})
}))


router.get("/commerce", wrapAsync(async (req,res)=>{
    const commerce11Books = await Book.find({});
    res.render("11/commerce/commerce11", {commerce11Books})
}))

router.get("/arts", wrapAsync(async (req,res)=>{
    const arts11Books = await Book.find({});
    res.render("11/arts/arts11", {arts11Books})
}))

router.get("/arts/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("11/arts/condition.ejs",{book})
}))

router.get("/science/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("11/science/condition.ejs",{book})
}))

router.get("/commerce/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate({path:"reviews",populate: {
        path:"by"
    }}).populate("owner");
    res.render("11/commerce/condition.ejs",{book})
}))

module.exports = router;

