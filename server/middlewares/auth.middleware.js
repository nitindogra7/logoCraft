import jwt from "jsonwebtoken";
export default function verifyUser(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ message: "token not provided" });
    const token = authHeader.split(" ")[1];
    const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = verify.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Internal server error" });
    console.log(error);
  }
}
