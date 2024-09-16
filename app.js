const express = require("express")
const mongoose = require("mongoose")
const Book = require("./Models/book")
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js");
const {bookSchema, reviewSchema} = require("./Schema.js")
const Review = require("./Models/review.js")

const app = express()

app.set("view engine", "ejs"); //necessary for using ejs templates
app.set("views", path.join(__dirname, "views"));  //necessary for using ejs templates 0  build connection with views folder
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"public")))


main()
    .then((res) => {
        // console.log(res);
        console.log("Connection successful.");
    })
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Bookkosh');
}

const validateBook = (req,res,next)=>{
    let { error } = bookSchema.validate(req.body);
    if (error){
        let errmsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errmsg)
    } else {
        next();
    }
};

const validateReview = (req,res,next)=>{
    let { error } = reviewSchema.validate(req.body);
    if (error){
        let errmsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errmsg)
    } else {
        next();
    }
};


app.listen(8080, (req,res)=>{
    console.log("listening to port 8080")
})

app.get("/", (req,res)=>{
    res.render("Others/home/index")
})

app.get("/11", (req,res)=>{
    res.render("Others/11/home")
})


// these routes I have used for CRUD operations 
// index route for class 11th science books
app.get("/11/science", wrapAsync(async (req,res)=>{
    const science11Books = await Book.find({});
    // const allBooks = await Book.find({});
    res.render("Others/11/science/science11.ejs", {science11Books})
    // res.render("books/index.ejs", {allBooks})
}))

// show route for class 11th science books
app.get("/11/science/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("books/show.ejs", {book})
}))

// route for getting form for adding book
app.get("/book/new", (req,res)=>{
    res.render("books/new.ejs")
})

// route for create
app.post('/11/science',validateBook, wrapAsync(async (req,res,next)=>{
    const newBook = new Book(req.body.book);
    await newBook.save()
    console.log("saved")
    res.redirect("/11/science")
}))

// edit route
app.get("/11/science/:id/edit", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("books/edit.ejs", {book})
}))

// update route
app.put("/11/science/:id",validateBook, wrapAsync(async (req,res)=>{
    let {id}= req.params;
    await Book.findByIdAndUpdate(id, {...req.body.book});
    res.redirect(`/11/science/${id}`)
}))

// delete route
app.delete("/11/science/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Book.findByIdAndDelete(id);
    res.redirect("/11/science")

}))
// reviews routes
// post review
app.post("/11/science/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    res.redirect(`/11/science/${book._id}/condition`)
}))

//delete review
app.delete('/11/science/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/11/science/${id}/condition`)
}))

app.get("/11/commerce", wrapAsync(async (req,res)=>{
    const commerce11Books = await Book.find({});
    res.render("Others/11/commerce/commerce11", {commerce11Books})
}))

app.get("/11/arts", wrapAsync(async (req,res)=>{
    const arts11Books = await Book.find({});
    res.render("Others/11/arts/arts11", {arts11Books})
}))

app.get("/11/arts/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("Others/condition/condition.ejs",{book})
}))

app.get("/11/science/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id).populate("reviews");
    res.render("Others/condition/condition.ejs",{book})
}))

app.get("/11/commerce/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("Others/condition/condition.ejs",{book})
}))

app.get("/12", (req,res)=>{
    res.render("Others/12/home")
})

app.get("/12/science", wrapAsync(async (req,res)=>{
    const science12Books = await Book.find({});
    res.render("Others/12/science/science12", {science12Books})
}))

app.get("/12/commerce", wrapAsync(async (req,res)=>{
    const commerce12Books = await Book.find({});
    res.render("Others/12/commerce/commerce12", {commerce12Books})
}))

app.get("/12/arts", wrapAsync(async (req,res)=>{
    const arts12Books = await Book.find({});
    res.render("Others/12/arts/arts12", {arts12Books})
}))

app.get("/12/arts/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("Others/condition/condition.ejs",{book})
}))

app.get("/12/science/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("Others/condition/condition.ejs",{book})
}))

app.get("/12/commerce/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("Others/condition/condition.ejs",{book})
}))

app.get("/upsc", wrapAsync(async (req,res)=>{
    const upscBooks = await Book.find({});
    res.render("Others/upsc/home", {upscBooks})
}))

app.get("/upsc/:id/condition", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const book = await Book.findById(id);
    res.render("Others/condition/condition.ejs",{book})
}))

app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!!"))
});

app.use((err,req,res,next)=>{
    let {statuCode=500,message="Something went wrong"} = err;
    // res.status(statuCode).send(message)
    res.status(statuCode).render("Others/error/error.ejs",{message})
})