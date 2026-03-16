import User from "../models/user.model.js";
export default async function logoutController(req, res) {
  try {
    const userId = req.user.id;
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
    });
    await User.findByIdAndUpdate(userId, {
      $set: { refreshToken: null },
    });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
}
