import mongoose from "mongoose";
import { ENV } from "./env.config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    await console.log("DB Connected!!!");
  } catch (error) {
    console.log("Error connecting to DB => ", error);
    process.exit(1);
  }
};
