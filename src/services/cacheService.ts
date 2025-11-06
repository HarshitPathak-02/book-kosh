import redis from "../utils/redisClient";

const DEFAULT_TTL = 60 * 15; // 15 minutes

async function getNamespaceVersion(namespace: string): Promise<string> {
  const version = await redis.get(`ver:${namespace}`);
  return version || "1";
}

async function makeKey(namespace: string, key: string): Promise<string> {
  const version = await getNamespaceVersion(namespace);
  return `${namespace}:v${version}:${key}`;
}

export async function set(namespace: string, key: string, value: any, ttl = DEFAULT_TTL): Promise<void> {
  try {
    const versionedKey = await makeKey(namespace, key);
    await redis.set(versionedKey, JSON.stringify(value), "EX", ttl);
  } catch (err) {
    console.error("Redis SET error", err);
  }
}

export async function get<T = any>(namespace: string, key: string): Promise<T | null> {
  try {
    const versionedKey = await makeKey(namespace, key);
    const data = await redis.get(versionedKey);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error("Redis GET error", err);
    return null;
  }
}

export async function invalidateNamespace(namespace: string): Promise<void> {
  try {
    await redis.incr(`ver:${namespace}`);
    console.log(`🚨 Cache invalidated for namespace: ${namespace}`);
  } catch (err) {
    console.error("Redis invalidation error", err);
  }
}
