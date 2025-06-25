const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json()); // Enable JSON body parsing for incoming requests

// Root endpoint - a simple greeting
app.get('/', (req, res) => {
  res.send('Hello from the backend microservice!');
});

// Health check endpoint - useful for Cloud Run to know if the service is running
app.get('/api/health', (req, res) => {
  res.status(200).send('Backend is healthy!');
});

// Placeholder for a login endpoint
// In a real application, this would handle user authentication (e.g., with Firebase Auth)
app.post('/api/login', (req, res) => {
  console.log('Login attempt:', req.body); // Log the request body (e.g., username, password)
  // TODO: Implement actual authentication logic here
  // For now, just send a success message
  res.status(200).json({ message: 'Login endpoint reached. Authentication logic to be added.' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Backend service listening on port ${port}`);
});
