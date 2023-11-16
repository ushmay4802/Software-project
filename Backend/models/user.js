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
});
module.exports = mongoose.model('User', userSchema); 
