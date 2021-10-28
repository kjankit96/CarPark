const connectToDatabase = require("../../loaders/db");
const LotError = require("../../utils/LotError");
const parkingLotModel = require("../../models/parkingLot.model");

const getDetailsbyCarNo = async (carNo) => {
  try {
    await connectToDatabase();
    let jsn = await parkingLotModel.findOne({carNo: carNo});
    if (jsn) {
      return jsn;
    } else {
      throw new LotError(204, "This car is not parked with us.");
    }
  } catch (err) {
    if (err instanceof LotError) {
      throw new LotError(204, err.message);
    } else {
      throw new Error(err.message);
    }
  }
};

const getDetailsbyLotNo = async (lotNo) => {
  try {
    await connectToDatabase();
    let jsn = await parkingLotModel.findOne({lotNo: lotNo});
    if (jsn) {
      return jsn;
    } else {
      throw new LotError(204, "Invalid Lot Number");
    }
  } catch (err) {
    if (err instanceof LotError) {
      throw new LotError(204, err.message);
    } else {
      throw new Error(err.message);
    }
  }
};

module.exports = {getDetailsbyCarNo, getDetailsbyLotNo};