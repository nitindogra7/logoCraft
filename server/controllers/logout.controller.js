export default function logoutController(req, res) {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
    });

    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
}
