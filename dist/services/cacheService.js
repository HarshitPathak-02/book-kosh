"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = set;
exports.get = get;
exports.invalidateNamespace = invalidateNamespace;
const redisClient_1 = __importDefault(require("../utils/redisClient"));
const DEFAULT_TTL = 60 * 15; // 15 minutes
async function getNamespaceVersion(namespace) {
    const version = await redisClient_1.default.get(`ver:${namespace}`);
    return version || "1";
}
async function makeKey(namespace, key) {
    const version = await getNamespaceVersion(namespace);
    return `${namespace}:v${version}:${key}`;
}
async function set(namespace, key, value, ttl = DEFAULT_TTL) {
    try {
        const versionedKey = await makeKey(namespace, key);
        await redisClient_1.default.set(versionedKey, JSON.stringify(value), "EX", ttl);
    }
    catch (err) {
        console.error("Redis SET error", err);
    }
}
async function get(namespace, key) {
    try {
        const versionedKey = await makeKey(namespace, key);
        const data = await redisClient_1.default.get(versionedKey);
        return data ? JSON.parse(data) : null;
    }
    catch (err) {
        console.error("Redis GET error", err);
        return null;
    }
}
async function invalidateNamespace(namespace) {
    try {
        await redisClient_1.default.incr(`ver:${namespace}`);
        console.log(`🚨 Cache invalidated for namespace: ${namespace}`);
    }
    catch (err) {
        console.error("Redis invalidation error", err);
    }
}
