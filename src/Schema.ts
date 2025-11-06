import Joi from "joi";

// 🧩 MongoDB ObjectId pattern
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

// --- BOOK VALIDATION ---
export const bookSchema = Joi.object({
  title: Joi.string().min(2).max(100).trim().required(),
  description: Joi.string().allow("").max(1000),
  price: Joi.number().min(1).max(100000).required(),
  author: Joi.string().allow("").max(100),
  category: Joi.string().trim().min(2).max(50).required(),
  condition: Joi.string().valid("New", "Used", "Like New").optional(),
  userId: Joi.string().pattern(objectIdPattern).required(),
}).required();

// --- REVIEW VALIDATION ---
export const reviewSchema = Joi.object({
  comment: Joi.string().min(3).max(500).trim().required(),
  rating: Joi.number().min(1).max(5).required(),
  userId: Joi.string().pattern(objectIdPattern).required(),
  bookId: Joi.string().pattern(objectIdPattern).required(),
}).required();

// --- USER SIGNUP VALIDATION ---
export const signupSchema = Joi.object({
  username: Joi.string().min(3).max(30).trim().required(),
  fullname: Joi.string().min(3).max(50).trim().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(128).required(),
  phone: Joi.string().length(10).pattern(/^[0-9]+$/).optional(),
  isSeller: Joi.boolean().default(false),
});

// --- USER SIGNIN VALIDATION ---
export const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(128).required(),
});
