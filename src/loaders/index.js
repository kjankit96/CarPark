const express = require("./express");
const routes = require("./routes");

module.exports = app => {
  express(app);
  routes(app);
};
