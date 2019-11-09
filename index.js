const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//config
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/rotas", (req, res) => {
  res.render("rotas");
});

app.get("/dash", (req, res) => {
  res.render("dash");
});

app.listen(8080, () => console.log(`server iniciado`));