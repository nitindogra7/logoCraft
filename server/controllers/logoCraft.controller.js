import User from "../models/user.model.js"
export default async function logoCraft(req, res) {
    const userData = await User.findById(req.user.id).select("-password");
    res.status(200).json({ message: "Welcome to the logo craft dashboard", userData });
}