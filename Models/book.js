const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    coverimage: {
        type:String,
        default: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
        set : (v) => 
            v === ""
                ? "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024"
                : v,
    },
    indeximage: {
        type:String,
        default: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
        set : (v) => 
            v === ""
                ? "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024"
                : v,
    },
    insideimage: {
        type:String,
        default: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
        set : (v) => 
            v === ""
                ? "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024"
                : v,
    },
    author: String,
    category: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;