const express = require('express');
const authRoutes = require('./routes/auth');      // Import auth routes
 // Import course routes

const router = express.Router();

router.use('/auth', authRoutes);     // All auth routes will start with /auth


module.exports = router;