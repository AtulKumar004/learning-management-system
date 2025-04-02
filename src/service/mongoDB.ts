import mongoose from "mongoose";

let isConnected: boolean = false;

export async function dbConnect() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.DB_URL!);
    isConnected = true;
    console.log("✅ MongoDB connected with Mongoose");
    return db;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}
