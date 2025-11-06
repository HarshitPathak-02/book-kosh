"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewsByBook = exports.createReview = void 0;
const review_1 = __importDefault(require("../models/review"));
const mongoose_1 = require("mongoose");
const createReview = async ({ comment, rating, userId, bookId }) => {
    if (!comment || !rating || !userId || !bookId)
        throw new Error("All fields are required");
    const review = new review_1.default({
        comment,
        rating,
        by: new mongoose_1.Types.ObjectId(userId),
        book: new mongoose_1.Types.ObjectId(bookId),
    });
    await review.save();
    return review;
};
exports.createReview = createReview;
const getReviewsByBook = async (bookId) => {
    if (!bookId)
        throw new Error("Book ID is required");
    return await review_1.default.find({ book: bookId }).populate("by", "fullname");
};
exports.getReviewsByBook = getReviewsByBook;
