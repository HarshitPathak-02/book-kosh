
const mongoose = require("mongoose");
const Favorite = require('../Models/favorites')

module.exports.addFavorite = async (req, res) => {
    console.log("add fav call hua");
  const { userId, bookId } = req.body;

  try {
    const fav = await Favorite.create({ user: userId, book: bookId });
    res.status(201).json({ success: true, data: fav });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Book already favorited" });
    }
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports.index = async (req, res) => {
  try {
    const { userId } = req.params;

    const favorites = await Favorite.find({ user: userId }).populate("book");

    res.status(200).json({ success: true, data: favorites });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};