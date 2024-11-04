const bcrypt = require('bcrypt');
const UserModel = require("../../models/user.model");
const JsonTokenGenerator = require('../../utils/utils/JsonTokenGenerator.utils');

async function UserLoginService(email, password) {
    try {
        const isUser = await UserModel.findOne({ where: { email: email } });

        if (!isUser) {
            return {
                status: false,
                message: "User not found!"
            };
        }

        const passwordMatch = await bcrypt.compare(password, isUser.password);

        if (passwordMatch) {
            // Get the current time and adjust for IST (UTC +5:30)
            const now = new Date();
            const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
            const lastLoginIST = new Date(now.getTime() + istOffset);

            isUser.lastLogin = lastLoginIST; // Set lastLogin to IST time
            await isUser.save();

            const token = JsonTokenGenerator(isUser.id, isUser.role);
            return {
                status: true,
                message: "Login successful",
                token: token,
                data: isUser
            };
        } else {
            return {
                status: false,
                message: "Wrong Credentials",
            };
        }
    } catch (error) {
        console.error("Error in user logging in:", error.message);
        return {
            status: false,
            message: "An error occurred during user logging in. Please try again later."
        };
    }
}

module.exports = UserLoginService;
