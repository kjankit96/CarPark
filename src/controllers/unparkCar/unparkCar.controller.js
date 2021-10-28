const connectToDatabase = require("../../loaders/db");
const LotError = require("../../utils/LotError");
const parkingLotModel = require("../../models/parkingLot.model");

module.exports = async (carNo) => {
  try {
    await connectToDatabase();
    let jsn = await parkingLotModel.findOne({carNo: carNo});
    if (jsn) {
        console.log("Car Found ", jsn);
        let query = {lotNo: jsn.lotNo};
        let update = {carNo: null};
        let options = {new: true};
        let unpark = await parkingLotModel.findOneAndUpdate(query, update, options);
        if (unpark) {
          console.log("I had unparked my car ", unpark);
          return unpark;
        } else {
          throw new LotError(204, "Cannot take out my Car. Please help me.");
        }
    } else {
        throw new LotError(204, "Your Car is not parked with us.");
    }
  } catch (err) {
    if (err instanceof LotError) {
      throw new LotError(204, err.message);
    } else {
      throw new Error(err.message);
    }
  }
};