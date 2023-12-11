const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

router.post("/confirmRide",adminController.confirmRide);
module.exports = router;