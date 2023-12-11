const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
Driver : String,
Passenger: String,
From: String,
To: String,
Date: Date,
TotalPassenger: Number,
DistanceTravelled: Number,
Amount: Number,
});
module.exports = mongoose.model('Admin', adminSchema); 