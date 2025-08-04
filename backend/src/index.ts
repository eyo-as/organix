import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRouter from "./routes/auth.route";
import taskRouter from "./routes/task.route";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const port = process.env.port;

const app = express();

app.use(
  cors({
    origin: process.env.frontend_url as string,
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use("/api/auth", authRouter);
app.use("/api", taskRouter);

app.get("/", (_req, res) => {
  res.send("Welcome to Organix");
});

connectDB();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
