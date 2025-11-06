import Review from "../models/review";
import { Types } from "mongoose";

interface ReviewData {
  comment: string;
  rating: number;
  userId: string;
  bookId: string;
}

export const createReview = async ({ comment, rating, userId, bookId }: ReviewData) => {
  if (!comment || !rating || !userId || !bookId)
    throw new Error("All fields are required");

  const review = new Review({
    comment,
    rating,
    by: new Types.ObjectId(userId),
    book: new Types.ObjectId(bookId),
  });

  await review.save();
  return review;
};

export const getReviewsByBook = async (bookId: string) => {
  if (!bookId) throw new Error("Book ID is required");
  return await Review.find({ book: bookId }).populate("by", "fullname");
};
