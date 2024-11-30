import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRouter from "./Routes/auth.routes.js";
import userRouter from "./Routes/user.routes.js";
import friendsRouter from "./Routes/friends.routes.js";
import messageRouter from "./Routes/message.routes.js";

const app = express();

// App Config
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/friends", friendsRouter);
app.use("/api/v1/messages", messageRouter);

// app.get('/', (req, res) => {
//   res.send("Hello World");
// })

export default app;
