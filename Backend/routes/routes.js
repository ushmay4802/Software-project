//module imports 
const express = require('express'); 
const router = express.Router(); 

//local imports 
const appController = require('../controllers/appController'); 
//driver code 
router.get("/", appController.getHome);

//exports 
module.exports = router; 