// handles -- login signup login
const UserModel = require("../models/user");
// signup logic
const path = require("path");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY

const preview = async (req, res) => {};
const joinCourse = async (req, res) => {};

const signup = async (req, res) => {
  // signup logic
  // send it to databse
  const { name, email, password, role } = req.body;
  try {
    await UserModel.create({
      name,
      email,
      password,
      role: role,
    });
    const token = await jwt.sign({ email }, SECRET_KEY);

    res.status(200).json({
      message: "User created Successfully",
      success: true,
      token: token,
      role: role,
    });
  } catch (error) {
    console.log("Failed", error);
  }
};

module.exports = { signup, preview };
