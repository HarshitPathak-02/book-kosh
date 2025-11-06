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
exports.bookDelete = exports.bookUpdate = exports.bookCreate = exports.bookSearch = exports.bookIndex = void 0;
const bookService = __importStar(require("../services/bookService"));
const cacheService_1 = require("../services/cacheService");
const bookIndex = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const cacheKey = `page:${page}:limit:${limit}`;
        const cached = await (0, cacheService_1.get)("books", cacheKey);
        if (cached)
            return res.json({ ok: true, cached: true, data: cached });
        const allBooks = await bookService.getAllBooks({ page, limit });
        await (0, cacheService_1.set)("books", cacheKey, allBooks, 60 * 15);
        return res.json({ ok: true, data: allBooks });
    }
    catch (err) {
        console.error("bookIndex error:", err);
        return res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
};
exports.bookIndex = bookIndex;
const bookSearch = async (req, res) => {
    try {
        const q = req.query.q?.trim();
        if (!q)
            return res.status(400).json({ ok: false, error: "Missing query" });
        const cacheKey = `search:${q.toLowerCase()}`;
        const cached = await (0, cacheService_1.get)("books", cacheKey);
        if (cached)
            return res.json({ ok: true, cached: true, data: cached });
        const books = await bookService.searchBooks(q);
        await (0, cacheService_1.set)("books", cacheKey, books, 60 * 10);
        return res.json({ ok: true, data: books });
    }
    catch (err) {
        console.error("bookSearch error:", err);
        return res.status(500).json({ ok: false, error: err.message });
    }
};
exports.bookSearch = bookSearch;
const bookCreate = async (req, res) => {
    try {
        const bookData = req.body;
        const files = req.files;
        const newBook = await bookService.createBook(bookData, files);
        // Invalidate Redis cache for books
        await (0, cacheService_1.invalidateNamespace)("books");
        return res.status(201).json({ ok: true, data: newBook });
    }
    catch (err) {
        console.error("bookCreate error:", err);
        return res.status(500).json({ ok: false, error: err.message });
    }
};
exports.bookCreate = bookCreate;
const bookUpdate = async (req, res) => {
    try {
        const updatedBook = await bookService.updateBook(req.params.id, req.body);
        await (0, cacheService_1.invalidateNamespace)("books");
        return res.json({ ok: true, data: updatedBook });
    }
    catch (err) {
        console.error("bookUpdate error:", err);
        return res.status(500).json({ ok: false, error: err.message });
    }
};
exports.bookUpdate = bookUpdate;
const bookDelete = async (req, res) => {
    try {
        await bookService.deleteBook(req.params.id);
        await (0, cacheService_1.invalidateNamespace)("books");
        return res.json({ ok: true, message: "Book deleted successfully" });
    }
    catch (err) {
        console.error("bookDelete error:", err);
        return res.status(500).json({ ok: false, error: err.message });
    }
};
exports.bookDelete = bookDelete;
