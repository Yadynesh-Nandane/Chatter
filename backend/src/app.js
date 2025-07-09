import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// API routes for the Chat app
app.get("/", (req, res) => {
  res.status(200).send({ status: "Success" });
});
app.use("/api/auth", authRouter);

export default app;
