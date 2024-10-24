const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    try {
        console.log('Received webhook:', JSON.stringify(req.body, null, 4));

        if (req.body && req.body.data && req.body.data.alertStatus === 'Activated') {
            console.log('Alert activated:', req.body.data);
        }

        res.status(200).send('Webhook received!');
    } catch (error) {
        console.error('Error processing the webhook:', error);
        res.status(500).send('Server error');
    }
});

// Add a basic route to catch any other requests and improve error messages
app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
