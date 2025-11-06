import mongoose, { Document, Schema, Model } from "mongoose";
import type { ObjectId } from "mongoose";
import Review from "./review"; // make sure this file is also TS

// ✅ Interface representing a Book document
export interface IBook extends Document {
  title: string;
  description: string;
  price: number;
  coverimage: {
    url: string;
    filename: string;
  };
  indeximage: {
    url: string;
    filename: string;
  };
  insideimage: {
    url: string;
    filename: string;
  };
  author: string;
  category: string;
  reviews: ObjectId[];
  owner: ObjectId;
  condition?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// ✅ Define Schema
const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    coverimage: {
      url: String,
      filename: String,
    },
    indeximage: {
      url: String,
      filename: String,
    },
    insideimage: {
      url: String,
      filename: String,
    },
    author: { type: String },
    category: { type: String },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    condition: { type: String },
  },
  { timestamps: true }
);

// ✅ Indexes for optimization
bookSchema.index({ title: "text", author: "text", category: "text" }); // For text search
bookSchema.index({ category: 1 }); // For filtering
bookSchema.index({ owner: 1 }); // For seller-based listing
bookSchema.index({ price: 1 }); // For sorting by price
bookSchema.index({ createdAt: -1 }); // For recent books

// ✅ Cascade delete reviews when a book is deleted
bookSchema.post("findOneAndDelete", async (book: IBook) => {
  if (book && book.reviews && book.reviews.length > 0) {
    await Review.deleteMany({ _id: { $in: book.reviews } });
  }
});

// ✅ Safe export to avoid OverwriteModelError
const Book: Model<IBook> =
  mongoose.models.Book || mongoose.model<IBook>("Book", bookSchema);

export default Book;
