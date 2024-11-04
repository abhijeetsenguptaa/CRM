const UserLoginService = require("../services/UserModule/userLogin.service");
const UserPasswordChangeService = require("../services/UserModule/userPasswordChange.service");
const UserRegisterService = require("../services/UserModule/userRegister.service");

async function UserRegistrationController(req, res) {
    try {
        const { name, email, password, role } = req.body;

        const userCreation = await UserRegisterService(name, email, password, role);

        return res.status(userCreation.status ? 200 : 404).json({
            status: userCreation.status,
            message: userCreation.message,
            data: userCreation.data
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
}

async function UserLoginController(req, res) {
    try {
        const { email, password } = req.body;

        const userLogin = await UserLoginService(email, password);

        return res.status(userLogin.status ? 200 : 404).json({
            status: userLogin.status,
            message: userLogin.message,
            data: userLogin.data,
            token: userLogin.token
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
}

async function UserPasswordChangeController(req, res) {
    try {
        const { oldPassword, newPassword } = req.body;
        const userID = req.userID;

        const userLogin = await UserPasswordChangeService(userID, oldPassword, newPassword);

        return res.status(userLogin.status ? 200 : 404).json({
            status: userLogin.status,
            message: userLogin.message
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
}

module.exports = { UserRegistrationController, UserLoginController, UserPasswordChangeController };