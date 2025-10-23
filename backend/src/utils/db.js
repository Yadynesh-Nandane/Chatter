import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log("Database connected successfully:", conn.connection.host);
  } catch (error) {
    console.error("Error while connecting to Database: ", error);
  }
};
