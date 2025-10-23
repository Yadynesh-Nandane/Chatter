// import app from "./app.js";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";

dotenv.config();
const app = express();

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

export default handler = async (req, res) => {
  await ensureDBConnection();
  return app(req, res);
};
