// File: /project-service/server.js
import express from 'express';
const app = express();
const port = 7000;

app.use(express.json());

// Endpoint to create a project
app.post('/projects', (req, res) => {
    // Logic to create a project
    res.status(201).json({ message: "Project created successfully" });
});

// Endpoint to fetch all projects
app.get('/projects', (req, res) => {
    // Logic to retrieve projects
    res.status(200).json([{ id: 1, name: "Project 1" }]);
});

app.listen(port, () => {
    console.log(`Project Management service listening at http://localhost:${port}`);
});
