"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wrapAsync_1 = __importDefault(require("../utils/wrapAsync"));
const index_1 = require("../middlewares/index");
const review_controller_1 = require("../controllers/review.controller");
const Schema_1 = require("../Schema");
const router = express_1.default.Router({ mergeParams: true });
router.post("/", index_1.authenticate, (0, index_1.validate)(Schema_1.reviewSchema), (0, wrapAsync_1.default)(review_controller_1.create));
router.get("/:bookId", (0, wrapAsync_1.default)(review_controller_1.index));
exports.default = router;
