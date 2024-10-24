const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define the route for webhook requests
app.post('/webhook', (req, res) => {
    console.log('Received webhook:', JSON.stringify(req.body, null, 2));
    res.status(200).send('Webhook received!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});