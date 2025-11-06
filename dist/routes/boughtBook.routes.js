"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wrapAsync_1 = __importDefault(require("../utils/wrapAsync"));
const boughtBook_controller_1 = require("../controllers/boughtBook.controller");
const index_1 = require("../middlewares/index");
const router = express_1.default.Router({ mergeParams: true });
router.post("/", index_1.authenticate, (0, wrapAsync_1.default)(boughtBook_controller_1.addBoughtBooks));
router.get("/:userId", index_1.authenticate, (0, wrapAsync_1.default)(boughtBook_controller_1.index));
exports.default = router;
