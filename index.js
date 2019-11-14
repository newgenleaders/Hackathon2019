/*require("dotenv").config();  */

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//config
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/rotas", (req, res) => {
  res.render("rotas");
});

app.get("/dash", (req, res) => {
  res.render("dash");
});

app.listen(/*process.env.PORT ||*/ 8081);
