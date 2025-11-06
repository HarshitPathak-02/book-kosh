import BoughtBook from "../models/boughtBooks";
import { Types } from "mongoose";

export const addBoughtBook = async (userId: string, bookId: string) => {
  if (!userId || !bookId) throw new Error("Missing userId or bookId");
  return await BoughtBook.create({
    user: new Types.ObjectId(userId),
    book: new Types.ObjectId(bookId),
  });
};

export const getBoughtBooksByUser = async (userId: string) => {
  if (!userId) throw new Error("Missing userId");
  return await BoughtBook.find({ user: userId }).populate("book");
};
