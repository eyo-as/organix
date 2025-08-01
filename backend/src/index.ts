import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRouter from "./routes/auth.route";
import bodyParser from "body-parser";

dotenv.config();

const port = process.env.port;

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRouter);

app.get("/", (_req, res) => {
  res.send("Organix");
});

connectDB();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
