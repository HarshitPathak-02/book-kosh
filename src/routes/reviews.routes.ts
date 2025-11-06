import express from "express";
import wrapAsync  from "../utils/wrapAsync";
import { authenticate, validate } from "../middlewares/index";
import { create, index } from "../controllers/review.controller";
import { reviewSchema } from "../Schema";

const router = express.Router({ mergeParams: true });

router.post("/", authenticate, validate(reviewSchema), wrapAsync(create));
router.get("/:bookId", wrapAsync(index));

export default router;
