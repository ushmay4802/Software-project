const express = require("express");
const router = express.Router();

const generateUniqueCode = require("../utils/generateUniqueCode");
const riderController = require("../controllers/riderController");

app.post("/ridedetails", generateUniqueCode, riderController.riderDetails);

app.get("/passengerride/:ispassengercount/:isfrom/:isto");

module.exports = router;
