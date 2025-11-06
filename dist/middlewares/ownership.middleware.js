"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReviewAuthor = exports.isBookOwner = void 0;
const book_1 = __importDefault(require("../models/book"));
const review_1 = __importDefault(require("../models/review"));
const isBookOwner = async (req, res, next) => {
    const book = await book_1.default.findById(req.params.id);
    if (!book)
        return res.status(404).json({ ok: false, message: "Book not found" });
    if (book.owner.toString() !== req.user._id.toString()) {
        return res.status(403).json({ ok: false, message: "Access denied" });
    }
    next();
};
exports.isBookOwner = isBookOwner;
const isReviewAuthor = async (req, res, next) => {
    const review = await review_1.default.findById(req.params.reviewId);
    if (!review)
        return res.status(404).json({ ok: false, message: "Review not found" });
    if (review.by.toString() !== req.user._id.toString()) {
        return res.status(403).json({ ok: false, message: "Access denied" });
    }
    next();
};
exports.isReviewAuthor = isReviewAuthor;
