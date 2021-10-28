const { Router } = require("express");

const { rateLimiterUsingThirdParty } = require("../middlewares/ratelimiter");

const parkCar = require("../controllers/parkCar/parkCar.service");
const unparkCar = require("../controllers/unparkCar/unparkCar.service");
const createLotSpace = require("../controllers/createLotSpace/lotGenerator.service");
const getDetails = require("../controllers/getDetails/getDetails.service");

const router = Router();
module.exports = (app) => {
  app.use('/v1', router);
  router.post("/createLotSpace", rateLimiterUsingThirdParty, createLotSpace);
  router.post("/parkCar", rateLimiterUsingThirdParty, parkCar);
  router.post("/unparkCar", rateLimiterUsingThirdParty, unparkCar);
  router.post("/getDetails", rateLimiterUsingThirdParty, getDetails);
};
