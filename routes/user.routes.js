const express = require('express');
const { UserRegistrationController } = require('../controllers/user.controller');


const userRouter = express.Router();

userRouter.post('/register', UserRegistrationController);

module.exports = userRouter;