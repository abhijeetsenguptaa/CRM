const LeadModel = require("../../models/lead.model");

async function LeadFetchService(source, status, assignedTo) {
    try {
        const queryOptions = {
            where: {}
        };

        // Conditionally add filters if the parameters are provided
        if (source) {
            queryOptions.where.source = source;
        }
        if (status) {
            queryOptions.where.status = status;
        }
        if (assignedTo) {
            queryOptions.where.assignedTo = assignedTo;
        }

        const leads = await LeadModel.findAll(queryOptions);

        return {
            status: true,
            data: leads,
            message: "Leads fetched successfully."
        };
    } catch (error) {
        console.error("Error in lead fetching:", error.message);
        return {
            status: false,
            message: "An error occurred during lead fetch. Please try again later."
        };
    }
}

module.exports = LeadFetchService;
