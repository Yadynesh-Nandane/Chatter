import app from "./app.js";
import { connectDB } from "./utils/db.js";

// app.listen()

let isConnected = false;
<<<<<<< Updated upstream
const env = process.env.ENV;
const PORT = process.env.PORT;
=======
let handler;
>>>>>>> Stashed changes

// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server running on ${PORT}: http://localhost:5001/`);
//   console.log(`Server running in ${env} Environment`);
// });

app.use((req, res, next) => {
  if (!isConnected) {
    connectDB();
  }
  next();
});
