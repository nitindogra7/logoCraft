export default function logoutController(req, res) {
  const isProd = process.env.NODE_ENV === "production";

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "None" : "Lax",
    path: "/",
  });

  res.status(200).json({ message: "logged out successfully" });
}
