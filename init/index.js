const mongoose = require("mongoose")
const initData = require("./data")
const Book = require("../Models/book")


main()
    .then((res) => {
        // console.log(res);
        console.log("Connection successful.");
    })
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Bookkosh');
}

const initDB = async () => {
    await Book.deleteMany({});
    await Book.insertMany(initData.data);
    console.log("data initialized");
}

initDB();
