import { Request, Response } from "express";
import * as bookService from "../services/bookService";
import { set, get, invalidateNamespace } from "../services/cacheService";

export const bookIndex = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const cacheKey = `page:${page}:limit:${limit}`;

    const cached = await get("books", cacheKey);
    if (cached) return res.json({ ok: true, cached: true, data: cached });

    const allBooks = await bookService.getAllBooks({ page, limit });
    await set("books", cacheKey, allBooks, 60 * 15);

    return res.json({ ok: true, data: allBooks });
  } catch (err: any) {
    console.error("bookIndex error:", err);
    return res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
};

export const bookSearch = async (req: Request, res: Response) => {
  try {
    const q = (req.query.q as string)?.trim();
    if (!q) return res.status(400).json({ ok: false, error: "Missing query" });

    const cacheKey = `search:${q.toLowerCase()}`;
    const cached = await get("books", cacheKey);
    if (cached) return res.json({ ok: true, cached: true, data: cached });

    const books = await bookService.searchBooks(q);
    await set("books", cacheKey, books, 60 * 10);

    return res.json({ ok: true, data: books });
  } catch (err: any) {
    console.error("bookSearch error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};

export const bookCreate = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };

    const newBook = await bookService.createBook(bookData, files);

    // Invalidate Redis cache for books
    await invalidateNamespace("books");

    return res.status(201).json({ ok: true, data: newBook });
  } catch (err: any) {
    console.error("bookCreate error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};

export const bookUpdate = async (req: Request, res: Response) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    await invalidateNamespace("books");
    return res.json({ ok: true, data: updatedBook });
  } catch (err: any) {
    console.error("bookUpdate error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};

export const bookDelete = async (req: Request, res: Response) => {
  try {
    await bookService.deleteBook(req.params.id);
    await invalidateNamespace("books");
    return res.json({ ok: true, message: "Book deleted successfully" });
  } catch (err: any) {
    console.error("bookDelete error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};
