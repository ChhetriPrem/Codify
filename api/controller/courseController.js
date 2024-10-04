// handles -- login signup login
const CourseModel = require("../models/course");
// signup logic
const path = require("path");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "renao@chetri123";

const createCourse = (req, res) => {
  const { pictureUrl, title, description, price } = req.body;

  console.log(price);
  console.log(title);
};
module.exports = { createCourse };
