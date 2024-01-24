import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected !!! DB Host : ${connectionInstance}`);
  } catch (error) {
    console.log("MongoDB connection Failed :", error);
    process.exit(1);
  }
};

export default connectDB;
