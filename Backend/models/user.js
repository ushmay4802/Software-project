const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  username: { type: String, unique: true },
  password: String,
  dob: Date,
  phone: String,
  email: String,
  gender: String,
  totalKmTravelled: Number, 
});
module.exports = mongoose.model('User', userSchema); 