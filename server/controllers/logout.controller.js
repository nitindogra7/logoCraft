export default function logoutController(req, res) {

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    path: "/",
  });

  res.status(200).json({ message: "logged out successfully" });
}
