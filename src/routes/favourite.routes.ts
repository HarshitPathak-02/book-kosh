import express from "express";
import wrapAsync  from "../utils/wrapAsync";
import { addFavorite, index } from "../controllers/favourite.controller";
import { authenticate } from "../middlewares/index";

const router = express.Router({ mergeParams: true });

router.post("/", authenticate, wrapAsync(addFavorite));
router.get("/:userId", authenticate, wrapAsync(index));

export default router;
