import User from "../models/user.model.js";
export default async function signup(req, res) {
  // Implementation for signup logic
  try {
    const { fullName, email, password } = req.body;
    if (!fullName && !email && !password)
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
    res.status(201).json({
      message: "user created",
    });
  } catch (error) {
    console.log(error);
  }
}


