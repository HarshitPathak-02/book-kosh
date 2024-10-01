const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const Book = require("../Models/book")
const { class12Home, class12Science, class12Commerce, class12Arts, class12ArtsShow, class12ScienceShow, class12CommerceShow } = require("../controllers/class12.js")

// const validateBook = (req,res,next)=>{
//     let { error } = bookSchema.validate(req.body);
//     if (error){
//         let errmsg = error.details.map((el)=> el.message).join(",");
//         throw new ExpressError(400,errmsg)
//     } else {
//         next();
//     }
// };

router.get("/", class12Home )

router.get("/science", wrapAsync(class12Science))

router.get("/commerce", wrapAsync(class12Commerce))

router.get("/arts", wrapAsync(class12Arts))

router.get("/arts/:id/condition", wrapAsync(class12ArtsShow))

router.get("/science/:id/condition", wrapAsync(class12ScienceShow))

router.get("/commerce/:id/condition", wrapAsync(class12CommerceShow))

module.exports = router;