const mongoose = require("mongoose");

const RideDetailschema = new mongoose.Schema(
  {
    driverName: {
      type: String,
      ref: "User",
      required: true,
      unique: false, 
    },
    license: String,
    seat: Number,
    carno: String,
    carname: String,
    cartype: String,
    charge: Number,
    from: String,
    to: String,
    driver_username: {
      type: String, 
      ref: 'User', 
      required: true, 
    },
    date: { type: Date, default: Date.now },
    passenger: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    occupied: { type: Number, default: 0 },
    code: { type: Number, unique: true, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Ridedetail", RideDetailschema);
