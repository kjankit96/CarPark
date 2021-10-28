var mongoose = require("mongoose");

var parkingLot = new mongoose.Schema(
  {
    lotNo: {
      type: String,
    },
    carNo: {
      type: String,
      default: null
    },
  },
  { timestamps: true }
);

var parkingLotModel = mongoose.model(
  "nasacademy-parkingLot",
  parkingLot,
  "nasacademy-parkingLot"
);
module.exports = parkingLotModel;
