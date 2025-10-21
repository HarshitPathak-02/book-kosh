const Book = require("../Models/book");

module.exports.bookIndex = async (req, res) => {
  console.log("bookIndex called");
  const allBooks = await Book.find({});
  return res.json({ data: allBooks });
};

module.exports.bookSearch = async (req, res) => {
  try {
    const q = req.query.q?.trim();

    if (!q) {
      return res
        .status(400)
        .json({ ok: false, error: "Missing query parameter" });
    }

    // Case-insensitive regex search in multiple fields
    const query = {
      $or: [
        { title: { $regex: q, $options: "i" } },
        { author: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    };

    const books = await Book.find(query).select(
      "title author price category coverimage insideimage indeximage condition"
    ); // send only necessary fields

    res.json({ ok: true, data: books });
  } catch (e) {
    console.error("Search error:", e);
    res.status(500).json({ ok: false, error: "Server error during search" });
  }
};

module.exports.bookCreate = async (req, res) => {
  try {
    console.log("Files received:", req.files);

    const cover = req.files?.coverimage?.[0];
    const index = req.files?.indeximage?.[0];
    const inside = req.files?.insideimage?.[0];

    if (!cover || !index || !inside) {
      return res.status(400).json({ ok: false, error: "Missing images" });
    }

    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      condition: req.body.condition,
      price: Number(req.body.price),
      category: req.body.category,
      owner: req.body.userId,
      coverimage: { url: cover.path, filename: cover.filename },
      indeximage: { url: index.path, filename: index.filename },
      insideimage: { url: inside.path, filename: inside.filename },
    });

    await newBook.save();
    res.status(201).json({ ok: true, id: newBook._id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: e.message });
  }
};

module.exports.bookShow = async (req, res) => {
  let { id } = req.params;
  const book = await Book.findById(id);
  if (!book) {
    req.flash("error", "Book you requested for does not exist");
    res.redirect("/books");
  }
  res.render("books/show.ejs", { book });
};

module.exports.bookEditForm = async (req, res) => {
  let { id } = req.params;
  const book = await Book.findById(id);
  if (!book) {
    req.flash("error", "Book you requested for does not exist");
    res.redirect("/books");
  }
  res.render("books/edit.ejs", { book });
};

module.exports.bookUpdate = async (req, res) => {
  let { id } = req.params;
  let book = await Book.findByIdAndUpdate(id, { ...req.body.book });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;

    book.coverimage = { url, filename };
    await book.save();
  }

  req.flash("success", "Book Details Updated");
  res.redirect(`/books/${id}`);
};

module.exports.bookDelete = async (req, res) => {
  let { id } = req.params;
  await Book.findByIdAndDelete(id);
  req.flash("success", "Book Deleted");
  res.redirect("/books");
};
module.exports.bookDelete = async (req, res) => {
  let { id } = req.params;
  await Book.findByIdAndDelete(id);
  req.flash("success", "Book Deleted");
  res.redirect("/books");
};
