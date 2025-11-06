import { Request, Response, NextFunction } from "express";
import Book from "../models/book";
import Review from "../models/review";

export const isBookOwner = async (req: Request, res: Response, next: NextFunction) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ ok: false, message: "Book not found" });

  if (book.owner.toString() !== (req as any).user._id.toString()) {
    return res.status(403).json({ ok: false, message: "Access denied" });
  }

  next();
};

export const isReviewAuthor = async (req: Request, res: Response, next: NextFunction) => {
  const review = await Review.findById(req.params.reviewId);
  if (!review) return res.status(404).json({ ok: false, message: "Review not found" });

  if (review.by.toString() !== (req as any).user._id.toString()) {
    return res.status(403).json({ ok: false, message: "Access denied" });
  }

  next();
};
