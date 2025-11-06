import Book, { IBook } from "../models/book";
import { Types } from "mongoose";

interface CreateBookData {
  title: string;
  author: string;
  condition: string;
  price: number;
  category: string;
  userId: string;
}

interface UploadedFile {
  path: string;
  filename: string;
}

export interface UploadedFiles {
  [fieldname: string]: Express.Multer.File[];
}

export const getAllBooks = async ({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
}): Promise<IBook[]> => {
  const skip = (page - 1) * limit;

  const books = await Book.find({})
    .sort({ createdAt: -1 }) // newest first
    .skip(skip)
    .limit(limit);

  return books;
};

export const searchBooks = async (queryText: string): Promise<IBook[]> => {
  const q = queryText?.trim();
  if (!q) throw new Error("Missing search query");

  const query = {
    $or: [
      { title: { $regex: q, $options: "i" } },
      { author: { $regex: q, $options: "i" } },
      { category: { $regex: q, $options: "i" } },
    ],
  };

  return await Book.find(query).select(
    "title author price category coverimage insideimage indeximage condition"
  );
};

export const createBook = async (
  bookData: CreateBookData,
  files: UploadedFiles
): Promise<IBook> => {
  const cover = files?.coverimage?.[0];
  const index = files?.indeximage?.[0];
  const inside = files?.insideimage?.[0];

  if (!cover || !index || !inside) {
    throw new Error("Missing required images");
  }

  const newBook = new Book({
    title: bookData.title,
    author: bookData.author,
    condition: bookData.condition,
    price: Number(bookData.price),
    category: bookData.category,
    owner: new Types.ObjectId(bookData.userId),
    coverimage: { url: cover.path, filename: cover.filename },
    indeximage: { url: index.path, filename: index.filename },
    insideimage: { url: inside.path, filename: inside.filename },
  });

  await newBook.save();
  return newBook;
};

export const updateBook = async (
  id: string,
  bookData: Partial<CreateBookData>,
  file?: UploadedFile
): Promise<IBook> => {
  const book = await Book.findByIdAndUpdate(id, { ...bookData }, { new: true });
  if (!book) throw new Error("Book not found");

  if (file) {
    const url = file.path;
    const filename = file.filename;
    book.coverimage = { url, filename };
    await book.save();
  }

  return book;
};

export const deleteBook = async (id: string): Promise<IBook> => {
  const deletedBook = await Book.findByIdAndDelete(id);
  if (!deletedBook) throw new Error("Book not found");
  return deletedBook;
};
