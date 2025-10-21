
const mongoose = require("mongoose");
const BoughtBook = require("../Models/boughtBooks");
// const BoughtBook = require()

module.exports.addBoughtBooks = async (req, res) => {
    console.log("add buy book call hua");
  const { userId, bookId } = req.body;

  try {
    const fav = await BoughtBook.create({ user: userId, book: bookId });
    res.status(201).json({ success: true, data: fav });
  } catch (error) {
    console.error("Error adding bought books:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports.index = async (req, res) => {
  try {
    const { userId } = req.params;

    const boughtBooks = await BoughtBook.find({ user: userId }).populate("book");

    res.status(200).json({ success: true, data: boughtBooks });
  } catch (error) {
    console.error("Error fetching bought books:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};