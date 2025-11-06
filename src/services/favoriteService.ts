import Favorite from "../models/favorites";
import { Types } from "mongoose";

export const addFavorite = async (userId: string, bookId: string) => {
  if (!userId || !bookId) throw new Error("User ID and Book ID are required");

  try {
    return await Favorite.create({
      user: new Types.ObjectId(userId),
      book: new Types.ObjectId(bookId),
    });
  } catch (error: any) {
    if (error.code === 11000) {
      throw new Error("Book already favorited");
    }
    throw new Error("Database error while adding favorite");
  }
};

export const getFavoritesByUser = async (userId: string) => {
  if (!userId) throw new Error("User ID is required");
  return await Favorite.find({ user: userId }).populate("book");
};
