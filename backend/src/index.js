import app from "./app.js";
import { connectDB } from "./utils/db.js";

// app.listen()

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on ${PORT}: http://localhost:5001/`);
});