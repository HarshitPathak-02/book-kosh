"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavoritesByUser = exports.addFavorite = void 0;
const favorites_1 = __importDefault(require("../models/favorites"));
const mongoose_1 = require("mongoose");
const addFavorite = async (userId, bookId) => {
    if (!userId || !bookId)
        throw new Error("User ID and Book ID are required");
    try {
        return await favorites_1.default.create({
            user: new mongoose_1.Types.ObjectId(userId),
            book: new mongoose_1.Types.ObjectId(bookId),
        });
    }
    catch (error) {
        if (error.code === 11000) {
            throw new Error("Book already favorited");
        }
        throw new Error("Database error while adding favorite");
    }
};
exports.addFavorite = addFavorite;
const getFavoritesByUser = async (userId) => {
    if (!userId)
        throw new Error("User ID is required");
    return await favorites_1.default.find({ user: userId }).populate("book");
};
exports.getFavoritesByUser = getFavoritesByUser;
