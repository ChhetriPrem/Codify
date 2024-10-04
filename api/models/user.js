const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student",
  },
  createdCourses: [
    {
      type: Schema.Types.ObjectId, // Correctly reference course IDs
      ref: "Course", // Reference to the Course schema
    },
  ],
  enrolledCourses: [
    {
      type: Schema.Types.ObjectId, // Correctly reference course IDs
      ref: "Course", // Reference to the Course schema
    },
  ],
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
