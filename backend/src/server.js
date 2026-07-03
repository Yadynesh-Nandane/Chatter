import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

await connectDB();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});