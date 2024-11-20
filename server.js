require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import database connection configuration and route modules
const connection = require('./configs/connection');
const userRouter = require('./routes/user.routes');
const leadRouter = require('./routes/lead.routes');
const contactRouter = require('./routes/contact.routes');
const accountRouter = require('./routes/account.routes');
const companyRouter = require('./routes/company.routes');

// Set the port for the server
const PORT = process.env.PORT || 9000;

// Initialize the Express application
const app = express();

// Middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Serve static files
app.use('/dashboard', express.static(path.join(__dirname, './crm-frontend/html/template')));
app.use(express.static(path.join(__dirname, './crm-frontend')));
app.use('/uploads', express.static('uploads')) // checking the static images.

// API routes
app.use('/api/users', userRouter);
app.use('/api/leads', leadRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/accounts', accountRouter);
app.use('/api/companies', companyRouter);

// Start the server after database synchronization
connection.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to sync database:', error.message);
    });

