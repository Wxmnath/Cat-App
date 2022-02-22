const express = require("express");
const { Cat } = require("./models");

const app = express();

app.use(express.json());

app.post("/cats", (req, res) => {
  Cat.create(req.body).then((cat) => res.status(201).json(cat));
});

app.get("/cats", (req, res) => {
  Cat.findAll(req.body).then((cat) => res.json(cat));
});

app.get("/cats/:catId", (req, res) => {
  Cat.findByPk(req.params.catId).then((cat) => res.json(cat));
});

// Retrieve Cats using query
// app.get("/cats/:string", (req, res) => {
//   const { string } = req.query;
//   Cat.findAll({ where: { name: string } });

//   return res.send();
// });

app.patch("/cats/:catId", (req, res) => {
  const { catId } = req.params;
  Cat.update({ lastFed: new Date() }, { where: { id: catId } });

  return res.send();
});

module.exports = app;
