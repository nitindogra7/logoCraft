export default function logoutController(req, res) {
  try {
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
}
