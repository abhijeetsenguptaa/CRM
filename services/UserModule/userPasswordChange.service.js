const bcrypt = require('bcrypt');
const UserModel = require("../../models/user.model");

async function UserPasswordChangeService(userID, oldPassword, newPassword) {
    try {
        const user = await UserModel.findByPk(userID);

        if (!user) {
            return {
                status: false,
                message: "User not found!"
            };
        }

        const checkPassword = await bcrypt.compare(oldPassword, user.password);

        if (checkPassword) {
            const hashPassword = await bcrypt.hash(newPassword, 6); 
            user.password = hashPassword;
            await user.save();

            return {
                status: true,
                message: "Password changed successfully"
            };
        } else {
            return {
                status: false,
                message: "You entered an incorrect password!"
            };
        }
    } catch (error) {
        console.error("Error in changing password:", error.message);
        return {
            status: false,
            message: "An error occurred while changing the password. Please try again later."
        };
    }
}

module.exports = UserPasswordChangeService;
