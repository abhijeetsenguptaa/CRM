require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Import database connection configuration
const connection = require('./configs/connection');
const userRouter = require('./routes/user.routes');
const leadRouter = require('./routes/lead.routes');

// Set the port for the server to run on, defaulting to 9000 if not specified in the environment
const PORT = process.env.PORT || 9000;

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());


// Parse incoming JSON requests
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/leads', leadRouter);


// Synchronize the database connection and start the server
connection.sync().then(() => {
    app.listen(PORT, () => {
        // Log a message when the server is successfully running
        console.log(`Server is running on port ${PORT}`);
    });
});