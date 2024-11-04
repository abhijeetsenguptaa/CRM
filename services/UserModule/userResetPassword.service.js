const bcrypt = require('bcrypt');
const UserModel = require("../../models/user.model");

async function UserResetPasswordService(userID, newPassword) {
    try {
        // Check if user exists
        const isUser = await UserModel.findByPk(userID);

        if (!isUser) {
            return {
                status: false,
                message: "User not found!"
            };
        }

        // Hash the new password
        const hashPassword = await bcrypt.hash(newPassword, 10); // Use 10 salt rounds for security
        isUser.password = hashPassword;

        // Save the updated password
        await isUser.save();

        return {
            status: true,
            message: "Password reset successfully"
        };
    } catch (error) {
        console.error("Error in resetting password:", error.message);
        return {
            status: false,
            message: "An error occurred while resetting the password. Please try again later."
        };
    }
}

module.exports = UserResetPasswordService;
