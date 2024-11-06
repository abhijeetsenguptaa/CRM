const express = require('express');
const { LeadCreateController } = require('../controllers/lead.controller');

const leadRouter = express.Router();

leadRouter.post('/create-leads', LeadCreateController);

module.exports = leadRouter;