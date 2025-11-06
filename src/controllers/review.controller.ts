import { Request, Response } from "express";
import { get, set, invalidateNamespace } from "../services/cacheService";
import * as reviewService from "../services/reviewService";

export const index = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const cacheKey = `book:${bookId}`;

    const cached = await get("reviews", cacheKey);
    if (cached) return res.json({ ok: true, cached: true, data: cached });

    const reviews = await reviewService.getReviewsByBook(bookId);
    await set("reviews", cacheKey, reviews, 60 * 10);

    res.status(200).json({ ok: true, data: reviews });
  } catch (error: any) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ ok: false, message: "Server error" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { comment, rating, userId, bookId } = req.body;
    if (!comment || !rating || !userId || !bookId)
      return res.status(400).json({ ok: false, error: "All fields are required" });

    const review = await reviewService.createReview({
      comment,
      rating,
      userId,
      bookId,
    });

    await invalidateNamespace("reviews");
    res.status(201).json({ ok: true, message: "Review added", data: review });
  } catch (error: any) {
    console.error("Review create error:", error);
    res.status(500).json({ ok: false, message: "Server error" });
  }
};
