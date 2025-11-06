import mongoose, { Document, Schema, Model } from "mongoose";
import type { ObjectId } from "mongoose";

export interface IAddress {
  street?: string;
  city?: string;
  pincode?: string;
  phone?: string;
  state?: string;
}

export interface IOrder extends Document {
  user: ObjectId;
  book: ObjectId;
  address?: IAddress;
  paymentMethod: "COD" | "Online";
  isPaid: boolean;
  paidAt?: Date;
  paymentStatus: "pending" | "paid" | "failed";
  createdAt?: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    address: {
      street: String,
      city: String,
      pincode: String,
      phone: String,
      state: String,
    },
    paymentMethod: { type: String, enum: ["COD", "Online"], default: "Online" },
    isPaid: { type: Boolean, default: false },
    paidAt: Date,
    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

// ⚙️ Indexes
orderSchema.index({ user: 1 });
orderSchema.index({ paymentStatus: 1 });
orderSchema.index({ isPaid: 1 });
orderSchema.index({ createdAt: -1 });

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
