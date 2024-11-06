const express = require('express');
const { LeadCreateController, LeadFetchController } = require('../controllers/lead.controller');

const leadRouter = express.Router();

leadRouter.post('/create-leads', LeadCreateController);
leadRouter.get('/get-leads', LeadFetchController);

module.exports = leadRouter;