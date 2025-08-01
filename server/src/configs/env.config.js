import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  //port
  PORT: process.env.PORT || 3001,
  //env
  NODE_ENV: process.env.NODE_ENV,
  //clerk
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  //db
  MONGO_URI: process.env.MONGO_URI,
  //arcject
  ARCJET_KEY: process.env.ARCJET_KEY,
  ARCJET_ENV: process.env.ARCJET_ENV,
  //cloudinary
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
