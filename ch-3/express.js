const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  next();
});

app.use("/users", (req, res, next) => {
  res.send("<h1>users page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>homepage</h1>");
});

app.listen(3000);
