import User from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
import jwt from 'jsonwebtoken'
export const refreshTokenController = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decoded.userId);

    if (!user)
      return res.status(401).json({ message: "Invalid refresh token" });

    const newAccessToken = await generateAccessToken(user._id);
    const newRefreshToken = await generateRefreshToken(user._id);

    user.refreshToken = newRefreshToken;
    await user.save();

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      accessToken: newAccessToken,
      message: "access token generated",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ message: "Refresh token expired or invalid" });
  }
};
