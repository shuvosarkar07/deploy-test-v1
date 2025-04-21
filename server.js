const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

// Load environment variables
require('dotenv').config();

// Import routes
const listingsRoutes = require('./routes/listings');

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/listings', listingsRoutes);

// Serve the main HTML file for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;