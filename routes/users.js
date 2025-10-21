const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {
  signup,
  signupForm,
  loginForm,
  logout,
  signin,
} = require("../controllers/users.js");

router.post("/signup", wrapAsync(signup));

router.post("/signin", (req, res, next) => {
  console.log("signin called");
  signin(req, res, next);
});

router.post("/logout", (req, res, next) => {
  console.log("logout called");
  logout(req, res, next);
});

module.exports = router;
