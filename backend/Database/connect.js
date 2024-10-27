import mongoose from "mongoose";

const database = () => {
  mongoose.set({'strictQuery': true});
  mongoose.connect(process.env.DB_URL)
  .then()
}