const unparkCar = require("./unparkCar.controller");
var HttpStatus = require("http-status-codes");
const LotError = require("../../utils/LotError");

const unparkingCar = async (req, res) => {
  try {
    let body = req.body;
    if (!body.carNo) {
      throw new LotError(204, "Car Number required to Unpark");
    }
    let transaction = await unparkCar(body.carNo);
    if (transaction) {
      res.status(HttpStatus.OK).json({
        status: 200,
        message: "Successfully Unparked!",
        data: transaction,
      });
    } else {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Bad request", status: 204 });
    }
  } catch (err) {
    if (err instanceof LotError) {
      if (err.status === 201) {
        res.status(HttpStatus.CREATED).json({ message: err.message });
      } else {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: err.message });
      }
    } else {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error!" });
    }
  }
};

module.exports = unparkingCar;
