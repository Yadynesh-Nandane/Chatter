import app from "./app.js";
import dotenv from "dotenv";
import { Database } from "./Database/connect.js";

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    Database();
    app.listen(PORT, () => {
      console.log("Server Started on http://localhost:3000");
    });
  } catch (error) {
    console.error("Error Starting Server", error);
  }
};

startServer();
