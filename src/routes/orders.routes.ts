import express from "express";
import wrapAsync  from "../utils/wrapAsync";
import {
  createOrder,
  createRazorpayOrder,
  verifyRazorpayOrder,
} from "../controllers/order.controller";
import { authenticate } from "../middlewares/index";

const router = express.Router({ mergeParams: true });

router.post("/", authenticate, wrapAsync(createOrder));
router.post("/create", authenticate, wrapAsync(createRazorpayOrder));
router.post("/verify-order", authenticate, wrapAsync(verifyRazorpayOrder));

export default router;
