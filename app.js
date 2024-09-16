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
const class12 = require("./routes/class12.js")
const class11 = require("./routes/class11.js")
const books = require("./routes/books.js")

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

const validateReview = (req,res,next)=>{
    let { error } = reviewSchema.validate(req.body);
    if (error){
        let errmsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errmsg)
    } else {
        next();
    }
};

app.use("/11",class11);
app.use("/12",class12);
app.use("/books",books);


app.listen(8080, (req,res)=>{
    console.log("listening to port 8080")
})

app.get("/", (req,res)=>{
    res.render("Others/home/index")
})


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

app.post("/11/arts/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    res.redirect(`/11/arts/${book._id}/condition`)
}))

app.post("/11/commerce/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    res.redirect(`/11/commerce/${book._id}/condition`)
}))

app.post("/12/science/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    res.redirect(`/12/science/${book._id}/condition`)
}))

app.post("/12/arts/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    res.redirect(`/12/arts/${book._id}/condition`)
}))

app.post("/12/commerce/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    res.redirect(`/12/commerce/${book._id}/condition`)
}))

app.post("/upsc/:id/condition/reviews", validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let book = await Book.findById(id);
    let newRev = new Review(req.body.review);

    book.reviews.push(newRev);

    await newRev.save();
    await book.save();

    res.redirect(`/upsc/${book._id}/condition`)
}))

//delete review
app.delete('/11/science/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/11/science/${id}/condition`)
}))

app.delete('/11/arts/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/11/arts/${id}/condition`)
}))

app.delete('/11/commerce/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/11/commerce/${id}/condition`)
}))

app.delete('/12/science/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/12/science/${id}/condition`)
}))

app.delete('/12/arts/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/12/arts/${id}/condition`)
}))

app.delete('/12/commerce/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/12/commerce/${id}/condition`)
}))

app.delete('/upsc/:id/condition/reviews/:reviewId', wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Book.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/upsc/${id}/condition`)
}))
// end of reviews routes


app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!!"))
});

app.use((err,req,res,next)=>{
    let {statuCode=500,message="Something went wrong"} = err;
    // res.status(statuCode).send(message)
    res.status(statuCode).render("Others/error/error.ejs",{message})
})