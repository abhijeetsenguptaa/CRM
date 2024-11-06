const LeadModel = require("../../models/lead.model");

async function LeadCreationService(firstName, lastName, email, phoneNumber, source, status, assignedTo, notes) {
    try {
        const newLead = await LeadModel.create({ firstName, lastName, email, phoneNumber, source, status, assignedTo, notes });

        return {
            status: true,
            message: 'Your Lead has been created!',
            data: newLead
        }
    } catch (error) {
        console.error("Error in lead creation:", error.message);
        return {
            status: false,
            message: "An error occurred during lead creation. Please try again later."
        };
    }
};

module.exports = LeadCreationService;