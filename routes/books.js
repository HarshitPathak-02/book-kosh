const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const {bookSchema, reviewSchema} = require("../Schema.js")
const Book = require("../Models/book")

const validateBook = (req,res,next)=>{
    let { error } = bookSchema.validate(req.body);
    if (error){
        let errmsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errmsg)
    } else {
        next();
    }
};


// these routes I have used for CRUD operations 
// index route for class 11th science books
router.get("/", wrapAsync(async (req,res)=>{
    const allBooks = await Book.find({});
    // const allBooks = await Book.find({});
    // res.render("Others/11/science/science11.ejs", {science11Books})
    res.render("books/index.ejs", {allBooks})
}))

// show route for class 11th science books
router.get("//:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    // const book = await Book.findById(id);
    res.redirect(`/books`)
}))

// route for getting form for adding book
router.get("/new", (req,res)=>{
    res.render("books/new.ejs")
})

// route for create
router.post('/',validateBook, wrapAsync(async (req,res,next)=>{
    const newBook = new Book(req.body.book);
    await newBook.save()
    console.log("saved")
    res.redirect("/books")
}))

// edit route
router.get("/:id/edit", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("books/edit.ejs", {book})
}))

// update route
router.put("/:id",validateBook, wrapAsync(async (req,res)=>{
    let {id}= req.params;
    await Book.findByIdAndUpdate(id, {...req.body.book});
    res.redirect(`/book/${id}`)
}))

// delete route
router.delete("/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Book.findByIdAndDelete(id);
    res.redirect("/books")

}))

module.exports = router;
