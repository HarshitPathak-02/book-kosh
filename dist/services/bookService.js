"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.searchBooks = exports.getAllBooks = void 0;
const book_1 = __importDefault(require("../models/book"));
const mongoose_1 = require("mongoose");
const getAllBooks = async ({ page = 1, limit = 20, }) => {
    const skip = (page - 1) * limit;
    const books = await book_1.default.find({})
        .sort({ createdAt: -1 }) // newest first
        .skip(skip)
        .limit(limit);
    return books;
};
exports.getAllBooks = getAllBooks;
const searchBooks = async (queryText) => {
    const q = queryText?.trim();
    if (!q)
        throw new Error("Missing search query");
    const query = {
        $or: [
            { title: { $regex: q, $options: "i" } },
            { author: { $regex: q, $options: "i" } },
            { category: { $regex: q, $options: "i" } },
        ],
    };
    return await book_1.default.find(query).select("title author price category coverimage insideimage indeximage condition");
};
exports.searchBooks = searchBooks;
const createBook = async (bookData, files) => {
    const cover = files?.coverimage?.[0];
    const index = files?.indeximage?.[0];
    const inside = files?.insideimage?.[0];
    if (!cover || !index || !inside) {
        throw new Error("Missing required images");
    }
    const newBook = new book_1.default({
        title: bookData.title,
        author: bookData.author,
        condition: bookData.condition,
        price: Number(bookData.price),
        category: bookData.category,
        owner: new mongoose_1.Types.ObjectId(bookData.userId),
        coverimage: { url: cover.path, filename: cover.filename },
        indeximage: { url: index.path, filename: index.filename },
        insideimage: { url: inside.path, filename: inside.filename },
    });
    await newBook.save();
    return newBook;
};
exports.createBook = createBook;
const updateBook = async (id, bookData, file) => {
    const book = await book_1.default.findByIdAndUpdate(id, { ...bookData }, { new: true });
    if (!book)
        throw new Error("Book not found");
    if (file) {
        const url = file.path;
        const filename = file.filename;
        book.coverimage = { url, filename };
        await book.save();
    }
    return book;
};
exports.updateBook = updateBook;
const deleteBook = async (id) => {
    const deletedBook = await book_1.default.findByIdAndDelete(id);
    if (!deletedBook)
        throw new Error("Book not found");
    return deletedBook;
};
exports.deleteBook = deleteBook;
