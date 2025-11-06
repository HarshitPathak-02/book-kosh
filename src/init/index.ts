const mongoose = require("mongoose")
const initData = require("./data")
const Book = require("../Models/book")
require('dotenv').config()

main()
    .then((res) => {
        // console.log(res);
        console.log("Connection successful.");
    })
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb+srv://harshitpathakhp567_db_user:i9eh4pBteMrlBnDy@cluster0.tqlxmyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

const initDB = async () => {
    await Book.deleteMany({});
    initData.data = initData.data.map((obj:any) => ({...obj,owner:"68244442f724d233a9a9feb7"}))
    await Book.insertMany(initData.data);
    console.log("data initialized");
}

initDB();
