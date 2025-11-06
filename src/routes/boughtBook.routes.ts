import express from "express";
import  wrapAsync from "../utils/wrapAsync";
import { addBoughtBooks, index } from "../controllers/boughtBook.controller";
import { authenticate } from "../middlewares/index";

const router = express.Router({ mergeParams: true });

router.post("/", authenticate, wrapAsync(addBoughtBooks));
router.get("/:userId", authenticate, wrapAsync(index));

export default router;
