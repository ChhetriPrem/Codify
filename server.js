const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./api/routes/auth"); // Import central API route
const courseRoute = require("./api/routes/course"); // Import central API route
const connectDB = require("./api/db.js");
const app = express();
require("dotenv").config();

const path = require("path");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "public")));

connectDB();

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "client", "public", "html", "landing.html")
  );
});
app.get("/preview", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "html", "home.html"));
});
// Use the routes defined in /api/index.js
app.use("/api", apiRoutes);
app.use("/course", courseRoute);
// it comes here saying hey i have a endpoint starting with /api where do i gop
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
