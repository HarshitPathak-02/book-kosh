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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const review_1 = __importDefault(require("./review")); // make sure this file is also TS
// ✅ Define Schema
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    coverimage: {
        url: String,
        filename: String,
    },
    indeximage: {
        url: String,
        filename: String,
    },
    insideimage: {
        url: String,
        filename: String,
    },
    author: { type: String },
    category: { type: String },
    reviews: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    condition: { type: String },
}, { timestamps: true });
// ✅ Indexes for optimization
bookSchema.index({ title: "text", author: "text", category: "text" }); // For text search
bookSchema.index({ category: 1 }); // For filtering
bookSchema.index({ owner: 1 }); // For seller-based listing
bookSchema.index({ price: 1 }); // For sorting by price
bookSchema.index({ createdAt: -1 }); // For recent books
// ✅ Cascade delete reviews when a book is deleted
bookSchema.post("findOneAndDelete", async (book) => {
    if (book && book.reviews && book.reviews.length > 0) {
        await review_1.default.deleteMany({ _id: { $in: book.reviews } });
    }
});
// ✅ Safe export to avoid OverwriteModelError
const Book = mongoose_1.default.models.Book || mongoose_1.default.model("Book", bookSchema);
exports.default = Book;
