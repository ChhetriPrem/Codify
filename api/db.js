const mongoose = require("mongoose");

const mongoURL = process.env.mongoUrl;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Connection with DB failed. Error:  ${error}`);
  }
};

module.exports = connectDB;
