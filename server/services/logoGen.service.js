import { GoogleGenAI } from "@google/genai";

export const generateLogoImage = async (prompt) => {
  if (!prompt) throw new Error("Prompt is required");

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  // Craft the prompt to tell the model it's a logo generator
  const logoPrompt = `
You are a professional app logo generator. 
Create a high-quality, simple, and memorable logo suitable for an app icon.
Logo description: ${prompt}
Make it minimalistic, clean, and visually appealing.
`;

  const response = await ai.models.generateImages({
    model: "imagen-4.0-generate-001",
    prompt: logoPrompt,
    config: {
      numberOfImages: 1,
    },
  });

  if (!response.generatedImages || response.generatedImages.length === 0) {
    throw new Error("No image generated");
  }


  const imageBase64 = response.generatedImages[0].image.imageBytes;
  const image = Buffer.from(imageBase64, "base64");

  return image;
};
