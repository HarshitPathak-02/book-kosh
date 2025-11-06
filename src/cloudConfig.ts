import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.API_KEY as string,
  api_secret: process.env.API_SECRET as string,
});

// Create Multer storage configuration
export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "bookkosh_DEV",
    allowed_formats: ["png", "jpg", "jpeg"], // ✅ correct property name
  } as any,
});

export { cloudinary };
