const {getDetailsbyCarNo, getDetailsbyLotNo} = require("./getDetails.controller");
var HttpStatus = require("http-status-codes");
const LotError = require("../../utils/LotError");

const getDetailsService = async (req, res) => {
  try {
    let body = req.body;
    if (body.carNo) { 
      const details = await getDetailsbyCarNo(body.carNo);
      if (details) {
        res.status(200).json({
          status: 200,
          message: "Successfully Retrieved!",
          data: details 
        });
      } else {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: "Bad request", status: 204 });
      }
    } else if (body.lotNo) {
      const details = await getDetailsbyLotNo(body.lotNo);
      if (details) {
        res.status(200).json({
          status: 200,
          message: "Successfully Retrieved!",
          data: details 
        });
      } else {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: "Bad request", status: 204 });
      }
    } else {
      throw new LotError(204, "Either Lot Number or Car Number are required to search.");
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

module.exports = getDetailsService;
