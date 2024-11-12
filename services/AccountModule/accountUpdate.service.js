const AccountModel = require("../../models/account.model");

async function AccountUpdateService(id, name, industry, website, phone, email, address, city, state, country, notes) {
    try {
        // Check if the account with the given ID exists
        const account = await AccountModel.findByPk(id);

        if (!account) {
            return {
                success: false,
                message: "Account not found"
            };
        }

        // Build the update data object with only provided fields
        const updateData = {};
        if (name !== undefined) updateData.name = name;
        if (industry !== undefined) updateData.industry = industry;
        if (website !== undefined) updateData.website = website;
        if (phone !== undefined) updateData.phone = phone;
        if (email !== undefined) updateData.email = email;
        if (address !== undefined) updateData.address = address;
        if (city !== undefined) updateData.city = city;
        if (state !== undefined) updateData.state = state;
        if (country !== undefined) updateData.country = country;
        if (notes !== undefined) updateData.notes = notes;

        // Update the account with the new data
        await account.save();

        return {
            success: true,
            message: "Account updated successfully",
            data: account
        };
    } catch (error) {
        console.error("Error updating account:", error.message);
        return {
            status: false,
            message: "An error occurred while updating the account. Please try again later."
        };
    }
}

module.exports = AccountUpdateService;
