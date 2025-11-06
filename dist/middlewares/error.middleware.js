"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const ExpressError_1 = __importDefault(require("../utils/ExpressError"));
const errorHandler = (err, req, res, next) => {
    if (!(err instanceof ExpressError_1.default)) {
        console.error("Unexpected Error:", err);
    }
    const status = err.statusCode || 500;
    const message = err.message || "Something went wrong!";
    res.status(status).json({
        ok: false,
        status,
        message,
    });
};
exports.errorHandler = errorHandler;
