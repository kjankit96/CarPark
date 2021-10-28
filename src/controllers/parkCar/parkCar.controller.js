const connectToDatabase = require("../../loaders/db");
const LotError = require("../../utils/LotError");
const parkingLotModel = require("../../models/parkingLot.model");

module.exports = async (carNo) => {
  try {
    await connectToDatabase();
    let jsn = await parkingLotModel.findOne({carNo: null});
    if (jsn) {
      let car = await parkingLotModel.findOne({carNo: carNo});
      if (car) {
        throw new LotError(204, "Car with this number is already parked.");
      } else {
        let query = {lotNo: jsn.lotNo};
        let update = {carNo: carNo};
        let options = {new: true};
        let park = await parkingLotModel.findOneAndUpdate(query, update, options);
        console.log("I can park ", park);
        if (park) {
          return park;
        } else {
          throw new LotError(204, "Cannot take this Car in. Please Try Later");
        }
      }
    } else {
      throw new LotError(204, "All the Slots are Occupied. Please Try Later!");
    }
  } catch (err) {
    if (err instanceof LotError) {
      throw new LotError(204, err.message);
    } else {
      throw new Error(err.message);
    }
  }
};
