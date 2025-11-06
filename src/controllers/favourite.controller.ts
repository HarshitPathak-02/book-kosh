import { Request, Response } from "express";
import * as favoriteService from "../services/favoriteService";

export const addFavorite = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;
    const fav = await favoriteService.addFavorite(userId, bookId);
    res.status(201).json({ success: true, data: fav });
  } catch (error: any) {
    console.error("Error adding favorite:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const favorites = await favoriteService.getFavoritesByUser(userId);
    res.status(200).json({ success: true, data: favorites });
  } catch (error: any) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
