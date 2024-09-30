const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const {bookSchema, reviewSchema} = require("../Schema.js")
const Book = require("../Models/book")
const passport = require("passport");
const {isLoggedIn} = require("../middleware.js")

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

// route for getting form for adding book
router.get("/new", isLoggedIn, (req,res)=>{
    res.render("books/new.ejs")
})

// route for create
router.post('/',validateBook, wrapAsync(async (req,res,next)=>{
    const newBook = new Book(req.body.book);
    newBook.owner = req.user._id;
    await newBook.save()
    req.flash("success","new book added")
    // console.log("saved")
    res.redirect("/")
}))

// show route for class 11th science books
router.get("/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    if (!book) {
        req.flash("error", "Book you requested for does not exist")
        res.redirect("/books")
    }
    res.render("books/show.ejs", {book})
}))

// edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    if (!book) {
        req.flash("error", "Book you requested for does not exist")
        res.redirect("/books")
    }
    res.render("books/edit.ejs", {book})
}))

// update route
router.put("/:id", isLoggedIn, validateBook, wrapAsync(async (req,res)=>{
    let {id}= req.params;
    await Book.findByIdAndUpdate(id, {...req.body.book});
    req.flash("success", "Book Details Updated")
    res.redirect(`/books/${id}`)
}))

// delete route
router.delete("/:id", isLoggedIn, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Book.findByIdAndDelete(id);
    req.flash("success", "Book Deleted")
    res.redirect("/books")

}))

module.exports = router;
