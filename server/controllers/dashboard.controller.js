import User from "../models/user.model.js";
export default async function dashboard(req, res) {
  try {
    const userData = await User.findById(req.user.id).select("-password").lean();
    res
      .status(200)
      .json({ message: "Welcome to the logo craft dashboard", userData });
  } catch (error) {
    res.status(400).json({ message: "user not found" });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
    });
  }
}
