import User from "../models/user.model.js";

export default async function dashboard(req, res) {
  try {
    const userData = await User.findById(req.user.id)
      .select("-password")
      .lean();

    res.status(200).json({ userData, message: "welcome to dashboard" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not found" });
  }
}
