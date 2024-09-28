// File: /logging-service/server.js
const express = require('express');
const app = express();
const port = 6000;

app.use(express.json());

// Endpoint to receive logs
app.post('/logs', (req, res) => {
    console.log(req.body);
    // Save the log somewhere if needed
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Logging service listening at http://localhost:${port}`);
});