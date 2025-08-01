import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.port;

const app = express();

app.get("/", (req, res) => {
  res.send("Organix");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
