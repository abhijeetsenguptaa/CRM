const express = require('express');
const { UserRegistrationController, UserLoginController, UserPasswordChangeController, UserResetPasswordController, UserProfileController } = require('../controllers/user.controller');
const { authentication } = require('../middleware/authentication.middleware');


const userRouter = express.Router();

userRouter.post('/register', UserRegistrationController);
userRouter.post('/login', UserLoginController);
userRouter.post('/change-password', authentication, UserPasswordChangeController);
userRouter.post('/reset-password', authentication, UserResetPasswordController);
userRouter.post('/my-profile', authentication, UserProfileController);

module.exports = userRouter;