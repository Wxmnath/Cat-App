const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.use(express.json());

// app.post("/", (req, res) => {
//   res.send("hello world");
// });
app.post("/cats", (req, res) => {
  res.send(201).json();
});

module.exports = app;
