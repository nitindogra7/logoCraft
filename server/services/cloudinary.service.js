import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadCloudFile = async (buffer) => {
  try {
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${buffer}`,
      {
        folder: "logocraft",
        type: "authenticated",
        secure_url: true,
      },
    );
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Cloudinary upload failed");
  }
};
