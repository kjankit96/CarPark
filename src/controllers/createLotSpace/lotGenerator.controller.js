const connectToDatabase = require("../../loaders/db");
const LotError = require("../../utils/LotError");
const parkingLotModel = require("../../models/parkingLot.model");
const crypto = require('crypto');

const getLotSpace = async () => {
  console.log(11);
  try {
    var lotNo = new Array();
    for( var i = 0; i < process.env.PARKING_LOT_SIZE; i++ ) {
      lotNo.push(crypto.randomBytes(1).toString("hex").toUpperCase());
    }
    console.log(lotNo);
    await connectToDatabase();
    if (lotNo.length > 0) {
      lotNo.map( async (key) => {
        let lotSpace = new parkingLotModel({
          lotNo: key
        });
        await lotSpace.save();
        console.log("Lot Point is ", lotSpace);
      });
      let jsn = await parkingLotModel.find({});
      let resData = {
        lotSpaces: jsn
      };
      return resData;
    } else {
      throw new LotError(204, "No Lot Space Generated.");
    }   
  } catch (err) {
    if (err instanceof ZUPError) {
      throw new ZUPError(204, err.message);
    } else {
      throw new Error(err.message);
    }
  }
};
module.exports = { getLotSpace };