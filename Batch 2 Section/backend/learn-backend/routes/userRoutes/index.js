const express = require("express");

const routes = express.Router();

routes.get("/test", (req, res) => {
  res.json({
    message: "hello world user",
  });
});

module.exports = routes;
