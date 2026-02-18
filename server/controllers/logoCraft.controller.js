import { generateLogoImage } from "../services/logoGen.service.js";
import User from "../models/user.model.js";
import { uploadCloudFile } from "../services/cloudinary.service.js";
export const generateLogo = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ message: "Prompt is required" });
  try {
    const user = await User.findById(req.user.id); // find user
    if (user.credits < 25)
      return res
        .status(401)
        .json({ message: "not enough credits please top Up!" });

    const imageBuffer = await generateLogoImage(prompt); //send prompt to gemini imagenmodel
    user.credits -= 25; // deduct credits from users account
    const imageBase64 = imageBuffer.toString("base64");
    const resultImg = await uploadCloudFile(imageBase64);

    user.images.push({ image: resultImg });
    await user.save();

    res.status(200).json({
      image: resultImg,
      credits: user.credits,
      images: resultImg,
    });
  } catch (err) {
    console.error("Error generating logo:", err);
    res.status(500).json({
      error: err.message,
    });
  }
};
