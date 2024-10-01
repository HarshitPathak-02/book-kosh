const express = require("express")
const router = express.Router({mergeParams:true})
const wrapAsync = require("../utils/wrapAsync.js")
const passport = require("passport");
const { signup, signupForm, loginForm, login, logout } = require("../controllers/users.js");


router.get("/signup", signupForm )

router.post("/signup", wrapAsync(signup))

router.get("/login",loginForm)

router.post("/login", passport.authenticate('local', { failureRedirect: "/login", failureFlash: true }), login)

router.get("/logout", logout)

module.exports = router;