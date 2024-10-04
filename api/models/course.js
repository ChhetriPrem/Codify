const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Course schema
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  videoURL: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  instructor: {
    type: Schema.Types.ObjectId, // Reference to the User schema (instructor)
    ref: "User", // Specify the referenced model
    required: true, // Optional: Make instructor required
  },
  studentsEnrolled: [
    {
      // Change to an array of ObjectId references
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User schema (students)
    },
  ],
  category: {
    type: String,
    required: true, // Optional: Make category required
  },
  rating: {
    type: Number,
    default: 0, // Optional: Default value for rating
  },
  reviews: [
    {
      // Change to an array of review references
      type: Schema.Types.ObjectId,
      ref: "Review", // Reference to the Review schema
    },
  ],
  published: {
    type: Boolean,
    default: false, // Optional: Default value for published
  },
});

// Export the Course model
const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
