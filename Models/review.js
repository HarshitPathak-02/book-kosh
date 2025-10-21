const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  by: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book", // assuming your book model is named 'Book'
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
