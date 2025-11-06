import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import methodOverride from "method-override";
import morgan from "morgan";
import helmet from "helmet";
import ExpressError from "./utils/ExpressError";
import { errorHandler, globalLimiter } from "./middlewares/index";

// Routes
import booksRouter from "./routes/book.routes";
import usersRouter from "./routes/users.routes";
import reviewsRouter from "./routes/reviews.routes";
import favoritesRouter from "./routes/favourite.routes";
import boughtBooksRouter from "./routes/boughtBook.routes";
import ordersRouter from "./routes/orders.routes";
import mailRouter from "./routes/mail.routes";

const app = express();

// ---------------------------
// Middleware Setup
// ---------------------------
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://bookkosh.vercel.app",
    ],
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ---------------------------
// MongoDB Connection
// ---------------------------
const dbUrl = process.env.ATLASDB_URL as string;

mongoose
  .connect(dbUrl)
  .then(() => console.log("✅ MongoDB connected successfully."))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ---------------------------
// Rate Limiting Middleware
// ---------------------------
app.use(globalLimiter);

// ---------------------------
// API Routes
// ---------------------------
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/reviews", reviewsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/favorites", favoritesRouter);
app.use("/api/v1/buy-book", boughtBooksRouter);
app.use("/api/v1/orders", ordersRouter);
app.use("/api/v1/mails", mailRouter);

// ---------------------------
// Root Route
// ---------------------------
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "📚 BookKosh API is running 🚀" });
});

// ---------------------------
// 404 Not Found Handler
// ---------------------------
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// ---------------------------
// Global Error Handler
// ---------------------------
app.use(errorHandler);

// ---------------------------
// Start Server
// ---------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
