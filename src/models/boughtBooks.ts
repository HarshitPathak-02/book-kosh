import mongoose, { Document, Schema, Model } from "mongoose";
import type { ObjectId } from "mongoose";

export interface IBoughtBook extends Document {
  user: ObjectId;
  book: ObjectId;
  createdAt?: Date;
}

const boughtBooksSchema = new Schema<IBoughtBook>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

// ⚙️ Indexes
boughtBooksSchema.index({ user: 1 });
boughtBooksSchema.index({ book: 1 });
boughtBooksSchema.index({ user: 1, book: 1 }, { unique: true });
boughtBooksSchema.index({ createdAt: -1 });

const BoughtBook: Model<IBoughtBook> =
  mongoose.models.BoughtBook || mongoose.model<IBoughtBook>("BoughtBook", boughtBooksSchema);

export default BoughtBook;
