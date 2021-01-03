const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ["Tareq", "iqram", "sahu", "bahu", "kahu"];

app.get("/", (req, res) => {
  const fruit = {
    name: "Ada bepari",
    price: 200,
    delivery: 10,
  };
  res.send(fruit);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});
//post
app.post("/addUser", (req, res) => {
  //save to database
  const user = req.body;
  user.id = 47;
  res.send(user);
});

app.listen(3000, () => console.log("listening to port 3000"));
