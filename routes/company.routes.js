const express = require('express');
const { CompanyCreateController, upload, CompanyFetchController, CompanyDeleteController, CompanyUpdateController } = require('../controllers/company.controller');

const companyRouter = express.Router();

companyRouter.post('/create-company', upload.single('image'), CompanyCreateController);
companyRouter.get('/get-company', CompanyFetchController);
companyRouter.delete('/delete-company/:id', CompanyDeleteController);
companyRouter.patch('/update-company/:id', upload.single('image'), CompanyUpdateController);


module.exports = companyRouter;