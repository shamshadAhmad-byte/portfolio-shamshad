const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/portfolio.html");
});

app.get("/about", (req, res) => {
  res.send("Health cheack");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
