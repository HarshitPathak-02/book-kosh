"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchLimiter = exports.authLimiter = exports.globalLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const rate_limit_redis_1 = __importDefault(require("rate-limit-redis"));
const redisClient_1 = __importDefault(require("../utils/redisClient"));
const ioredis_1 = require("ioredis");
// Helper: properly type the sendCommand
const sendCommand = async (...args) => {
    // ioredis expects a Command object
    const command = new ioredis_1.Command(args[0], args.slice(1));
    return redisClient_1.default.sendCommand(command);
};
// lobal limiter
exports.globalLimiter = (0, express_rate_limit_1.default)({
    store: new rate_limit_redis_1.default({
        sendCommand, // our typed helper
    }),
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500,
    message: { ok: false, message: "Too many requests, please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
});
// Auth limiter
exports.authLimiter = (0, express_rate_limit_1.default)({
    store: new rate_limit_redis_1.default({
        sendCommand,
    }),
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5,
    message: { ok: false, message: "Too many login attempts. Try again later." },
    skipSuccessfulRequests: true,
});
// Search limiter
exports.searchLimiter = (0, express_rate_limit_1.default)({
    store: new rate_limit_redis_1.default({
        sendCommand,
    }),
    windowMs: 60 * 1000, // 1 minute
    max: 20,
    message: { ok: false, message: "Too many searches. Slow down a bit." },
});
