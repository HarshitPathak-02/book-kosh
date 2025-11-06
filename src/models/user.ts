// src/models/user.ts
import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export type Role = "user" | "seller" | "admin";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  fullname?: string;
  phone?: string;
  role: Role;
  isSeller?: boolean;
  comparePassword(candidate: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  fullname: String,
  phone: String,
  role: { type: String, enum: ["user", "seller", "admin"], default: "user" },
  isSeller: { type: Boolean, default: false }
}, { timestamps: true });

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

userSchema.methods.comparePassword = async function (candidate: string) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);
