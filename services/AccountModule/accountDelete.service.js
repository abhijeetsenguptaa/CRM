const AccountModel = require("../../models/account.model");

async function AccountDeleteService(id) {
    try {
        const requiredAccount = await AccountModel.findByPk(id);

        if (!requiredAccount) {
            return {
                status: false,
                message: "Account as requested not found!"
            }
        }

        await requiredAccount.destroy();

        return {
            status: true,
            message: "Account deleted successfully!"
        }
    } catch (error) {
        console.error("Error deleting Account:", error.message);
        return {
            status: false,
            message: "An error occurred while deleting the Account. Please try again later."
        };
    }
};

module.exports = AccountDeleteService;