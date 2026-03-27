import User from "../models/user.model.js";

export default async function dashboard(req, res) {
  const userId = req.user.id;
  try {
    const userData = await User.findById(userId)
      .select("-password -refreshToken")
      .lean();
    res.status(200).json({
      userData,
      message: "welcome to dashboard",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not found" });
  }
}