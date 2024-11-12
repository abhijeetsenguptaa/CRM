const AccountModel = require("../../models/account.model");

async function AccountFetchService(id,name,email) {
    try {
        // Build a dynamic query object
        const queryOptions = {
            where: {}
        };

        // Add conditions based on provided parameters
        if (id) queryOptions.where.id = id;
        if (name) queryOptions.where.name = name;
        if (email) queryOptions.where.email = email;

        // Fetch accountDetails based on the query options
        const accountDetails = await AccountModel.findAll(queryOptions);

        // Return accountDetails or a message if none found
        if (accountDetails.length > 0) {
            return {
                status: true,
                data: accountDetails
            };
        } else {
            return {
                status: false,
                message: "No accountDetails found with the specified criteria."
            };
        }

    } catch (error) {
        console.error("Error in account fetching:", error.message);
        return {
            status: false,
            message: "An error occurred during account fetching. Please try again later."
        };
    }
};

module.exports = AccountFetchService;