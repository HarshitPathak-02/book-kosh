const Book = require("../Models/book")
const Review = require("../Models/review.js")

module.exports.class11ArtsShowComment = async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);
    newRev.by = req.user._id;

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/11/arts/${book._id}/condition`)
}

module.exports.class11ArtsDeleteComment = async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    

    req.flash("success", "Review Deleted")

    res.redirect(`/11/arts/${id}/condition`)
}

module.exports.class11ScienceShowComment = async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);
    newRev.by = req.user._id;
    // console.log(newRev);
    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/11/science/${book._id}/condition`)
}

module.exports.class11ScienceDeleteComment = async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    

    req.flash("success", "Review Deleted")

    res.redirect(`/11/science/${id}/condition`)
}

module.exports.class11CommerceShowComment = async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);
    newRev.by = req.user._id;

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/11/commerce/${book._id}/condition`)
}

module.exports.class11CommerceDeleteComment = async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    

    req.flash("success", "Review Deleted")

    res.redirect(`/11/commerce/${id}/condition`)
}

module.exports.class12ArtsShowComment = async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);
    newRev.by = req.user._id;
    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/12/arts/${book._id}/condition`)
}

module.exports.class12ArtsDeleteComment = async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    

    req.flash("success", "Review Deleted")

    res.redirect(`/12/arts/${id}/condition`)
}

module.exports.class12ScienceShowComment = async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);
    newRev.by = req.user._id;

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/12/science/${book._id}/condition`)
}

module.exports.class12ScienceDeleteComment = async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    

    req.flash("success", "Review Deleted")

    res.redirect(`/12/science/${id}/condition`)
}

module.exports.class12CommerceShowComment = async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);
    newRev.by = req.user._id;

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/12/commerce/${book._id}/condition`)
}

module.exports.class12CommerceDeleteComment = async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    

    req.flash("success", "Review Deleted")

    res.redirect(`/12/commerce/${id}/condition`)
}

module.exports.upscShowComment = async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);
    
    newRev.by = req.user._id;

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    req.flash("success", "Review Added")

    res.redirect(`/upsc/${book._id}/condition`)
}

module.exports.upscDeleteComment = async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    

    req.flash("success", "Review Deleted")

    res.redirect(`/upsc/${id}/condition`)
}