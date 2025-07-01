const express = require("express");
const routes = express.Router();

routes.get("/all-users", (req, res) => {
  res.send("All Users");
});

module.exports = routes;
