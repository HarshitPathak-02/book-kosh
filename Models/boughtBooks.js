const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boughtBooksSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Prevent duplicate favorites from same user for the same book
// boughtBooksSchema.index({ user: 1, book: 1 }, { unique: true });

const BoughtBook = mongoose.model("BoughtBook",boughtBooksSchema);
module.exports = BoughtBook;
