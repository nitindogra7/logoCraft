import User from "../models/user.model.js";
import client from "../config/redis.js";

export default async function dashboard(req, res) {
  const userId = req.user.id;
  const cacheKey = `user:${userId}`;

  try {
    const cachedData = await client.get(cacheKey);

    if (cachedData) {
      console.log("Cache HIT");
      return res.status(200).json(cachedData);
    }

    console.log("Cache MISS");

    const userData = await User.findById(userId)
      .select("-password -refreshToken")
      .lean();

    const response = {
      userData,
    };

    await client.setEx(cacheKey, 86400, JSON.stringify(response));

    res.status(200).json({
      response,
      message: "welcome to dashboard",
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not found" });
  }
}