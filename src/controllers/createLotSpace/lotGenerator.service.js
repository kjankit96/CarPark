const { getLotSpace } = require("./lotGenerator.controller");
var HttpStatus = require("http-status-codes");
const LotError = require("../../utils/LotError");

const generateLotSpace = async (req, res) => {
  try {
    console.log(1);
    let refId = await getLotSpace();
    console.log(2);
    console.log("I am here ", refId);
    if (refId) {
      res.status(200).json({
        status: 200,
        message: "Parking Space Created",
        data: refId,
      });
    } else {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Bad request", status: 204 });
    }
  } catch (err) {
    if (err instanceof LotError) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    } else {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error!" });
    }
  }
};
module.exports = generateLotSpace;
