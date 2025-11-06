import { Request, Response } from "express";
import * as boughtBookService from "../services/boughtBookService";

export const addBoughtBooks = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;
    const bought = await boughtBookService.addBoughtBook(userId, bookId);
    res.status(201).json({ success: true, data: bought });
  } catch (err: any) {
    console.error("Error adding bought books:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const boughtBooks = await boughtBookService.getBoughtBooksByUser(userId);
    res.status(200).json({ success: true, data: boughtBooks });
  } catch (err: any) {
    console.error("Error fetching bought books:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};
