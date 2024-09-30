const Book = require("./Models/book");
const ExpressError = require("./utils/ExpressError.js");
const {bookSchema, reviewSchema} = require("./Schema.js");
const Review = require("./Models/review.js");


module.exports.isLoggedIn = (req, res , next)=>{
    if (!req.isAuthenticated()){
        req.flash("error","You must be logged in to add a book!");
        return res.redirect("/")
    }
    next();
};

module.exports.isOwner = async (req,res,ext)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    if (!book.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to update!")
        return res.redirect(`/`)
    }
    next();
}

module.exports.isReviewAuthor = async (req,res,ext)=>{
    let {reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if (!review.by._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to delete a review!")
        return res.redirect(`/`)
    }
    next();
}

module.exports.validateBook = (req,res,next)=>{
    let { error } = bookSchema.validate(req.body);
    if (error){
        let errmsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errmsg)
    } else {
        next();
    }
};

module.exports.validateReview = (req,res,next)=>{
    let { error } = reviewSchema.validate(req.body);
    // console.log(error)
    if (error){
        let errmsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errmsg)
    } else {
        next();
    }
};