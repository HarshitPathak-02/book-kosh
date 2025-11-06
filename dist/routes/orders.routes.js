"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wrapAsync_1 = __importDefault(require("../utils/wrapAsync"));
const order_controller_1 = require("../controllers/order.controller");
const index_1 = require("../middlewares/index");
const router = express_1.default.Router({ mergeParams: true });
router.post("/", index_1.authenticate, (0, wrapAsync_1.default)(order_controller_1.createOrder));
router.post("/create", index_1.authenticate, (0, wrapAsync_1.default)(order_controller_1.createRazorpayOrder));
router.post("/verify-order", index_1.authenticate, (0, wrapAsync_1.default)(order_controller_1.verifyRazorpayOrder));
exports.default = router;
