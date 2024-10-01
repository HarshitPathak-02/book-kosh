const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const Book = require("../Models/book")
const {isLoggedIn, isOwner, validateBook} = require("../middleware.js");
const { bookIndex, bookNewForm, bookCreate, bookShow, bookUpdate, bookDelete, bookEditForm } = require("../controllers/book.js");




// these routes I have used for CRUD operations 
// index route for class 11th science books
router
  .route("/")
  .get(wrapAsync(bookIndex))
  .post(isLoggedIn, validateBook, wrapAsync(bookCreate))

// route for getting form for adding book
router.get("/new", isLoggedIn, bookNewForm)

// show route for class 11th science books
router
  .route("/:id")
  .get(wrapAsync(bookShow))
  .put(isLoggedIn, isOwner, validateBook, wrapAsync(bookUpdate))
  .delete(isLoggedIn, isOwner, wrapAsync(bookDelete))
  
// edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(bookEditForm))

module.exports = router;
