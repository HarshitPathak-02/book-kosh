const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const Review = require("./review");
const { ref } = require("joi");

const bookSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    coverimage: {
        url: String,
        filename: String,
    },
    indeximage: {
        url: String,
        filename: String,
    },
    insideimage: {
        url: String,
        filename: String,
    },
    author: String,
    category: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type:Schema.Types.ObjectId,
        ref:"User",
    }
});

bookSchema.post("findOneAndDelete", async (book)=>{
    if (book) {
        await Review.deleteMany({_id : {$in: book.reviews}})
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;