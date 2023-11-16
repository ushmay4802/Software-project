const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
router.get("/userdetail/:username", userController.userDetail);
router.post("/newuser", userController.login);
module.exports = router;
