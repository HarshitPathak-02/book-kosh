import mongoose, { Document, Schema, Model } from "mongoose";
import type { ObjectId } from "mongoose";

export interface IFavorite extends Document {
  user: ObjectId;
  book: ObjectId;
  createdAt?: Date;
}

const favoriteSchema = new Schema<IFavorite>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

// Indexes
favoriteSchema.index({ user: 1 });
favoriteSchema.index({ book: 1 });
favoriteSchema.index({ user: 1, book: 1 }, { unique: true });
favoriteSchema.index({ createdAt: -1 });

const Favorite: Model<IFavorite> =
  mongoose.models.Favorite || mongoose.model<IFavorite>("Favorite", favoriteSchema);

export default Favorite;
