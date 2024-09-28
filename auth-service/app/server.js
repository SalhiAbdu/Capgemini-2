// File: /auth-service/server.js
import express from 'express';
const app = express();
const port = 5000;

app.use(express.json());

app.post('/login', (req, res) => {
    // Authentication logic here
    res.status(200).json({ message: "User authenticated" });
});

app.listen(port, () => {
    console.log(`Auth service listening at http://localhost:${port}`);
});