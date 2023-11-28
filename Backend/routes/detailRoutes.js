const express = require("express");
const router = express.Router();

const generateUniqueCode = require("../utils/generateUniqueCode");
const riderController = require("../controller/riderController");

router.post("/ridedetails", generateUniqueCode, riderController.riderDetails);
router.post('/createRide', riderController.createRide); 
router.get("/passengerride/:ispassengercount/:isfrom/:isto",riderController.passengerRide);
router.get('/getRideInformation/:riderUsername', riderController.rideInformation); 
router.get('/getPassengerRide/:passengerUsername', riderController.passengerRideInformation); 

module.exports = router;