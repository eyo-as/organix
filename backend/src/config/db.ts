import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri!);
    console.log(`DB Connected`);
  } catch (error) {
    console.log(`Error connecting to the db`, error);
    process.exit(1);
  }
};

export default connectDB;
