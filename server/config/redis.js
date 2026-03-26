import { createClient } from "redis";

const client = createClient({
  url: "redis://127.0.0.1:6379",
});

client.on("error", (err) => {
  console.log(" Redis Error:", err);
});

export const connectRedis = async () => {
  try {
    await client.connect();
    console.log("Redis connected");
  } catch (error) {
    console.log("Redis connection failed:", error);
  }
};

export default client;