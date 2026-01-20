import User from '../models/user.model.js';

export default async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user not found" });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "email or password is incorrect" });
    res.status(200).json({ message: "user logged in successfully" });
}
