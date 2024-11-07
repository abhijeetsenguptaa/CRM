const express = require('express');
const { ContactCreateController } = require('../controllers/contact.controller');

const contactRouter = express.Router();

contactRouter.post('/create-contact', ContactCreateController);

module.exports = contactRouter;