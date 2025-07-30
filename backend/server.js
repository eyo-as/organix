const express = require("express");
require("dotenv/config.js");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World from ORGANIX!");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
