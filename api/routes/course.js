const express = require("express");
const { createCourse } = require("../controller/courseController"); // Import controller functions
const router = express.Router();

router.post("/createCourse", createCourse);

module.exports = router;
