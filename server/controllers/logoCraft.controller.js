import { generateLogoImage } from "../services/logoGen.service.js";
import User from "../models/user.model.js";
export const generateLogo = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ message: "Prompt is required" });

  try {
    const imageBuffer = await generateLogoImage(prompt);
    const user = await User.findById(req.user.id);
    if (user.credits < 25)
      return res
        .status(401)
        .json({ message: "not enough credits please top Up!" });
    user.credits -= 25;
    const imageBase64 = imageBuffer.toString("base64");
    user.images.push({
      image: `data:image/png;base64,${imageBase64}`,
    });
    await user.save();
    res.status(200).json({
      image: `data:image/png;base64,${imageBase64}`,
      credits: user.credits,
      images : user.images
    });
  } catch (err) {
    console.error("Error generating logo:", err);
    res.status(500).json({
      error: err.message,
    });
  }
};
