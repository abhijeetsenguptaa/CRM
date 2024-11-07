const express = require('express');
const { ContactCreateController, ContactFetchController } = require('../controllers/contact.controller');

const contactRouter = express.Router();

contactRouter.post('/create-contact', ContactCreateController);
contactRouter.get('/get-contact', ContactFetchController);

module.exports = contactRouter;