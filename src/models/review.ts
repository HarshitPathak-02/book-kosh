import mongoose, { Document, Schema, Model } from "mongoose";
import type { ObjectId } from "mongoose";

export interface IReview extends Document {
  comment: string;
  rating: number;
  createdAt?: Date;
  by: ObjectId;
  book: ObjectId;
}

const reviewSchema = new Schema<IReview>(
  {
    comment: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    createdAt: { type: Date, default: () => new Date() },
    by: { type: Schema.Types.ObjectId, ref: "User" },
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  },
  { timestamps: false }
);

// ⚙️ Indexes
reviewSchema.index({ book: 1 });
reviewSchema.index({ by: 1 });
reviewSchema.index({ rating: -1 });
reviewSchema.index({ createdAt: -1 });

const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;
