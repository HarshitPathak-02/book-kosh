const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {
  createOrder,
  createRazorpayOrder,
  verifyOrder,
  verifyRazorpayOrder,
} = require("../controllers/orders.js");

router.post("/", createOrder);
router.post("/create", createRazorpayOrder);
router.post("/verify-order", verifyRazorpayOrder);

module.exports = router;
