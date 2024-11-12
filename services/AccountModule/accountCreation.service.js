const AccountModel = require("../../models/account.model");

async function AccountCreationService(name, industry, website, phone, email, address, city, state, country, notes) {
    try {
        // Check if an account with the same email already exists
        const existingAccount = await AccountModel.findOne({
            where: { email: accountData.email }
        });

        if (existingAccount) {
            // Return a message indicating the account already exists
            return {
                success: false,
                message: "Account with this email already exists",
                data: existingAccount
            };
        }

        // Creating a new account entry
        const newAccount = await AccountModel.create({ name, industry, website, phone, email, address, city, state, country, notes });

        // Return the newly created account data
        return {
            success: true,
            message: "Account created successfully",
            data: newAccount
        };
    } catch (error) {
        console.error("Error in account creation:", error.message);
        return {
            status: false,
            message: "An error occurred during account creation. Please try again later."
        };
    }
}

module.exports = AccountCreationService;