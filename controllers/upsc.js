const Book = require("../Models/book");

module.exports.upscHome = async (req,res)=>{
    const upscBooks = await Book.find({});
    res.render("upsc/home", {upscBooks})
}

module.exports.upscShow = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate("reviews").populate("owner");
    res.render("upsc/condition.ejs",{book})
}