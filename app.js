if (process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express")
const mongoose = require("mongoose")
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const class12 = require("./routes/class12.js")
const class11 = require("./routes/class11.js")
const reviews = require("./routes/reviews.js")
const users = require("./routes/users.js")
const books = require("./routes/books.js")
const upsc = require("./routes/upsc.js")
const flash = require("connect-flash")
const session = require("express-session");
const MongoStore = require("connect-mongo") 
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./Models/user.js");
const wrapAsync = require("./utils/wrapAsync.js");

const app = express()


app.set("view engine", "ejs"); //necessary for using ejs templates
app.set("views", path.join(__dirname, "views"));  //necessary for using ejs templates 0  build connection with views folder
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"public")))


const dbUrl = process.env.ATLASDB_URL


const store = MongoStore.create ({
    mongoUrl: dbUrl,
    crypto: {
        secret: "lelosecret",
    },
    touchAfter: 24 * 60 * 60,
});

store.on("error", ()=>{
    console.log("Error in Mongo error", err)
})

const sessionOptions = {
    store,
    secret: "lelosecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());  //always include it before routes

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))


passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


main()
    .then((res) => {
        // console.log(res);
        console.log("Connection successful.");
    })
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect(dbUrl);
}


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})


app.use("/11", class11);
app.use("/12", class12);
app.use("/books", books);
app.use("/", reviews);
app.use("/", users);
app.use("/upsc", upsc);


app.listen(8080, (req,res)=>{
    console.log("listening to port 8080")
})

app.get("/", (req,res)=>{
    res.render("home/index")
})


app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!!"))
});

app.use((err,req,res,next)=>{
    let {statuCode=500,message="Something went wrong"} = err;
    // res.status(statuCode).send(message)
    res.status(statuCode).render("error/error.ejs",{message})
})