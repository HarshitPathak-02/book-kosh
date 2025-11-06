"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const wrapAsync_1 = __importDefault(require("../utils/wrapAsync"));
const Schema_1 = require("../Schema");
const book_controller_1 = require("../controllers/book.controller");
const cloudConfig_1 = require("../cloudConfig");
const index_1 = require("../middlewares/index");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: cloudConfig_1.storage });
const multi = upload.fields([
    { name: "coverimage", maxCount: 1 },
    { name: "indeximage", maxCount: 1 },
    { name: "insideimage", maxCount: 1 },
]);
router.get("/", (0, wrapAsync_1.default)(book_controller_1.bookIndex));
router.get("/search", index_1.searchLimiter, (0, wrapAsync_1.default)(book_controller_1.bookSearch));
router.post("/add", index_1.authenticate, (0, index_1.authorizeRoles)("seller", "admin"), (0, index_1.validate)(Schema_1.bookSchema), multi, (0, wrapAsync_1.default)(book_controller_1.bookCreate));
exports.default = router;
