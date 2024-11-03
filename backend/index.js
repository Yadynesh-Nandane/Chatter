import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  console.log("Server Started on http://localhost:3000");
});
