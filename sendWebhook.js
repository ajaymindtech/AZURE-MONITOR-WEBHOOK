const axios = require('axios');

const webhookUrl = 'https://3c53-27-6-169-252.ngrok-free.app/webhook'; // URL to your webhook endpoint

const data = {
    message: 'Hello, this is a test webhook!',
    timestamp: new Date()
};

axios.post(webhookUrl, data)
    .then(response => {
        console.log('Webhook sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending webhook:', error.message);
    });