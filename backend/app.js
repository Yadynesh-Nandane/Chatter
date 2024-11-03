import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

// App Config
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Hello World");
})

export default app;
