"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== "production") {
    dotenv_1.default.config();
}
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const method_override_1 = __importDefault(require("method-override"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const ExpressError_1 = __importDefault(require("./utils/ExpressError"));
const index_1 = require("./middlewares/index");
// Routes
const book_routes_1 = __importDefault(require("./routes/book.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const reviews_routes_1 = __importDefault(require("./routes/reviews.routes"));
const favourite_routes_1 = __importDefault(require("./routes/favourite.routes"));
const boughtBook_routes_1 = __importDefault(require("./routes/boughtBook.routes"));
const orders_routes_1 = __importDefault(require("./routes/orders.routes"));
const mail_routes_1 = __importDefault(require("./routes/mail.routes"));
const app = (0, express_1.default)();
// ---------------------------
// Middleware Setup
// ---------------------------
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://bookkosh.vercel.app",
    ],
    credentials: true,
}));
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, method_override_1.default)("_method"));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// ---------------------------
// MongoDB Connection
// ---------------------------
const dbUrl = process.env.ATLASDB_URL;
mongoose_1.default
    .connect(dbUrl)
    .then(() => console.log("✅ MongoDB connected successfully."))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
// ---------------------------
// Rate Limiting Middleware
// ---------------------------
app.use(index_1.globalLimiter);
// ---------------------------
// API Routes
// ---------------------------
app.use("/api/v1/books", book_routes_1.default);
app.use("/api/v1/reviews", reviews_routes_1.default);
app.use("/api/v1/users", users_routes_1.default);
app.use("/api/v1/favorites", favourite_routes_1.default);
app.use("/api/v1/buy-book", boughtBook_routes_1.default);
app.use("/api/v1/orders", orders_routes_1.default);
app.use("/api/v1/mails", mail_routes_1.default);
// ---------------------------
// Root Route
// ---------------------------
app.get("/", (req, res) => {
    res.json({ message: "📚 BookKosh API is running 🚀" });
});
// ---------------------------
// 404 Not Found Handler
// ---------------------------
app.all("*", (req, res, next) => {
    next(new ExpressError_1.default(404, "Page Not Found!"));
});
// ---------------------------
// Global Error Handler
// ---------------------------
app.use(index_1.errorHandler);
// ---------------------------
// Start Server
// ---------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
