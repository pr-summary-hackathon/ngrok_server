// Express Server with a POST method
const express = require('express');
const bodyParser = require('body-parser');

// Create Express application
const app = express();
const PORT = 3000;

// Configure middleware to process JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Main route to verify the server is working
app.get('/', (req, res) => {
  res.send('Server is running! Send POST requests to /api/data');
});

// POST route to receive data
app.post('/github-webhook', (req, res) => {
  console.log('Data received:', req.body);

  // Respond with the received data and a timestamp
  res.json({
    success: true,
    message: 'Data received successfully',
    timestamp: new Date().toISOString(),
    receivedData: req.body
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('To expose with ngrok use: ngrok http 3000');
});
