const express = require("express")
const router = express.Router({mergeParams:true})
const wrapAsync = require("../utils/wrapAsync.js")
const {isLoggedIn,validateReview, isReviewAuthor} = require("../middleware.js")
const { class11ArtsShowComment, class11ScienceShowComment, class11CommerceShowComment, class12ArtsShowComment, class12ScienceShowComment, class12CommerceShowComment, upscShowComment, class11ArtsDeleteComment, class11ScienceDeleteComment, class11CommerceDeleteComment, class12ScienceDeleteComment, class12ArtsDeleteComment, class12CommerceDeleteComment, upscDeleteComment } = require("../controllers/reviews.js")


// reviews routes
// post review
router.post("/11/science/:id/condition/reviews", isLoggedIn, validateReview, wrapAsync(class11ScienceShowComment))

router.post("/11/arts/:id/condition/reviews", validateReview, isLoggedIn, wrapAsync(class11ArtsShowComment))

router.post("/11/commerce/:id/condition/reviews", validateReview, isLoggedIn, wrapAsync(class11CommerceShowComment))

router.post("/12/science/:id/condition/reviews", validateReview, isLoggedIn, wrapAsync(class12ScienceShowComment))

router.post("/12/arts/:id/condition/reviews", validateReview, isLoggedIn, wrapAsync(class12ArtsShowComment))

router.post("/12/commerce/:id/condition/reviews", validateReview, isLoggedIn, wrapAsync(class12CommerceShowComment))

router.post("/upsc/:id/condition/reviews", validateReview, isLoggedIn, wrapAsync(upscShowComment))

//delete review
router.delete('/11/science/:id/condition/reviews/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(class11ScienceDeleteComment))

router.delete('/11/arts/:id/condition/reviews/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(class11ArtsDeleteComment))

router.delete('/11/commerce/:id/condition/reviews/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(class11CommerceDeleteComment))

router.delete('/12/science/:id/condition/reviews/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(class12ScienceDeleteComment))

router.delete('/12/arts/:id/condition/reviews/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(class12ArtsDeleteComment))

router.delete('/12/commerce/:id/condition/reviews/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(class12CommerceDeleteComment))

router.delete('/upsc/:id/condition/reviews/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(upscDeleteComment))
// end of reviews routes

module.exports = router;