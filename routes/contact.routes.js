const express = require('express');
const { ContactCreateController, ContactFetchController, ContactUpdateController } = require('../controllers/contact.controller');

const contactRouter = express.Router();

contactRouter.post('/create-contact', ContactCreateController);
contactRouter.get('/get-contact', ContactFetchController);
contactRouter.patch('/update-contact/:id', ContactUpdateController);

module.exports = contactRouter;