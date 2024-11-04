const bcrypt = require('bcrypt');
const UserModel = require("../../models/user.model");

async function UserRegisterService(name, email, password, role) {
    try {
        const isUser = await UserModel.findOne({ where: { email: email } });

        if (isUser) {
            return {
                status: false,
                message: 'User already registered!'
            }
        }

        // Hash the password
        const hashPassword = bcrypt.hashSync(password, 6);

        const createUser = await UserModel.create({ name: name, email: email, password: hashPassword, role: role });

        return {
            status: true,
            message: "User registration successful!",
            data: createUser
        }
    } catch (error) {
        console.error("Error in user registration:", error.message);
        return {
            status: false,
            message: "An error occurred during user registration. Please try again later."
        };
    }
}

module.exports = UserRegisterService;