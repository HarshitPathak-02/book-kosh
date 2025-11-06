"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.index = void 0;
const cacheService_1 = require("../services/cacheService");
const reviewService = __importStar(require("../services/reviewService"));
const index = async (req, res) => {
    try {
        const { bookId } = req.params;
        const cacheKey = `book:${bookId}`;
        const cached = await (0, cacheService_1.get)("reviews", cacheKey);
        if (cached)
            return res.json({ ok: true, cached: true, data: cached });
        const reviews = await reviewService.getReviewsByBook(bookId);
        await (0, cacheService_1.set)("reviews", cacheKey, reviews, 60 * 10);
        res.status(200).json({ ok: true, data: reviews });
    }
    catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ ok: false, message: "Server error" });
    }
};
exports.index = index;
const create = async (req, res) => {
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
        await (0, cacheService_1.invalidateNamespace)("reviews");
        res.status(201).json({ ok: true, message: "Review added", data: review });
    }
    catch (error) {
        console.error("Review create error:", error);
        res.status(500).json({ ok: false, message: "Server error" });
    }
};
exports.create = create;
