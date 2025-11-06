"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinSchema = exports.signupSchema = exports.reviewSchema = exports.bookSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// 🧩 MongoDB ObjectId pattern
const objectIdPattern = /^[0-9a-fA-F]{24}$/;
// --- BOOK VALIDATION ---
exports.bookSchema = joi_1.default.object({
    title: joi_1.default.string().min(2).max(100).trim().required(),
    description: joi_1.default.string().allow("").max(1000),
    price: joi_1.default.number().min(1).max(100000).required(),
    author: joi_1.default.string().allow("").max(100),
    category: joi_1.default.string().trim().min(2).max(50).required(),
    condition: joi_1.default.string().valid("New", "Used", "Like New").optional(),
    userId: joi_1.default.string().pattern(objectIdPattern).required(),
}).required();
// --- REVIEW VALIDATION ---
exports.reviewSchema = joi_1.default.object({
    comment: joi_1.default.string().min(3).max(500).trim().required(),
    rating: joi_1.default.number().min(1).max(5).required(),
    userId: joi_1.default.string().pattern(objectIdPattern).required(),
    bookId: joi_1.default.string().pattern(objectIdPattern).required(),
}).required();
// --- USER SIGNUP VALIDATION ---
exports.signupSchema = joi_1.default.object({
    username: joi_1.default.string().min(3).max(30).trim().required(),
    fullname: joi_1.default.string().min(3).max(50).trim().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).max(128).required(),
    phone: joi_1.default.string().length(10).pattern(/^[0-9]+$/).optional(),
    isSeller: joi_1.default.boolean().default(false),
});
// --- USER SIGNIN VALIDATION ---
exports.signinSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).max(128).required(),
});
