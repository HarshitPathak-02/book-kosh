const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const Book = require("../Models/book")

// const validateBook = (req,res,next)=>{
//     let { error } = bookSchema.validate(req.body);
//     if (error){
//         let errmsg = error.details.map((el)=> el.message).join(",");
//         throw new ExpressError(400,errmsg)
//     } else {
//         next();
//     }
// };

router.get("/", (req,res)=>{
    res.render("12/home")
})

router.get("/science", wrapAsync(async (req,res)=>{
    const science12Books = await Book.find({});
    res.render("12/science/science12", {science12Books})
}))

router.get("/commerce", wrapAsync(async (req,res)=>{
    const commerce12Books = await Book.find({});
    res.render("12/commerce/commerce12", {commerce12Books})
}))

router.get("/arts", wrapAsync(async (req,res)=>{
    const arts12Books = await Book.find({});
    res.render("12/arts/arts12", {arts12Books})
}))

router.get("/arts/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate("reviews").populate("owner");
    res.render("12/arts/condition.ejs",{book})
}))

router.get("/science/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate("reviews").populate("owner");
    res.render("12/science/condition.ejs",{book})
}))

router.get("/commerce/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate("reviews").populate("owner");
    res.render("12/commerce/condition.ejs",{book})
}))

module.exports = router;