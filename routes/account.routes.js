const express = require('express');
const { AccountCreateController, AccountFetchController, AccountUpdateController, AccountDeleteController } = require('../controllers/account.controller');

const accountRouter = express.Router();

accountRouter.post('/create-account', AccountCreateController);
accountRouter.get('/get-account', AccountFetchController);
accountRouter.patch('/update-account/:id', AccountUpdateController);
accountRouter.delete('/delete-account/:id', AccountDeleteController);

module.exports = accountRouter;