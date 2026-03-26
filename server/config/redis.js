import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_HOST,
});

client.on("error", (err) => console.log("Redis Error:", err));

export async function connectRedis() {
  try {
    await client.connect();
    console.log("Redis Connected");
  } catch (error) {
    console.log("Redis connection failed", error);
  }
}

export default client;