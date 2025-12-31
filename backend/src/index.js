import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";

dotenv.config();

let isConnected = false;

const ensureDBConnection = async () => {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
      console.log("Database Connected Successfully!");
    }
  } catch (error) {
    console.error("Database Connection Failed: ", error);
  }
};

export default async (req, res) => {
  await ensureDBConnection();
  return app(req, res);
};
