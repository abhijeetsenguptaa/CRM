const express = require('express');
const { LeadCreateController, LeadFetchController, LeadUpdateController, LeadDeleteController, AddNotesController } = require('../controllers/lead.controller');

const leadRouter = express.Router();

leadRouter.post('/create-leads', LeadCreateController);
leadRouter.get('/get-leads', LeadFetchController);
leadRouter.patch('/update-leads/:id', LeadUpdateController);
leadRouter.patch('/delete-leads/:id', LeadDeleteController);
leadRouter.patch('/add-notes/:id', AddNotesController);

module.exports = leadRouter;