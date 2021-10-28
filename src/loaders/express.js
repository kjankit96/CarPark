const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");

module.exports = app => {
  // BodyParser Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(cookieParser());

  // Passport init
  app.use(passport.initialize());
  app.use(passport.session());
};
