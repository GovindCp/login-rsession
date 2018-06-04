const express = require("express"),
    UserController = require("../app/controller/userController");

const router = express.Router();
router.post("/profile/update", UserController.updateProfile);

module.exports = router;

