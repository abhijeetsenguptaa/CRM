const express = require('express');
const { ContactCreateController, ContactFetchController, ContactUpdateController, ContactDeleteController } = require('../controllers/contact.controller');

const contactRouter = express.Router();

contactRouter.post('/create-contact', ContactCreateController);
contactRouter.get('/get-contact', ContactFetchController);
contactRouter.patch('/update-contact/:id', ContactUpdateController);
contactRouter.delete('/delete-contact/:id', ContactDeleteController);

module.exports = contactRouter;