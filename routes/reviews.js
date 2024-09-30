const express = require("express")
const router = express.Router({mergeParams:true})
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require("../Schema.js")
const Book = require("../Models/book")
const Review = require("../Models/review.js")
const {isLoggedIn} = require("../middleware.js")

const validateReview = (req,res,next)=>{
    let { error } = reviewSchema.validate(req.body);
    // console.log(error)
    if (error){
        let errmsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errmsg)
    } else {
        next();
    }
};


// reviews routes
// post review
router.post("/11/science/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/11/science/${book._id}/condition`)
}))

router.post("/11/arts/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/11/arts/${book._id}/condition`)
}))

router.post("/11/commerce/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/11/commerce/${book._id}/condition`)
}))

router.post("/12/science/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/12/science/${book._id}/condition`)
}))

router.post("/12/arts/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/12/arts/${book._id}/condition`)
}))

router.post("/12/commerce/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/12/commerce/${book._id}/condition`)
}))

router.post("/upsc/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/upsc/${book._id}/condition`)
}))

//delete review
router.delete('/11/science/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted")

    res.redirect(`/11/science/${id}/condition`)
}))

router.delete('/11/arts/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted")

    res.redirect(`/11/arts/${id}/condition`)
}))

router.delete('/11/commerce/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted")

    res.redirect(`/11/commerce/${id}/condition`)
}))

router.delete('/12/science/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted")

    res.redirect(`/12/science/${id}/condition`)
}))

router.delete('/12/arts/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted")

    res.redirect(`/12/arts/${id}/condition`)
}))

router.delete('/12/commerce/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted")

    res.redirect(`/12/commerce/${id}/condition`)
}))

router.delete('/upsc/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted")

    res.redirect(`/upsc/${id}/condition`)
}))
// end of reviews routes


module.exports = router;