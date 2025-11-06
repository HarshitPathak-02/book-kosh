import express from "express";
import multer from "multer";
import wrapAsync from "../utils/wrapAsync";
import { bookSchema } from "../Schema";
import { bookCreate, bookIndex, bookSearch } from "../controllers/book.controller";
import { storage } from "../cloudConfig";
import { authenticate, authorizeRoles, searchLimiter, validate } from "../middlewares/index";

const router = express.Router();

const upload = multer({ storage });

const multi = upload.fields([
  { name: "coverimage", maxCount: 1 },
  { name: "indeximage", maxCount: 1 },
  { name: "insideimage", maxCount: 1 },
]);

router.get("/", wrapAsync(bookIndex));

router.get("/search", searchLimiter, wrapAsync(bookSearch));

router.post(
  "/add",
  authenticate,
  authorizeRoles("seller", "admin"),
  validate(bookSchema),
  multi,
  wrapAsync(bookCreate)
);

export default router;
