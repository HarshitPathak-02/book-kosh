"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wrapAsync_1 = __importDefault(require("../utils/wrapAsync"));
const user_controller_1 = require("../controllers/user.controller");
const index_1 = require("../middlewares/index");
const Schema_1 = require("../Schema");
const router = express_1.default.Router({ mergeParams: true });
router.post("/signup", index_1.authLimiter, (0, index_1.validate)(Schema_1.signupSchema), (0, wrapAsync_1.default)(user_controller_1.signup));
router.post("/signin", index_1.authLimiter, (0, index_1.validate)(Schema_1.signinSchema), (0, wrapAsync_1.default)(user_controller_1.signin));
exports.default = router;
