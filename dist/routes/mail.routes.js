"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mail_controller_1 = require("../controllers/mail.controller");
const wrapAsync_1 = __importDefault(require("../utils/wrapAsync"));
const router = express_1.default.Router();
router.post("/leads", (0, wrapAsync_1.default)(mail_controller_1.mailToTeam));
exports.default = router;
