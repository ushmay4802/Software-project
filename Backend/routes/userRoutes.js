const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
router.get("/userdetail/:username", userController.userDetail);
router.post("/newuser", userController.register);
router.put("/token",userController.token);
module.exports = router;
