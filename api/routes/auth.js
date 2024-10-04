// handles route like
// router.post('/signup', authController.signup);
// router.post('/login', authController.login);

// api> controller >authcontroller.js

//   api>routes>auth.js
const express = require("express");
const { signup, preview } = require("../controller/authController"); // Import controller functions
const router = express.Router();

router.post("/signup", signup);
router.get("/preview", preview);

module.exports = router;
