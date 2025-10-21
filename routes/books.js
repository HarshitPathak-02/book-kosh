const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { bookCreate, bookIndex, bookSearch } = require("../controllers/book.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
const multi = upload.fields([
  { name: "coverimage", maxCount: 1 },
  { name: "indeximage", maxCount: 1 },
  { name: "insideimage", maxCount: 1 },
]);

router.get("/", bookIndex);

router.get("/search", bookSearch);

router.post("/add", multi, bookCreate);

module.exports = router;
