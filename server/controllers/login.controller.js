import User from '../models/user.model.js';
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

export default async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "email or password is incorrect" });

    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'None',
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      domain: process.env.COOKIE_DOMAIN || undefined,
      partitioned: true,
    });

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      message: "user logged in successfully",
      user: { id: user._id, email: user.email, fullName: user.fullName },
      accessToken,
    });
  } catch(error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "something went wrong!" });
  }
}