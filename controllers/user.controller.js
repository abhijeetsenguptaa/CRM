const UserRegisterService = require("../services/UserModule/userRegister.service");

async function UserRegistrationController(req, res) {
    try {
        const { name, email, password, role } = req.body;

        const userCreation = await UserRegisterService(name, email, password, role);

        return res.status(userCreation.status ? 200 : 404).json({
            status : userCreation.status,
            message : userCreation.message,
            data : userCreation.data
        })
    } catch (error) {

    }
}

module.exports = { UserRegistrationController };