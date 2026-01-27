import { generateLogoImage } from "../services/logoGen.service.js";

export const generateLogo = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ message: "Prompt is required" });

  try {
    const imageBuffer = await generateLogoImage(prompt);

    const imageBase64 = Buffer.from(imageBuffer).toString("base64");

    res.status(200).json({
      image: `data:image/png;base64,${imageBase64}`,
    });
    
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
