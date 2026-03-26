import User from "../models/user.model.js";
import client from "../config/redis.js";

export default async function dashboard(req, res) {
  const userId = req.user.id;
  const cacheKey = `user:${userId}`;

  try {
    const cachedData = await client.get(cacheKey);

    if (cachedData) {
      console.log("Cache HIT");
      // Upstash auto-deserializes JSON, so no JSON.parse needed
      const userData = typeof cachedData === "string" ? JSON.parse(cachedData) : cachedData;
      return res.status(200).json({ userData, message: "welcome to dashboard" });
    }

    console.log("Cache MISS");

    const userData = await User.findById(userId)
      .select("-password")
      .lean();

    // Upstash handles serialization, but JSON.stringify is still safe to use
    await client.set(cacheKey, JSON.stringify(userData), { ex: 86400 });

    res.status(200).json({ userData, message: "welcome to dashboard" });

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not found" });
  }
}