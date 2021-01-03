const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I know to how to open node yay....");
});

app.listen(3000, () => console.log("listening to port 3000"));
