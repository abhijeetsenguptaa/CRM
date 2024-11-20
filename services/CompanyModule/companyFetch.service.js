const CompanyModel = require("../../models/company.model");

async function CompanyFetchService(id, name, slug) {
    try {
        // Build a dynamic query object
        const queryOptions = {
            where: {}
        };

        // Add conditions based on provided parameters
        if (id) queryOptions.where.id = id;
        if (name) queryOptions.where.name = name;
        if (slug) queryOptions.where.slug = slug;

        // Fetch contacts based on the query options
        const company = await CompanyModel.findAll(queryOptions);

        // Return contacts or a message if none found
        if (company.length > 0) {
            return {
                status: true,
                data: company
            };
        } else {
            return {
                status: false,
                message: "No company found with the specified criteria."
            };
        }

    } catch (error) {
        console.error("Error in company fetching:", error.message);
        return {
            status: false,
            message: "An error occurred during company fetching. Please try again later."
        };
    }
};


module.exports = CompanyFetchService;