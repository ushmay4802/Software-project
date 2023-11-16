const mongoose = require("mongoose");

const RideDetailschema = new mongoose.Schema({
    license: String,
    seat: Number,
    carno : String,
    carname: String,
    cartype : String,
    charge: Number,
    from: String,
    to: String,  
    driver_username: String,
    date: { type: Date, default : Date.now},
    occupied : {type: Number, default: 0},
    passenger: { type: Array, default : []},
    code: { type: Number, unique: true, required: true },
  },{ versionKey: false });

module.exports = mongoose.model('Ridedetail', RideDetailschema); 