import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redis from "../utils/redisClient";
import { Command } from "ioredis";

// Helper: properly type the sendCommand
const sendCommand = async (...args: string[]): Promise<any> => {
  // ioredis expects a Command object
  const command = new Command(args[0], args.slice(1));
  return redis.sendCommand(command);
};

// lobal limiter
export const globalLimiter = rateLimit({
  store: new RedisStore({
    sendCommand, // our typed helper
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500,
  message: { ok: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Auth limiter
export const authLimiter = rateLimit({
  store: new RedisStore({
    sendCommand,
  }),
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  message: { ok: false, message: "Too many login attempts. Try again later." },
  skipSuccessfulRequests: true,
});

// Search limiter
export const searchLimiter = rateLimit({
  store: new RedisStore({
    sendCommand,
  }),
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  message: { ok: false, message: "Too many searches. Slow down a bit." },
});
