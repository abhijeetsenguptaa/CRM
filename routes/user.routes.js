const express = require('express');
const { UserRegistrationController, UserLoginController, UserPasswordChangeController } = require('../controllers/user.controller');
const { authentication } = require('../middleware/authentication.middleware');


const userRouter = express.Router();

userRouter.post('/register', UserRegistrationController);
userRouter.post('/login', UserLoginController);
userRouter.post('/change-password', authentication, UserPasswordChangeController);

module.exports = userRouter;