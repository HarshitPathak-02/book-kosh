const Book = require("../Models/book")

module.exports.bookIndex = async (req,res)=>{
    const allBooks = await Book.find({});
    // const allBooks = await Book.find({});
    // res.render("Others/11/science/science11.ejs", {science11Books})
    res.render("books/index.ejs", {allBooks})
}

module.exports.bookNewForm = (req,res)=>{
    res.render("books/new.ejs")
}

module.exports.bookCreate = async (req,res,next)=>{
    let url = req.file.path;;
    let filename = req.file.filename;
    const newBook = new Book(req.body.book);
    newBook.owner = req.user._id;
    newBook.coverimage = {url, filename};
    await newBook.save()
    req.flash("success","new book added")
    // console.log("saved")
    res.redirect("/")
}

module.exports.bookShow = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    if (!book) {
        req.flash("error", "Book you requested for does not exist")
        res.redirect("/books")
    }
    res.render("books/show.ejs", {book})
}

module.exports.bookEditForm = async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    if (!book) {
        req.flash("error", "Book you requested for does not exist")
        res.redirect("/books")
    }
    res.render("books/edit.ejs", {book})
}

module.exports.bookUpdate = async (req,res)=>{
    let {id}= req.params;
    let book = await Book.findByIdAndUpdate(id, {...req.body.book});
    
    if (typeof req.file !== "undefined"){
        let url = req.file.path;;
        let filename = req.file.filename;

        book.coverimage = {url, filename};
        await book.save();
    }

    req.flash("success", "Book Details Updated")
    res.redirect(`/books/${id}`)
}

module.exports.bookDelete = async (req,res)=>{
    let {id} = req.params;
    await Book.findByIdAndDelete(id);
    req.flash("success", "Book Deleted")
    res.redirect("/books")

}
