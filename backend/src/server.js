import { server } from "./socket/socket.js";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";

dotenv.config();
const PORT = process.env.PORT || 7001;

await connectDB();

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
