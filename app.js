const express = require('express');

// Router
const { registrationRouter } = require('./routes/registrations.routes');

// Init Express app
const app = express();

app.use(express.json());

// Endpoints
app.use('/api/v1/registrations', registrationRouter);

// Catch non-existing endpoints
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exists in our server`,
    });
});

module.exports = { app };
