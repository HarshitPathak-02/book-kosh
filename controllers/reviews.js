const Book = require("../Models/book");
const Review = require("../Models/review.js");
const mongoose = require("mongoose");
module.exports.create = async (req, res) => {
  console.log("review create call hua");
  try {
    const { comment, rating, userId, bookId } = req.body;

    if (!comment || !rating || !userId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const review = new Review({
      comment,
      rating,
      by: new mongoose.Types.ObjectId(String(userId)), // linking to User
      book: new mongoose.Types.ObjectId(String(bookId)), // linking to User
    });

    await review.save();
    res.status(201).json({ success: true, message: "Review saved", review });
  } catch (error) {
    console.error("Review save error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.index = async (req, res) => {
  console.log("review index call hua");
  try {
    const { bookId } = req.params;
    const reviews = await Review.find({ book: bookId }).populate("by", "fullname");

    res.status(200).json({ data: reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.class11ArtsShowComment = async (req, res) => {
  let { id } = req.params;
  let book = await Book.findById(id);
  let newRev = new Review(req.body.review);
  newRev.by = req.user._id;

  book.reviews.push(newRev);

  await newRev.save();
  await book.save();

  req.flash("success", "Review Added");

  res.redirect(`/11/arts/${book._id}/condition`);
};

module.exports.class11ArtsDeleteComment = async (req, res) => {
  let { id, reviewId } = req.params;
  await Book.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted");

  res.redirect(`/11/arts/${id}/condition`);
};

module.exports.class11ScienceShowComment = async (req, res) => {
  let { id } = req.params;
  let book = await Book.findById(id);
  let newRev = new Review(req.body.review);
  newRev.by = req.user._id;
  // console.log(newRev);
  book.reviews.push(newRev);

  await newRev.save();
  await book.save();

  req.flash("success", "Review Added");

  res.redirect(`/11/science/${book._id}/condition`);
};

module.exports.class11ScienceDeleteComment = async (req, res) => {
  let { id, reviewId } = req.params;
  await Book.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted");

  res.redirect(`/11/science/${id}/condition`);
};

module.exports.class11CommerceShowComment = async (req, res) => {
  let { id } = req.params;
  let book = await Book.findById(id);
  let newRev = new Review(req.body.review);
  newRev.by = req.user._id;

  book.reviews.push(newRev);

  await newRev.save();
  await book.save();

  req.flash("success", "Review Added");

  res.redirect(`/11/commerce/${book._id}/condition`);
};

module.exports.class11CommerceDeleteComment = async (req, res) => {
  let { id, reviewId } = req.params;
  await Book.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted");

  res.redirect(`/11/commerce/${id}/condition`);
};

module.exports.class12ArtsShowComment = async (req, res) => {
  let { id } = req.params;
  let book = await Book.findById(id);
  let newRev = new Review(req.body.review);
  newRev.by = req.user._id;
  book.reviews.push(newRev);

  await newRev.save();
  await book.save();

  req.flash("success", "Review Added");

  res.redirect(`/12/arts/${book._id}/condition`);
};

module.exports.class12ArtsDeleteComment = async (req, res) => {
  let { id, reviewId } = req.params;
  await Book.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted");

  res.redirect(`/12/arts/${id}/condition`);
};

module.exports.class12ScienceShowComment = async (req, res) => {
  let { id } = req.params;
  let book = await Book.findById(id);
  let newRev = new Review(req.body.review);
  newRev.by = req.user._id;

  book.reviews.push(newRev);

  await newRev.save();
  await book.save();

  req.flash("success", "Review Added");

  res.redirect(`/12/science/${book._id}/condition`);
};

module.exports.class12ScienceDeleteComment = async (req, res) => {
  let { id, reviewId } = req.params;
  await Book.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted");

  res.redirect(`/12/science/${id}/condition`);
};

module.exports.class12CommerceShowComment = async (req, res) => {
  let { id } = req.params;
  let book = await Book.findById(id);
  let newRev = new Review(req.body.review);
  newRev.by = req.user._id;

  book.reviews.push(newRev);

  await newRev.save();
  await book.save();

  req.flash("success", "Review Added");

  res.redirect(`/12/commerce/${book._id}/condition`);
};

module.exports.class12CommerceDeleteComment = async (req, res) => {
  let { id, reviewId } = req.params;
  await Book.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted");

  res.redirect(`/12/commerce/${id}/condition`);
};

module.exports.upscShowComment = async (req, res) => {
  let { id } = req.params;
  let book = await Book.findById(id);
  let newRev = new Review(req.body.review);

  newRev.by = req.user._id;

  book.reviews.push(newRev);

  await newRev.save();
  await book.save();

  req.flash("success", "Review Added");

  res.redirect(`/upsc/${book._id}/condition`);
};

module.exports.upscDeleteComment = async (req, res) => {
  let { id, reviewId } = req.params;
  await Book.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted");

  res.redirect(`/upsc/${id}/condition`);
};
