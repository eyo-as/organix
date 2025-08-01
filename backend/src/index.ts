import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const port = process.env.port;

const app = express();

app.get("/", (_req, res) => {
  res.send("Organix");
});

connectDB();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
