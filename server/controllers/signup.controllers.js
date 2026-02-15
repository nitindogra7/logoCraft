import User from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

export default async function signup(req, res) {
  try {
    const { fullName, email, password } = req.body || {};
    if (!fullName || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    if (
      password.length < 6 ||
      (!password.includes("@") &&
        !password.includes("_") &&
        !password.includes("!"))
    )
      return res.status(400).json({
        message:
          "Password must be at least 6 characters and include @, _, or !",
      });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ message: "Please enter a valid email" });

    const userExist = await User.findOne({ email });

    if (userExist)
      return res.status(400).json({ message: "user already exists" });

    const user = await User.create({ fullName, email, password });
    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      message: "user created",
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
      accessToken: accessToken,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
}
