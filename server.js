const express = require('express');
const config = require('./src/config');
const userRoutes = require('./src/routes/userRoutes');
const mongoose = require('./src/config/database');
const authenticationMiddleware = require('./src/middleware/authentication');
const validationMiddleware = require('./src/middleware/validation');

const app = express();

// Middleware
app.use(express.json());
app.use(authenticationMiddleware); // Apply authentication middleware for all routes

// Routes
app.use('/users', validationMiddleware.validateUser, userRoutes); // Apply request validation middleware for user routes

// Start the server
const PORT = config.port || 3000;
mongoose.connection.once('open', () => {
  console.log('Connected to database');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
