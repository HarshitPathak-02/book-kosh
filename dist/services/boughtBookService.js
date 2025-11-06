"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoughtBooksByUser = exports.addBoughtBook = void 0;
const boughtBooks_1 = __importDefault(require("../models/boughtBooks"));
const mongoose_1 = require("mongoose");
const addBoughtBook = async (userId, bookId) => {
    if (!userId || !bookId)
        throw new Error("Missing userId or bookId");
    return await boughtBooks_1.default.create({
        user: new mongoose_1.Types.ObjectId(userId),
        book: new mongoose_1.Types.ObjectId(bookId),
    });
};
exports.addBoughtBook = addBoughtBook;
const getBoughtBooksByUser = async (userId) => {
    if (!userId)
        throw new Error("Missing userId");
    return await boughtBooks_1.default.find({ user: userId }).populate("book");
};
exports.getBoughtBooksByUser = getBoughtBooksByUser;
